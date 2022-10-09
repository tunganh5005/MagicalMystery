const mongoose = require("mongoose");
const { Schema } = mongoose;


const journeySchema = new Schema(
   {
      time:  Date,
      totalActivities: String,
      totalPrice: Number,
      region: String,
      acitvities: [{
         _id: { id: false },
         StartTime: Number,
         EndTime: Number,
         activityType: {
            type: String,
            enum: ['Activity', 'Lunch', 'Accommondation', 'Dinner']
         },
         activityDescription: String,
         price: Number
      }]
   }
);

const PackageSchema = new Schema(
   {
      days: Number,
      StartTime: Date,
      EndTime: Date,
      PackageName: String,
      description: String,
      price: Number,
      journey: [{ type: Schema.Types.ObjectId, ref: 'Journey' }]
   }
);

const Journey = mongoose.model('Journey', journeySchema);
module.exports = mongoose.model("Package", PackageSchema);