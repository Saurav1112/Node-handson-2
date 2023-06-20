
const route = require("./routes/routes")
const express= require("express")
const app = express();
app.use(route)
app.listen(5000,()=>{
    console.log("server is running inside the port number 5000");
})