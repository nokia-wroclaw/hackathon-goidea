package test

import (
//	"reflect"
	"testing"
	"../models"

//	"log"
	"fmt"
//	"time"
	_ "github.com/lib/pq"
	"github.com/astaxie/beego/orm"
)

func init() {
	orm.RegisterModel(new(models.Idea))
	orm.RegisterModel(new(models.User))
	orm.RegisterDataBase("default", "postgres", "user=goidea password=goidea host=localhost port=5432 dbname=test sslmode=disable", 30)
	err := orm.RunSyncdb("default", true, false)
	if err != nil {
		fmt.Println(err)
	}
	//orm.Debug = true
}

func TestInsertUser(t *testing.T) {
	o := orm.NewOrm()

	user := models.User{
		Id       : 0,
		Key      : "",
		Username : "nobody",
		Fullname : "nobody",
		Mail     : "nobody@nsn.com",
	}

	o.Begin()
	_, err := o.Insert(&user)
	o.Rollback()
	if err != nil {
		t.Errorf("Unable to insert user: %s", err)
	}
}
