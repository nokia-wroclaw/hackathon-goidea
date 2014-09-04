package routers

import (
	"../controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.AutoRouter(&controllers.ApiController{})
	//begoo.Router("api/:collection:string",&controllers.ApiController)
//    beego.Router("/login", &controllers.LoginController{})
}

