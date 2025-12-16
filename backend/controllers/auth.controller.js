import { registerSchema } from "../validators/auth.validator.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import { loginSchema } from "../validators/auth.login.validator.js";
import jwt from 'jsonwebtoken'


export const register = async (req, res) => {

    try {
        const data = registerSchema.parse(req.body);

        const exists = await User.findOne({ email: data.email })
        
        if (exists) {
            return res.status(400).json({
                msg:"Email already exists"
            })
        } 
        
        const user = await User.create({
            ...data,
            password: await bcrypt.hash(data.password, 10)
        });

        res.status(201).send({"message": "user registered", userId : user._id})
    }
    catch (err) {
        console.log((err))
        res.status(400).json({error: err})
    }
}


