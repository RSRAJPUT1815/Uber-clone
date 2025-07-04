const CaptainModule = require('../models/captain.model');

module.exports.createCaptain = async ({ firstname,lastname , email, password, color,plate , capacity,vehicleType}) => {
    console.log(firstname,lastname , email, password, color,plate , capacity,vehicleType);
    
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
    // Check if all required fields are provided
        throw new Error('All fields are required');
    }


    // Create a new captain
    const captain = await CaptainModule.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    });

    return captain;
}