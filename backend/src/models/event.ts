import sql from "./db";

export module event {
    export function getAll(_: any, result: any) {
        let query = "SELECT payload FROM events limit 10";

        sql.query(query, (err: any, res: any) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("tutorials: ", res);
            result(null, res);
        });
    };

    export function getAllByCareRecipient(idRecipient: string, result: any) {
        let query =
            `SELECT payload 
        FROM birdietest.events 
        where care_recipient_id='${idRecipient}' 
        ORDER BY timestamp 
        DESC 
        limit 10`;
        sql.query(query, (err: any, res: any) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("tutorials: ", res);
            result(null, res);
        });
    };

    export function getAllByCareRecipientInADay(req: { idRecipient: string, date: string }, result: any) {
        let query =
            `SELECT payload 
        FROM birdietest.events 
        where care_recipient_id='${req.idRecipient}' and timestamp like '${req.date + '%'}'
        ORDER BY timestamp DESC limit 10`;

        sql.query(query, (err: any, res: any) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("tutorials: ", res);
            result(null, res);
        });
    };

    export function getDistinctDaysByCareRecipient(idRecipient: string, result: any) {
        let query =
            `SELECT distinct(substr(timestamp,1,10)) as DAY 
        FROM birdietest.events 
        where care_recipient_id='${idRecipient}'
        ORDER BY timestamp 
        DESC 
        limit 10`

        sql.query(query, (err: any, res: any) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("tutorials: ", res);
            result(null, res);
        });

    }
}