package routers

import (
	"../controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.AutoRouter(&controllers.ApiController{})
//    beego.Router("/login", &controllers.LoginController{})
}

