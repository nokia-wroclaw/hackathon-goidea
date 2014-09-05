package controllers

import (
	"net/http"
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
	user := this.GetSession("user")
	if user != nil {
		this.Data["json"] = user
		this.ServeJson()
	}
	this.Abort("403")
}

func (this *AuthController) Delete() {
	this.DelSession("user")
	http.Error(this.Ctx.ResponseWriter, "true", 200)
}

func (this *AuthController) Post() {
	config := new(modules.Configuration)
	auth := new(modules.Authentication)
	username := this.GetString(FieldUsername)
	password := this.GetString(FieldPassword)
	login := auth.Login(config.Key("xacas"), username, password)
	if login {
		this.SetSession("user", auth.Entity)
		http.Error(this.Ctx.ResponseWriter, "true", 200)
	} else {
		this.DelSession("user")
		http.Error(this.Ctx.ResponseWriter, "false", 403)
	}
}
