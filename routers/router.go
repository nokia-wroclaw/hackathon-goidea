package routers

import (
	"../controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/api", &controllers.ApiController{})
//    beego.Router("/login", &controllers.LoginController{})
}

