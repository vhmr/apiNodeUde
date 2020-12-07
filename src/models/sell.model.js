const mongoose = require("mongoose");
const { Schema } = mongoose;

SellSchema = new Schema({
    product: {type: String, required: true},
    price: {type: Number, required: true},
    created: { 
        type: Date,
        default: Date.now
    }

});

SellSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("sell", SellSchema);