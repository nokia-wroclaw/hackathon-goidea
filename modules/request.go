package modules

import (
	"strings"
	"log"
	"bytes"
	"net/http"
	"io/ioutil"
	"crypto/tls"
)

type Request struct {}

func GetClient() *http.Client {
	transport := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}
	client := http.Client{Transport: transport}
	return &client;
}

func BuildUrl(parts ...string) string {
	return strings.Join(parts, "/")
}

func (this *Request) Put(url string, query []byte) ([]byte, int) {
	return this.Query("PUT", url, query)
}

func (this *Request) Post(url string, query []byte) ([]byte, int) {
	return this.Query("POST", url, query)
}

func (this *Request) Query(method string, url string, query []byte) ([]byte, int) {
	payload := bytes.NewBuffer(query)
	request, error := http.NewRequest(method, url, payload)
	request.Header.Set("Content-Type", "application/json")

	client := GetClient()
	response, error := client.Do(request)
	if error != nil {
		log.Fatal(error)
	}
	defer response.Body.Close()

	body, _ := ioutil.ReadAll(response.Body)
	return body, response.StatusCode
}
