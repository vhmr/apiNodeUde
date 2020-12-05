const mongoose = require("mongoose");
const { Schema } = mongoose;

SellSchema = new Schema({
    product: {type: String, required: true},
    price: {type: Number, required: true},
    payId: {type: Schema.Type.ObjectId, ref: "pay", autopopulate: true},
    created: { 
        type: Date,
        default: Date.now
    }

});

SellSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("sell", SellSchema);