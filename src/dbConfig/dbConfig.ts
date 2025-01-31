import mongoose from "mongoose"

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("Connected to MongoDB")
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('MongoDB connected')
        })
        connection.on('error', (err) => {
            console.log('Something went wrong ', err)
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong in connecting to MongoDB")
        console.log(error)
    }
}