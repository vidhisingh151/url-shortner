import cors from "cors";
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';
import shortUrl from './routes/shortUrl.js';

dotenv.config();
connectDB();


const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//     origin: "http://localhost:5000",
//     credentials: true,
// }))


app.use(cors({
  origin:[ "http://localhost:3000", 
          "https://loquacious-hummingbird-d344fe.netlify.app" ],

  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use("/api/", shortUrl);
app.listen(PORT,() => {
    console.log(`Server is running at Port: ${PORT}`);
})