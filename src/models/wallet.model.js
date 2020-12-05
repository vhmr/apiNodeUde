const mongoose = require("mongoose");
const { Schema } = mongoose;

WalletSchema = new Schema({
    userId: {type: Schema.Type.ObjectId, ref: "user", required: true, autopopulate: true},
    saldo: {type: Number },

});


WalletSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("wallet", WalletSchema);