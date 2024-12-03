const mongoose = require("mongoose");

async function connectToDatabase(url) {
    console.log(url);
    try{
        await mongoose.connect(url)
        console.log("The database is connected");
    }
    catch(error){
        console.log("Not able to connect to database ,",error);
    }
}
module.exports = connectToDatabase;