const mongoose = require("mongoose");
const { Schema } = mongoose;
const {compareSync, hashSync, genSaltSync} = require("bcryptjs");

const UserSchema = new Schema({
    name: {type: String, required: true},
    user: {type: String, required: true},
    u_type: {type: String},
    u_pick: {type: String},
    password: {type: String, required: true},
    u_token: {type: String, required: true},
    created: { 
        type: Date,
        default: Date.now
    }
});

//elimina el password en las respuesta de mongo
UserSchema.method.toJSON = function(){
    let user = this.toObject();
    delete user.password;
    return user;
}

//compara la contraseñas
UserSchema.method.comparePasswords = function(password){
    return compareSync(password, this.password);
}

//antes de guardar el doc verifica si el pass fuen cambiado
UserSchema.pre('save', async function(next){
    const user = this;

    if(!user.isModified("password")) {
        return next();
    }

    const salt = genSaltSync(10);
    const hashPassword = hashSync(user.password, salt);
    user.password = hashPassword;
    next();
});

module.exports = mongoose.model("user", UserSchema);