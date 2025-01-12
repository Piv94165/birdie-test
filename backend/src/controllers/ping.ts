import * as express from "express";
import { getAll, getAllByCareRecipient, getAllByCareRecipientInADay, getDistinctCareRecipient, getDistinctDaysByCareRecipient } from "./event.controller";

export const pingController = express.Router();

pingController.get('/hello', (_, res) => {
  res.status(200).json({
    greetings: 'Thank you for spending some time on this test. All the best 🙌'
  });
});

pingController.get('/test', getAll);

pingController.get('/events/:id', (req, res) => getAllByCareRecipient(req.params.id, res));

pingController.get('/events/:id/:date', (req, res) => getAllByCareRecipientInADay({ idRecipient: req.params.id, date: req.params.date }, res));

pingController.get('/days/:id', (req, res) => getDistinctDaysByCareRecipient(req.params.id, res));

pingController.get('/carerecipients', getDistinctCareRecipient);
