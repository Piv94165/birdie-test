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
}