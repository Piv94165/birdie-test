import * as express from "express";
import { getAll } from "./controllers/event.controller";
/* import { pingController } from "./controllers/ping"; */

const app = express();

/* app.use(pingController); */

app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* app.use(express.methodOverride()); */

// ## CORS middleware
// 
/* var allowCrossDomain = function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
app.use(allowCrossDomain); */

app.get('/test', getAll);


export default app;
