const express = require("express");
const app = express();


// Import the routers for handling specific routes
const url_router = require('./routes/url.route.js')
const id_router = require('./routes/id_route.js')
const data_router = require('./routes/data_route.js')

const connectToDatabase = require("./connections.js");

const PORT = 3000;


connectToDatabase("mongodb://127.0.0.1:27017/url_shortner");

app.use(express.json());

// Use the routers for handling specific URL paths
app.use("/url",url_router) 

app.use("/id",id_router); 

app.use("/data",data_router); 


app.listen(PORT,()=>{
    console.log(`The port is live on port ${PORT}`);
})