const User = require('../model/usermodel')


const register = async (req, res, next) => {


    try {

        const { fullname, email, phone, track } = req.body;

        const newUser = new User({
            fullname,
            email,
            phone,
            track,
        });

        // Save the user to the database
        const data = await newUser.save();

        // Respond with success
        res.status(201).json({
            status: true,
            message: 'User registered successfully',
            data,
        })



    } catch (error) {
        res.status(404).json({
            status: false,
            message: error.message
        })

    }

}


module.exports=   {register}