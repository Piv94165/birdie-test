import * as express from "express";
import { getAll } from "../controllers/event.controller";

export const eventController = express.Router();


eventController.get('/test', getAll);

/* eventController.param('id', function (req, res, next, id) {
  console.log("called only once");
  next()
}) */

eventController.get('/:id', function (req: express.Request<{ id: string }>, res) {
    console.log(req.params.id);
    res.send("hey");
    /* res.send(getAllByCareRecipient(req.params.id)) */
})

module.exports = eventController