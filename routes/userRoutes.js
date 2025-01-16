const userRoutes = require('express').Router()
const usercontroller = require('../controller/usercontroller')

userRoutes.post('/', usercontroller.register)





module.exports = userRoutes