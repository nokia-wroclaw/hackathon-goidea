package models

type User struct {
	Id   int
	Title string `orm:"size(100)"`
}

type Idea struct {
	Id   int
	Title string `orm:"size(100)"`
	//Description string `orm:"size(1000)"`
	//Status string `orm:"size(1000)"`
}
