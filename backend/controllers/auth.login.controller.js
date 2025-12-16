import { loginSchema } from "../validators/auth.login.validator.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export  const login = async (req, res) => {

    try {
    const data = loginSchema.parse(req.body)

    const user = await User.findOne({ email: data.email });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password " })
        }

        const isMatch = await bcrypt.compare(data.password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                message:"Invalid email or password"
            })
        }

        const token = jwt.sign({ userId: user._id }, "mysecretkey", { expiresIn: '1h' })
        
        return res.status(200).json({
            message: "login successful",
            token
        })
    }
    catch (err) {

        console.log(err)
        return res.status(404).json({error: err})
    }

}