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
