const templates =require("../controllers/templates.controller.js");
var router = require("express").Router();



router.post("/createTemplate", templates.createTemplate);


router.get("/viewTemplates", templates.viewTemplates);

// router.put("/updateTemplate",templates.updateTemplate);


router.get("/cntTemplates",templates.cntTemplates);

module.exports = router;    

