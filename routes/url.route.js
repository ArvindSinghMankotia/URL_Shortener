const express = require("express");
const handlerGenerateNewShortURL = require('../controllers/url_hadler');

const url_router = express.Router();

url_router.post('/',handlerGenerateNewShortURL)

module.exports = url_router;