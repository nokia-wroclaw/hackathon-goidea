package routers

import (
	"../controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/api/ideas", &controllers.IdeaController{})
	beego.Router("/api/users", &controllers.UserController{})
	//begoo.Router("api/:collection:string",&controllers.ApiController)
//    beego.Router("/login", &controllers.LoginController{})
}

