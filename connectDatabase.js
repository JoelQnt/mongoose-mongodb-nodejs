import mongoose from 'mongoose'


const connectToDatabase = async ()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Connected to Database');
        
    } catch (error) {
        throw new Error (error)
    }
}
connectToDatabase()