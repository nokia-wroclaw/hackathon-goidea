package controllers

import (
	"encoding/json"
	"github.com/astaxie/beego"
	"./../models"
	"github.com/astaxie/beego/orm"
)

type ApiController struct {
	beego.Controller
}

type ApiRequest struct {
	Collection string
	Filtering map[string]string
}

func (this *ApiController) Ideas() {
	var request ApiRequest
	json.Unmarshal(this.Ctx.Input.RequestBody, &request)

	o := orm.NewOrm()

	var ideas []*models.Idea

	table := o.QueryTable("idea")
	for key, value := range request.Filtering {
		table = table.Filter(key, value)
	}
	table.All(&ideas)

	this.Data["json"] = &ideas
	this.ServeJson()
}

func (this *ApiController) Insert() {
	o := orm.NewOrm()

	idea := models.Idea{Title: "DUPA"}

	o.Insert(&idea)

	this.Data["json"] = &idea
	this.ServeJson()
}


