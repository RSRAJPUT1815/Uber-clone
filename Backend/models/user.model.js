const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullName: {
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
            maxlength: [30, 'First name must not exceed 30 characters']
        },
        lastname:{
            type: String,
            minlength: [3, 'First name must be at least 3 characters long'],
            maxlength: [30, 'First name must not exceed 30 characters']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password:{
        type: String,
        required: true,
        select:false
    },
    soketId:{
        type: String,
        default: null
    }
})

userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
    return token;
}

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;