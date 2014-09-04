package controllers

import (
	"fmt"
	"github.com/astaxie/beego"
	"./../models"
	"github.com/astaxie/beego/orm"
)

type ApiController struct {
	beego.Controller
}

func (this *ApiController) Get() {
	o := orm.NewOrm()

	idea := models.Idea{Title: "DUPA"}

	id, err := o.Insert(&idea)
	this.Ctx.Output.Body([]byte("hello world id:"))
	fmt.Printf("ID: %d, ERR:%v\n", id, err)

	//	// update
	//	user.Name = "astaxie"
	//	num, err := o.Update(&user)
	//	fmt.Printf("NUM: %d, ERR: %v\n", num, err)
	//
	//	// read one
	//	u := models.User{Id: user.Id}
	//	err = o.Read(&u)
	//	fmt.Printf("ERR: %v\n", err)
	//
	//	// delete
	//	num, err = o.Delete(&u)
	//	fmt.Printf("NUM: %d, ERR: %v\n", num, err)


}
