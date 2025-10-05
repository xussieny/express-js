//create a connection to the database
const mongoose = require('mongoose');
require('dotenv').config();
//connect to the database
const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.MONGODBATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true//those two are recommended to ensure your app uses the latest, most stable, and future-proof MongoDB driver features.
       });
       console.log("Database connected successfully");
        
        
    } catch (error) {
        console.error(error.message);
        process.exit(1);//exit the process with failure
    
    }
}

module.exports=connectDB;