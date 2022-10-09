const express = require("express");
const router = express.Router();
const controller = require("./travelController");

router.post("/restaurants/filter",controller.filterRestaurant);
router.post("/hotels/filter",controller.filterHotel);

router.get("/hotels/", controller.getHotel);
router.get("/destinations/", controller.getDestination);
router.get("/packages/", controller.getPackage);
router.get("/restaurants/", controller.getRestaurant);
router.get("/restaurantypes/", controller.getRestaurantType);


module.exports = router;