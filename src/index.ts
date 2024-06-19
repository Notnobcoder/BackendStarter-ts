import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import express from 'express';
import router from './router';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, () => {
  console.log('Server running on http://localhost:8000/');
});

const MONGO_URL = 'mongodb://localhost:27017/Ecom';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.set("strictQuery", false)
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());
