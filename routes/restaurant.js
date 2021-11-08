// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("restaurant", { title: "Search Results Restaurant" });
// });

// module.exports = router;

var express = require("express");
const restaurant_controlers = require("../controllers/restaurant");
var router = express.Router();

/* GET restaurants */
router.get("/", restaurant_controlers.restaurant_view_all_Page);
module.exports = router;
