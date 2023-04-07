import express from 'express';
import { getImage, uploadImage } from '../controller/FileController.js';
import upload from '../uploadUrl/upload.js';


const fileRoute = express.Router();

fileRoute.post('/upload', upload.single('file'), uploadImage);
fileRoute.get('/file/:fileId', getImage);

export default fileRoute;