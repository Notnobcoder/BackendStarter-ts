import mongoose from "mongoose";
import router from "./router";
import http from "http"
import { app } from "./app-config";

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
