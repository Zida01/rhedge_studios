const User = require('../model/usermodel')
const axios = require('axios');

const register = async (req, res, next) => {


    try {

        const { fullname, email, phone, track } = req.body;
        if (!fullname) {
            return res.status(400).json({ error: 'Full name is required' });
        }
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }
        if (!phone) {
            return res.status(400).json({ error: 'Phone number is required' });
        }
        if (!track) {
            return res.status(400).json({ error: 'Track is required' });
        }
    
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

// const pay = (req, res) => {
//     const data = {
//         email: "customer@email.com",
//         amount: "20000"
//     };

//     const config = {
//         method: 'post',
//         url: 'https://api.paystack.co/transaction/initialize',
//         headers: {
//             Authorization: 'Bearer sk_test_78ad245d456fd442bd747b91fab588ca519cfcc3',
//             'Content-Type': 'application/json'
//         },
//         data: data
//     };

//     axios(config)
//         .then(response => {
//             console.log(response.data); // Parse and handle the response
//         })
//         .catch(error => {
//             console.error(error.response ? error.response.data : error.message); // Handle the error
//         });

// }




module.exports = { register,  }