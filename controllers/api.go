package controllers

import (
	"log"
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

func (this *BaseController) respond(entity interface{}) {
	this.Data["json"] = entity
	this.ServeJson()
}

func (this *BaseController) upsert(query interface{}, entity interface{}) {
	o := orm.NewOrm()
	err := o.Read(query)
	if err == orm.ErrNoRows || err == orm.ErrMissPK {
		if id, err := o.Insert(entity); err == nil {
			log.Println("ERROR: inserting")
		} else {
			log.Println("Entity inserted: ", id)
		}
	} else {
		if id, err := o.Update(entity); err == nil {
			log.Println("ERROR: updating id ", id)
		} else {
			log.Println("Entity updated: ", id)
		}
	}
	o.Read(entity)
}

//##########################################################
type IdeaController struct {
	BaseController
}

func (this *IdeaController) Post() {
	var ideas []*models.Idea
	this.getRequest().GetQuery("idea").All(&ideas)
	this.respond(&ideas)
}

func (this *IdeaController) Put() {
	idea := models.Idea{}
	json.Unmarshal(this.Ctx.Input.RequestBody, &idea)

	log.Println(string(this.Ctx.Input.RequestBody))

	log.Println("Creator", idea.Creator)
	log.Println(idea)


	query := models.Idea{Id:idea.Id}

	this.upsert(&query, &idea)
	this.respond(&idea)
}
//##########################################################
type UserController struct {
	BaseController
}

func (this *UserController) Post() {
	var users []*models.User
	this.getRequest().GetQuery("user").All(&users)
	this.respond(&users)
}

func (this *UserController) Put() {
	user := models.User{}
	json.Unmarshal(this.Ctx.Input.RequestBody, &user)
	query := models.User{Id:user.Id}

	this.upsert(&query, &user)
	this.respond(&user)
}
//##########################################################





