const express = require('express');   
const router = express.Router();        


const dummy = require("../pr1/controllers/likeController")

router.get('/dummy', dummy);




module.exports = router


