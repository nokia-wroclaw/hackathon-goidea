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

func (this *ApiController) getRequest() *requests.ApiRequest {
	request := requests.ApiRequest{}
	json.Unmarshal(this.Ctx.Input.RequestBody, &request)
	return &request
}

func (this *ApiController) Ideas() {
	var ideas []*models.Idea

	this.getRequest().GetQuery("idea").All(&ideas)

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


