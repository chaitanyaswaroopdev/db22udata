var express = require("express");
var router = express.Router();

// Require controller modules.
var api_controller = require("../controllers/api");
var restaurant_controller = require("../controllers/restaurant");

/// API ROUTE ///

// GET resources base.
router.get("/resource", api_controller.api);

/// restaurant ROUTES ///

// POST request for creating a restaurant.
router.post(
  "/resource/restaurant",
  restaurant_controller.restaurant_create_post
);

// DELETE request to delete restaurant.
router.delete(
  "/resource/restaurant/:id",
  restaurant_controller.restaurant_delete
);

// PUT request to update restaurant.
router.put(
  "/resource/restaurant/:id",
  restaurant_controller.restaurant_update_put
);

// GET request for one restaurant.
router.get("/resource/restaurant/:id", restaurant_controller.restaurant_detail);

// GET request for list of all restaurant items.
router.get("/resource/restaurant", restaurant_controller.restaurant_list);

module.exports = router;
