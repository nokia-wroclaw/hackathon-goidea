package controllers

import (
	"encoding/json"
	"net/http"
	"./../modules"
	"github.com/astaxie/beego"
)

type Credentials struct {
	Username string
	Password string
}

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
	credentials := new(Credentials)
	json.Unmarshal(this.Ctx.Input.RequestBody, &credentials)
	login := auth.Login(config.Key("xacas"), credentials.Username, credentials.Password)
	if login {
		this.SetSession("user", auth.Entity)
		http.Error(this.Ctx.ResponseWriter, "true", 200)
	} else {
		this.DelSession("user")
		http.Error(this.Ctx.ResponseWriter, "false", 403)
	}
}
