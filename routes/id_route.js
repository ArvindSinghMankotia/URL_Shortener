const express = require("express");
const handlerRedirectToMainWebsite = require("../controllers/id_handler")

const id_router = express.Router();


id_router.get('/:id',handlerRedirectToMainWebsite);

module.exports= id_router;