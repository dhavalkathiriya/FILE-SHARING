import express from 'express';
import cors from 'cors';
import { PORT } from './config/index.js';
import connectDB from './db/db.js';
import fileRoute from './routes/FileRoute.js';
import path from 'path'


connectDB()
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', fileRoute);
 
app.use(express.static(path.join(__dirname + "./client/dist")))
app.get("*",(req,res) =>{
    res.sendFile(path.join(__dirname + './client/dist/index.html'))
})

app.listen(PORT, () => console.log(`Server is running  ${PORT}`));
