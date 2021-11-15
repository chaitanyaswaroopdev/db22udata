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

/* GET detail costume page */
router.get("/detail", restaurant_controlers.restaurant_view_one_Page);

/* GET create costume page */
router.get("/create", restaurant_controlers.restaurant_create_Page);

/* GET create update page */
router.get("/update", restaurant_controlers.restaurant_update_Page);

/* GET create costume page */
router.get("/delete", restaurant_controlers.restaurant_delete_Page);

module.exports = router;
