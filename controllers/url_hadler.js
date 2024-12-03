const shortid = require('shortid');
const URL = require('../models/URLSchema')

async function handlerGenerateNewShortURL(req,res){
    const {url} = req.body;

    if(!url){
        return res.status(400).send({
            msg : "The URL is Required"
        })
    }
    try{
        const data = await URL.create({
            url : url,
            short_id : shortid.generate() ,
            meta_data : []
        })
        res.status(201).send({ shortid : data.short_id});
    }
    catch(error){
        res.status(500).send({ error: "Failed to create the short URL" });
    }   
}

module.exports = handlerGenerateNewShortURL;