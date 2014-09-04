package routers

import (
	"../controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.SetStaticPath("/static", "static")
	beego.Router("/", &controllers.MainController{})
	beego.Router("/api", &controllers.ApiController{})
}

