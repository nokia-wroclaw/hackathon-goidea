package controllers

import (
	"./../modules"
	"github.com/astaxie/beego"
)

const (
	FieldUsername = "username"
	FieldPassword = "password"
)

type AuthController struct {
	beego.Controller
}

func (this *AuthController) Get() {
	this.Data["json"] = this.GetSession("user")
	this.ServeJson()
}

func (this *AuthController) Delete() {
	this.DelSession("user")
	this.ServeJson()
}

func (this *AuthController) Post() {
	config := new(modules.Configuration)
	auth := new(modules.Authentication)
	username := this.GetString(FieldUsername)
	password := this.GetString(FieldPassword)
	login := auth.Login(config.Key("xacas"), username, password)
	if login {
		this.SetSession("user", auth.Entity)
	} else {
		this.DelSession("user")
	}
	this.Data["json"] = login
	this.ServeJson()
}
