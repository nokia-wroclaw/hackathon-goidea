package models

import (
	"time"
)

type Idea struct {
	Id           int
	Title        string    `orm:"size(100)"`
	CreationDate time.Time `orm:"auto_now_add;type(datetime)"`
	EventDate    time.Time `orm:"type(datetime)"`
	Votes        int
	Description  string    `orm:"type(text)"`
	Status       string    `orm:"size(10)"`
	Creator      *User     `orm:"rel(fk)"`
	Assignees    []*User   `orm:"rel(m2m)"`
}

type User struct {
	Id       int
	Key      string  `orm:"size(100)"`
	Username string  `orm:"size(100)"`
	Fullname string  `orm:"size(100)"`
	Mail     string  `orm:"size(100)"`
	Role     string  `orm:"size(10);default(BASIC)"`
	MyIdeas  []*Idea `orm:"reverse(many)" json:"-"`
	Ideas    []*Idea `orm:"reverse(many)" json:"-"`
}
