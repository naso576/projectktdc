const tablets =require("../controllers/tablets.controller.js");
var router = require("express").Router();


router.get("/findTabletsList", tablets.findTabletsList);

module.exports = router;    
