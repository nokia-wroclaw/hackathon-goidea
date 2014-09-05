package controllers

import (
	//"log"
	"encoding/json"
	"github.com/astaxie/beego"
	"./../models"
	"./../requests"
	"github.com/astaxie/beego/orm"
)

type ApiController struct {
	beego.Controller
}

func (this *ApiController) Ideas() {
	request := requests.ApiRequest{}
	var ideas []*models.Idea

	json.Unmarshal(this.Ctx.Input.RequestBody, &request)
	request.GetQuery("idea").All(&ideas)

	this.Data["json"] = &ideas
	this.ServeJson()
}

func (this *ApiController) Put() {
	o := orm.NewOrm()

	idea := models.Idea{Title: "DUPA"}

	o.Insert(&idea)

	this.Data["json"] = &idea
	this.ServeJson()
}


