package main

import (
  "net/http"
  "github.com/gorilla/mux"
  "gopkg.in/mgo.v2"
  "gopkg.in/mgo.v2/bson"
  "encoding/json"
  "log"
  "fmt"
  "os"
)

type Plan struct {
  Id  bson.ObjectId `bson:"_id,omitempty"`
  Text string `json:"text"`
}

type Response struct {
  code int
  response string
}

func getSession() *mgo.Session {
  connectString := fmt.Sprintf("mongodb://%s:%s@localhost:27017", os.Getenv("MONGOUSER"), os.Getenv("MONGOPWD"))
  session, err := mgo.Dial(connectString)
  if err != nil {
    panic(err)
  }
  session.SetMode(mgo.Monotonic, true)

  return session
}

func main() {
  session := getSession()

  if session != nil {
    router := mux.NewRouter()
    router.HandleFunc("/api/cv",
      func(w http.ResponseWriter, r *http.Request) {
        c := session.DB("ken").C("cv")
        getPlan(w, r, c)
      }).Methods("GET")
    log.Fatal(http.ListenAndServe(":2001", router))
  }
}

func getPlan(w http.ResponseWriter, r *http.Request, c *mgo.Collection) {
  w.Header().Set("Access-Control-Allow-Origin", "*")
  var results []Plan
  err := c.Find(nil).Select(bson.M{"text": 1}).All(&results)
  if err != nil {
    fmt.Printf("%s", err);
    json.NewEncoder(w).Encode(err)
  } else {
    fmt.Printf("%s", results);
    json.NewEncoder(w).Encode(results)
  }
}
