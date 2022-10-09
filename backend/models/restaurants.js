const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
    {
        name:String,
        price:Number,
        descriptions:String,
        RestaurantTypes:[String],
    }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);