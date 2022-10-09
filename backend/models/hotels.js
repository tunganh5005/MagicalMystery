const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExtraSchema = new mongoose.Schema(
    { 
        name: String,
        description: String,
        price: Number
    }
)


const HotelSchema = new mongoose.Schema(
    {
        typeAccommodation: {
            type: String,
            description: String
        },
        priceFrom: Number,
        name: String,
        description:String,
        rooms: [
            {
                _id: { id: false },
                name: String,
                description: String,
                price: Number,
                Facilities: [{
                    _id: { id: false },
                    type: String
                }],
            }
        ],
        Extra: [{ type: Schema.Types.ObjectId, ref: 'Extra' }]
       
    }

);
const Extra = mongoose.model('Extra', ExtraSchema);
module.exports = mongoose.model("Hotel", HotelSchema);