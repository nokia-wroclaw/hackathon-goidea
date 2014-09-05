package models

import (
	"time"
)

type Idea struct {
	Id           int        `orm:"pk;auto"`
	CreationDate time.Time  `orm:"auto_now_add;type(datetime)"`
	EventDate    time.Time  `orm:"type(datetime)"`
	Title        string     `orm:"size(100)"`
	Description  string     `orm:"type(text)"`
	Status       string     `orm:"size(10)"`
	Creator      *User      `orm:"rel(fk)"`
	Voters       []*User    `orm:"rel(m2m);rel_table(user_idea_votes)"`
	Assignees    []*User    `orm:"rel(m2m);rel_table(user_idea_assignees)"`
	Comments     []*Comment `orm:"reverse(many);on_delete(cascade)"`
}

type User struct {
	Id         int        `orm:"pk;auto"`
	Key        string     `orm:"size(100)"`
	Username   string     `orm:"size(100)"`
	Fullname   string     `orm:"size(100)"`
	Mail       string     `orm:"size(100)"`
	Role       string     `orm:"size(10);default(BASIC)"`
	Created    []*Idea    `orm:"reverse(many)" json:"-"`
	VotedOn    []*Idea    `orm:"reverse(many)" json:"-"`
	AssignedTo []*Idea    `orm:"reverse(many)" json:"-"`
	Comments   []*Comment `orm:"reverse(many)" json:"-"`
}

type Comment struct {
	Id           int       `orm:"pk;auto"`
	CreationDate time.Time `orm:"auto_now_add;type(datetime)"`
	Body         string    `orm:"type(text)"`
	User         *User     `orm:"rel(fk)"`
	Idea         *Idea     `orm:"rel(fk)"`
}

type File struct {
	Id           int
	Title        string    `orm:"size(100)"`
	Filename     string    `orm:"size(100)"`
	CreationDate time.Time `orm:"auto_now_add;type(datetime)"`
}
