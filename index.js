const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(express.json())


const PORT = process.env.PORT || 5000
connectDB()


app.use('/api/v1/user', userRoutes);



app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: "welcome to RHEDGE STUDIOS"
    })

})


app.listen(PORT, (req, res) => {
    console.log(`Application started on port ${PORT}`)

})