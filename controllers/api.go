package controllers

import (
	"log"
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
	Filter map[string]string
	OrderBy []string
	Limit uint
	Offset uint
}

func (this *ApiController) Ideas() {
	var request ApiRequest

	json.Unmarshal(this.Ctx.Input.RequestBody, &request)

	o := orm.NewOrm()

	var ideas []*models.Idea

	table := o.QueryTable("idea")
	for key, value := range request.Filter {
		table = table.Filter(key, value)
	}
	table = table.OrderBy(request.OrderBy...)
	table = table.Limit(request.Limit,request.Offset)

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


