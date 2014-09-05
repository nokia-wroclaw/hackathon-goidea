package routers

import (
	"../controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/api/ideas", &controllers.IdeaController{})
	beego.Router("/api/files", &controllers.FileController{})
	//begoo.Router("api/:collection:string",&controllers.ApiController)
//    beego.Router("/login", &controllers.LoginController{})
}

