import {User} from '../model/User.js'

export const Signup = async(req,res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if(user) {
            res.status(401).json({message: 'user already exists'})
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({message: newUser})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const Login = async(req,res) => {
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username: username, password: password});
        if(user){
            return res.status(200).json({firstname: user.firstname})
        }
        return res.status(401).json({message: 'invalid credentials'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}