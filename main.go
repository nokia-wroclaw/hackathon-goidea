package main

import (
	_ "github.com/lib/pq"
	"./models"
	"github.com/astaxie/beego/orm"
	_ "./routers"
	"github.com/astaxie/beego"
)

func init() {
	orm.RegisterModel(new(models.Idea))
	orm.RegisterModel(new(models.User))
	orm.RegisterModel(new(models.File))
	orm.RegisterModel(new(models.Comment))
	orm.RegisterDataBase("default", "postgres", "user=goidea password=goidea host=localhost port=5432 dbname=goidea sslmode=disable", 30)
}

func main() {
	// Usage: go run main.go orm syncdb -force=1
	// orm.RunCommand()

	beego.Run()
}
