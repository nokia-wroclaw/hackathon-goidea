package main

import (
	_ "github.com/lib/pq"
	"./models"
	"github.com/astaxie/beego/orm"
	_ "./routers"
	"github.com/astaxie/beego"
)

func init() {
	orm.RegisterModel(new(models.Idea))
	orm.RegisterDataBase("default", "postgres", "user=goidea password=goidea host=localhost port=5432 dbname=goidea sslmode=disable", 30)
}

func main() {
	beego.Run()
}


