import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'



// making the app using express
const app = express()


//defining middlewares for parsing the data and handling cors errors
app.use(express.json())
app.use(cors())



// connecting to Database
mongoose.connect('mongodb://localhost:27017/').then(() => 
    console.log("connected to DB")).catch(()=>console.log('error connecting to DB'))


app.use('/api/users', authRoutes)



app.listen(3000, (req, res) => {
    console.log("app is listning to the port 3000")
})
