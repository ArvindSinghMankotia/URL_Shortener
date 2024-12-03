
const URL = require('../models/URLSchema')

async function handlerRedirectToMainWebsite(req,res) {
    const id = req.params.id;
    console.log(`id is ${id}`);
    
    try{
        const data = await URL.findOneAndUpdate(
            {short_id : id }, 
            {
                $push :{
                    meta_data: {  
                        time_of_click: new Date()
                    }
                }
            },
            { new: true }
        )

        console.log("Database query result:", data);

        if (!data) {
            return res.status(404).send({ error: "URL not found" });
        }

        console.log(`Redirecting to: ${data.url}`);
        res.redirect(data.url);
    }
    catch(error){
        return res.status(500).send({ error: "Failed to get the main URL" });
    }

}

module.exports = handlerRedirectToMainWebsite;