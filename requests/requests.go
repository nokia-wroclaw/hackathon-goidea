package requests

import (
	"encoding/json"
	"github.com/astaxie/beego/orm"
)

type ApiRequest struct {
	Collection string
	Filter map[string]string
	OrderBy []string
	Limit uint
	Offset uint
}

func NewApiRequest(payload []byte) *ApiRequest {
	request := new(ApiRequest)
	json.Unmarshal(payload, &request)
	return request
}

func (this *ApiRequest) GetQuery(collectionName string) orm.QuerySeter {
	o := orm.NewOrm()
	queryTable := o.QueryTable(collectionName)
	for key, value := range this.Filter {
		queryTable = queryTable.Filter(key, value)
	}
	queryTable = queryTable.OrderBy(this.OrderBy...)
	queryTable = queryTable.Limit(this.Limit,this.Offset)
	return queryTable;
}
