const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const SECRET ='ddc474df-794d-4d08-8709-df543ea9f5af'

exports.login = async (username, password) => {
    //  find user by username
    const user = await User.findOne({ username })
    if (!user) {
        throw new Error('Invalid user or password');
    }
    // check password
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
        throw new Error('Invalid user or password');
    }
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
        
    }
    const token = await jwt.sign(payload, SECRET, {expiresIn: '2d'});
    return token;
    
}
exports.register = async (userData) => {
    const user = await User.findOne({ username: userData.username })
    if (user) {
        throw new Error('Username already exists')
    }
    return User.create(userData)
}
exports.logout = () => {

}