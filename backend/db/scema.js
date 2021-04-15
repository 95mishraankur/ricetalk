const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    profation: {
         type: String,
        required:true
    },

})

const User = mongooose.model('USER', userSchema);

module.exports = User;