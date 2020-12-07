const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema({
    name: {type: String, required: true},
    document: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    created: { 
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("client", ClientSchema);