// import our burgers model
const burgers = require("../models/burgers");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function(req, res) {

    // use cat.findAll
    burgers
      .findAll()
      // if we get to resolve()
      .then(dbBurgersData => {
        res.render("index", {catData: dbBurgersData})
      })
      // if we get to reject()
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}