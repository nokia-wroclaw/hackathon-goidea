package controllers

import (
	//"log"
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

func SetQuery(request *ApiRequest, collectionName string) orm.QuerySeter {
	o := orm.NewOrm()
	queryTable := o.QueryTable(collectionName)
	for key, value := range request.Filter {
		queryTable = queryTable.Filter(key, value)
	}
	queryTable = queryTable.OrderBy(request.OrderBy...)
	queryTable = queryTable.Limit(request.Limit,request.Offset)
	return queryTable;
}

func (this *ApiController) Ideas() {
	var request ApiRequest
	json.Unmarshal(this.Ctx.Input.RequestBody, &request)
	var ideas []*models.Idea

	table := SetQuery(&request,"idea")
	table.All(&ideas)

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


