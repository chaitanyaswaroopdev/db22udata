const mongoose = require("mongoose");
const restaurantSchema = mongoose.Schema({
  restaurant_type: String,
  duration: Number,
  cost: Number,
});
module.exports = mongoose.model("Restaurant", restaurantSchema);
