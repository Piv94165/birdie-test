import { event } from "../models/event";

export function getAll(_: any, res: any) {

    event.getAll(_, (err: any, data: any) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};