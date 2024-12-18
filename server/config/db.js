//added mongoose
const mongoose = require('mongoose'); 

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || "mongodb+srv://ajvwebapp:ajvwebapp123@cluster0.rrsuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        if (!mongoURI) {
            throw new Error("MongoDB URI is not defined.");
        }

        const conn = await mongoose.connect(mongoURI, {
            // Deprecated options removed
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;


