const mongoose = require("mongoose");
const restaurantSchema = mongoose.Schema({
  restaurant_type: String,
  duration: Number,
  cost: { type: Number, min: 20, max: 100, default: 0 },
});
module.exports = mongoose.model("Restaurant", restaurantSchema);
