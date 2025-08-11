import mongoose from 'mongoose'
import 'dotenv/config'

const connectToDatabase = async ()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Connected to Database');
        
    } catch (error) {
        throw new Error (error)
    }
}
connectToDatabase()