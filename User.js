const mongoose = require ('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type:Number,
        required: true,
    },
    });
    const user = mongoose.model ('User, userSchema');
    module.exports=user;
