import * as express from "express";
/* import { getAll } from "./controllers/event.controller"; */
import { pingController } from "./controllers/ping";

const app = express();

app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(pingController);



export default app;
