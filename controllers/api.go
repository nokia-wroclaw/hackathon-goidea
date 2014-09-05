package controllers

import (
	//"log"
	"github.com/astaxie/beego"
	"./../models"
	"./../requests"
	"github.com/astaxie/beego/orm"
)

type ApiController struct {
	beego.Controller
}

func (this *ApiController) getRequest() *requests.ApiRequest {
	return requests.NewApiRequest(this.Ctx.Input.RequestBody)
}

func (this *ApiController) Ideas() {
	var ideas []*models.Idea

	this.getRequest().GetQuery("idea").All(&ideas)

	this.Data["json"] = &ideas
	this.ServeJson()
}

func (this *ApiController) Users() {
	var users []*models.User

	this.getRequest().GetQuery("user").All(&users)

	this.Data["json"] = &users
	this.ServeJson()
}

func (this *ApiController) Put() {
	o := orm.NewOrm()

	idea := models.Idea{Title: "DUPA"}

	o.Insert(&idea)

	this.Data["json"] = &idea
	this.ServeJson()
}


