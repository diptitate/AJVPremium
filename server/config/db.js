const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace with your MongoDB connection string
        const mongoURI = "mongodb+srv://ajvwebapp:ajvwebapp123@cluster0.rrsuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        const conn = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;


