import dotenv from 'dotenv';
import app from './src/app.js';
dotenv.config();
import connectDB from './src/db/db.js';   

connectDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});