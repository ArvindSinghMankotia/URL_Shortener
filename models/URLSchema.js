const  mongoose  = require("mongoose")

const urlSchema =  mongoose.Schema({
    url : {
        type : String,
        required : true
    },
    short_id : {
        type : String,
        required : true,
        unique: true 
    },
    meta_data : [{
        time_of_click :{
            type: String
        }
    }]
},{Timestamp : true});

const URL = mongoose.model("URL",urlSchema);

module.exports = URL;