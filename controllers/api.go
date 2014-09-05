package controllers

import (
	//"log"
	"encoding/json"
	"github.com/astaxie/beego"
	"./../models"
	"./../requests"
	"github.com/astaxie/beego/orm"
)

//##########################################################
type BaseController struct {
	beego.Controller
}

func (this *BaseController) getRequest() *requests.ApiRequest {
	return requests.NewApiRequest(this.Ctx.Input.RequestBody)
}

// TODO reflection, not copy paste
//##########################################################
type IdeaController struct {
	BaseController
}

func (this *IdeaController) Post() {
	var ideas []*models.Idea

	this.getRequest().GetQuery("idea").All(&ideas)

	this.Data["json"] = &ideas
	this.ServeJson()
}

func (this *IdeaController) Put() {
	o := orm.NewOrm()
	idea := models.Idea{}
	json.Unmarshal(this.Ctx.Input.RequestBody, &idea)

	query := models.Idea{Id:idea.Id}
	err := o.Read(&query)
	if err == orm.ErrNoRows || err == orm.ErrMissPK {
		o.Insert(&idea)
	} else {
		o.Update(&idea)
	}

	o.Read(&idea)

	this.Data["json"] = &idea
	this.ServeJson()
}
//##########################################################





