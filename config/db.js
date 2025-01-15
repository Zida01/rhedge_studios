const mongoose = require('mongoose');
// require('dotenv').config();

MONGO_URI = 'mongodb://localhost:27017/CBA'

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
};

module.exports = connectDB;