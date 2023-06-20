const {readdata,fetchdata,createdata,updatedata} = require("../controller/api");
 const route = require("express").Router();

 route.get ("/AboutUS", readdata)
 route.post("/HomeUS", createdata)
 route.get("/fetchUS", fetchdata)
 route.post("/UpdateUS", updatedata)

 module.exports = route;