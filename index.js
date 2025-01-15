const express = require('express')
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')


const app = express()

app.use(express.json())

connectDB()

app.use('/api/v1/user', userRoutes);

const PORT = 5000 || process.env.PORT


app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: "welcome to RHEDGE STUDIOS"
    })

})


app.listen(PORT, (req, res) => {
    console.log(`Application started on port ${PORT}`)

})