
const db = require("../models");
const TabletsList = db.tablets;

exports.findTabletsList =(req,res) => {
console.log('calling')
    TabletsList.find()
    .then(data => {
      res.send(data);
     
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving DATA."

      });
      console.log('sdsddfg');
    });
  }