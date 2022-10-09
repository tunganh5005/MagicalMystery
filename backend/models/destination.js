const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
    },
    {
        descriptions: {
            type: String,
        },
    }
);

module.exports = mongoose.model("Destination", DestinationSchema);