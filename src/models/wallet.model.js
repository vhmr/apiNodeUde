const mongoose = require("mongoose");
const { Schema } = mongoose;

WalletSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "user", required: true, autopopulate: true},
    description:{type: String},
    debe: {type: Number},
    haber: {type: Number},
    saldo: {type: Number },
    created: { 
        type: Date,
        default: Date.now
    }
});


WalletSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("wallet", WalletSchema);