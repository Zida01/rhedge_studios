const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phone: {
        type: Number,
        required: true
    },
    track: {
        type: String,
        enum: ['backend developer', 'frontend developer', 'ui/ux designer'],
        required: true,

    }

},
  {timestamp: true }

)


const User = mongoose.model('User', UserSchema)
module.exports = User