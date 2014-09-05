package modules

import (
	"encoding/json"
)

const (
	TokenUrl = "api/v2/initialToken"
	UserUrl = "api/v2/users"
)

// ============================================================

type RequestToken struct {
	ServiceName   string `json:"serviceName"`
	ServiceSecret string `json:"serviceSecret"`
	UserName      string `json:"userName"`
	UserPassword  string `json:"userPassword"`
}

type ResponseToken struct {
	Token string `json:"token"`
}

// ============================================================

type RequestUser struct {
	ServiceSecret string `json:"serviceSecret"`
}

type ResponseUser struct {
	UserId          string `json:"userId"`
	EmployeeNumber  string `json:"employeeNumber"`
	DisplayName     string `json:"displayName"`
	Mail            string `json:"mail"`
	Domain          string `json:"domain"`
	Title           string `json:"title"`
	Department      string `json:"department"`
	Team            string `json:"team"`
	ManagerUsername string `json:"managerUsername"`
}

// ============================================================

type Authentication struct {
	Token string
	User  ResponseUser
}

func (this *Authentication) Login(config map[string]interface{}, username string, password string) bool {
	token, success := this.createInitialToken(config, username, password);
	this.Token = token;
	if success {
		user := this.getUserData(config, token);
		this.User = user
	}
	return success
}

func (this *Authentication) createInitialToken(config map[string]interface{}, username string, password string) (string, bool) {
	request := Request{}
	url := BuildUrl(config["url"].(string), TokenUrl)
	query := RequestToken{
		ServiceName: config["serviceName"].(string),
		ServiceSecret: config["password"].(string),
		UserName: username,
		UserPassword: password,
	}

	response := ResponseToken{}
	payload, _ := json.Marshal(query)
	data, status := request.Put(url, payload)
	json.Unmarshal(data, &response)
	if status == 200 {
		return response.Token, true
	}
	return "", false
}

func (this *Authentication) getUserData(config map[string]interface{}, token string) ResponseUser {
	request := Request{}
	url := BuildUrl(config["url"].(string), UserUrl, token)
	query := RequestToken{
		ServiceSecret: config["password"].(string),
	}

	response := ResponseUser{}
	payload, _ := json.Marshal(query)
	data, _ := request.Post(url, payload)
	json.Unmarshal(data, &response)
	return response
}
