const URL = require('../models/URLSchema')

async function handlerGetData(req,res) {
    const id = req.params.id;
    console.log(id);
    try{
        const data = await URL.findOne({short_id : id});
        console.log(data);
        
        if(!data){
            return res.status(404).send({ error: "Cant get the data of the URL" });
        }

        const count = data.meta_data.length;
        

        return res.send(`The clicks on the link are ${count}`);
    }
    catch(error){
        return res.status(500).send({ error: "Failed to get the main URL" });
    }
}
module.exports = handlerGetData;