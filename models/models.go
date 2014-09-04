package models

type User struct {
	Id   int
	Key string `orm:"size(100)"`
	Username string `orm:"size(100)"`
	Fullname string `orm:"size(100)"`
	Mail string `orm:"size(100)"`
}

type Idea struct {
	Id   int
	Title string `orm:"size(100)"`
	//Description string `orm:"size(1000)"`
	//Status string `orm:"size(1000)"`
}
