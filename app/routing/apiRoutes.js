// LOAD DATA
// linking our routes to a series of "data" sources.

var friendsData = require("../data/friendsData");


// ROUTING

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
 
  