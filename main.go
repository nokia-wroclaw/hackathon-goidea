package main

import (
	_ "github.com/lib/pq"
	"./models"
	"github.com/astaxie/beego/orm"
	_ "./routers"
//	"./modules"
	"github.com/astaxie/beego"
)

func init() {
	orm.RegisterModel(new(models.Idea))
	orm.RegisterModel(new(models.User))
	orm.RegisterModel(new(models.File))
	orm.RegisterDataBase("default", "postgres", "user=goidea password=goidea host=localhost port=5432 dbname=goidea sslmode=disable", 30)
}

func main() {
	//	config := new(modules.Configuration)
	//	auth := new(modules.Authentication)
	//	auth.Login(config.Key("xacas"), "user", "pass");

	// Usage: go run main.go orm syncdb -force=1
	orm.RunCommand()

	beego.Run()
}


