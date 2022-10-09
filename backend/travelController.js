const Hotel = require('./models/hotels');
const Destination = require('./models/destination');
const Package = require('./models/package');
const Restaurant = require('./models/restaurants')
const RestaurantType = require('./models/restauranttype')

exports.filterRestaurant = async(req,res) =>{
    const exisRestaunrant = await Restaurant.find({
        RestaurantTypes: {$nin:req.body.types},
    })
    if (exisRestaunrant){
        return res.status(200).json(exisRestaunrant);
    }
}
exports.filterHotel = async(req,res) =>{
    const exisHotel = await Hotel.find(
        { "typeAccommodation.type": {$nin:req.body.types} }
    )
    if (exisHotel){
        return res.status(200).json(exisHotel);
    }
}

exports.getHotel = async (req,res)=>{
    const hotels = await Hotel.find({}).populate('Extra')
    res.json({hotels: hotels})
}
exports.getRestaurantType = async (req,res)=>{
    const restauranttype = await RestaurantType.find({})
    res.json({restauranttypes: restauranttype})
}
exports.getDestination = async (req,res)=>{
    const destinations = await Destination.find({})
    res.json({destinations: destinations})
}
exports.getPackage = async (req,res)=>{
    const package = await Package.find({}).populate('journey')
    res.json({packages: package})
}
exports.getRestaurant = async (req,res)=>{
    const restaurant = await Restaurant.find({})
    res.json({restaurants: restaurant})
}


