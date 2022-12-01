import * as express from "express";
import { getAll } from "./event.controller";

export const pingController = express.Router();

pingController.get('/hello', (_, res) => {
  res.status(200).json({
    greetings: 'Thank you for spending some time on this test. All the best 🙌'
  });
});

pingController.get('/test', getAll);