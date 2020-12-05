const mongoose = require("mongoose");
const { Schema } = mongoose;

PaySchema = new Schema({
    userId: {type: Schema.Type.ObjectId, ref: "user", required: true, autopopulate: true},
    confirm: {type: Boolean },
    created: { 
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model("pay", PaySchema);