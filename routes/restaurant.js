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

// A little function to check if we have an authorized user and continue on
// or;
// redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
};

/* GET restaurants */
router.get("/", restaurant_controlers.restaurant_view_all_Page);

/* GET detail costume page */
router.get("/detail", restaurant_controlers.restaurant_view_one_Page);

/* GET create costume page */
router.get("/create", secured, restaurant_controlers.restaurant_create_Page);

/* GET create update page */
router.get("/update", secured, restaurant_controlers.restaurant_update_Page);

/* GET create costume page */
router.get("/delete", secured, restaurant_controlers.restaurant_delete_Page);

module.exports = router;
