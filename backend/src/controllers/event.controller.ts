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

export function getAllByCareRecipient(idRecipient: string, res: any) {
    event.getAllByCareRecipient(idRecipient, (err: any, data: any) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
}

export function getAllByCareRecipientInADay(req: { idRecipient: string, date: string }, res: any) {
    event.getAllByCareRecipientInADay(req, (err: any, data: any) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
}

export function getDistinctDaysByCareRecipient(idRecipient: string, res: any) {
    event.getDistinctDaysByCareRecipient(idRecipient, (err: any, data: any) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
}
