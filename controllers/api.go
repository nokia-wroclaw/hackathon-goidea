package controllers

import (
	"log"
	"time"
	"strings"
	"strconv"
	"encoding/json"
	"github.com/astaxie/beego"
	"./../models"
	"./../requests"
	"github.com/astaxie/beego/orm"
)

const (
	FilesDir = "./files"
	FilesField = "file"
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

func (this *BaseController) fetchAndRespond(entityName string, entity interface{}) {
	this.getRequest().GetQuery(entityName).RelatedSel().All(entity)
	this.respond(entity)
}

func (this *BaseController) upsert(query interface{}, entity interface{}) {
	o := orm.NewOrm()
	err := o.Read(query)
	if err == orm.ErrNoRows || err == orm.ErrMissPK {
		if id, err := o.Insert(entity); err == nil {
			log.Println("Entity inserted: ", id)
		} else {
			log.Println("ERROR: inserting", err)
			this.Abort("400")
		}
	} else {
		if id, err := o.Update(entity); err == nil {
			log.Println("Entity updated: ", id)
		} else {
			log.Println("ERROR: updating id ", id, err)
			this.Abort("400")
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
	this.fetchAndRespond("idea", &ideas)
}

func (this *IdeaController) Put() {
	idea := models.Idea{}
	json.Unmarshal(this.Ctx.Input.RequestBody, &idea)
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
	this.fetchAndRespond("user", &users)
}

func (this *UserController) Put() {
	user := models.User{}
	json.Unmarshal(this.Ctx.Input.RequestBody, &user)
	query := models.User{Id:user.Id}

	this.upsert(&query, &user)
	this.respond(&user)
}

//##########################################################

type CommentController struct {
	BaseController
}

func (this *CommentController) Post() {
	var comments []*models.Comment
	this.fetchAndRespond("comment", &comments)
}

func (this *CommentController) Put() {
	comment := models.Comment{}
	json.Unmarshal(this.Ctx.Input.RequestBody, &comment)
	query := models.Comment{Id:comment.Id}

	this.upsert(&query, &comment)
	this.respond(&comment)
}

//##########################################################

type FileController struct {
	BaseController
}

func (this *FileController) Post() {
	_, header, _ := this.GetFile(FilesField);
	filename := strings.Replace(strconv.FormatInt(time.Now().Unix(), 10) + " " + header.Filename, " ", "_", -1);
	errorSave := this.SaveToFile(FilesField, FilesDir + "/" + filename);
	if errorSave != nil {
		log.Fatal(errorSave)
	}

	o := orm.NewOrm()
	file := models.File{}
	file.Title = header.Filename
	file.Filename = filename
	_, errorInsert := o.Insert(&file)
	if errorInsert != nil {
		log.Fatal(errorInsert)
	}

	o.Read(&file)
	this.Data["json"] = &file
	this.ServeJson()
}

//##########################################################
