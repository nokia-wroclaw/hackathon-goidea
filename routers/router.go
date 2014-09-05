package routers

import (
	"../controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/api/ideas", &controllers.IdeaController{})
	beego.Router("/api/files", &controllers.FileController{})
	beego.Router("/api/users", &controllers.UserController{})
	beego.Router("/api/comments", &controllers.CommentController{})
	//begoo.Router("api/:collection:string",&controllers.ApiController)
//    beego.Router("/login", &controllers.LoginController{})
}

