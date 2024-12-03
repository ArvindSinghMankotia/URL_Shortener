const express = require("express");
const data_router = express.Router();
const  handlerGetData = require("../controllers/data_handler")

data_router.get('/:id',handlerGetData)

module.exports = data_router;