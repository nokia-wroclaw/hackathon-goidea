package modules

import (
	"log"
	_ "github.com/astaxie/beego/config/yaml"
	"github.com/astaxie/beego/config"
)

type Configuration struct {}

func (this *Configuration) Get() config.ConfigContainer {
	data, error := config.NewConfig("yaml", "./conf/app.yml")
	if error != nil {
		log.Fatal(error)
	}
	return data
}

func (this *Configuration) Key(key string) map[string]interface{} {
	element, _ := this.Get().DIY(key)
	return element.(map[string]interface{})
}

