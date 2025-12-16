import mongoose from "mongoose";
import { Schema } from "mongoose";
import { email } from "zod";



const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});





export default mongoose.model('zod-User', userSchema)

