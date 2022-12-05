import sql from "./db";


export function doQuery(req: string, result: any) {
    let query = req;
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