const CaptainModule = require('../models/captain.model');
const captainService = require('../services/caption.service');
const { validationResult } = require('express-validator');




module.exports.registerCaptain = async (req, res , next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    const isCaptainAlreadyExist = await CaptainModule.findOne({email})
    if (isCaptainAlreadyExist) {
        return res.status(401).json({ message: 'Captain already exists' });
    }

    // const hashPassword = await CaptainModule.hashPassword(password);
    const hasspassword = await CaptainModule.hashPassword(password);
    
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hasspassword,
        color: vehicle.color,
        capacity: vehicle.capacity,
        plate: vehicle.plate,
        vehicleType: vehicle.vehicleType,
    })
    const token = await captain.generateAuthToken();
    res.status(201).json({ token, captain });


}