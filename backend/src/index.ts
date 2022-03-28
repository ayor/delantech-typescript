import express from "express";
import bodyParser from 'body-parser';
import { AppRouter } from "./AppRouter";
import cors from "cors";
import './controllers/ProductController';
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({
    credentials: true,
    origin: '*',
    allowedHeaders: '*'
}))

const router = AppRouter.initRouter();
app.use(router)

app.listen(5000, () => {
    console.log('listening on port 5000')
})