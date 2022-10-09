const mongoose = require("mongoose");

const RestaurantTypeSchema = new mongoose.Schema(
    {
        name:String,
        price:Number,
        descriptions:String,
    }
);

module.exports = mongoose.model("RestaurantsType", RestaurantTypeSchema);