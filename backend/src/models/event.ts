import { doQuery } from "./query";

export module event {

    export function getAll(_: any, result: any) {
        return doQuery("SELECT payload FROM events limit 10", result);
    };


    export function getDistinctCareRecipient(_: any, result: any) {
        return doQuery(`SELECT distinct care_recipient_id FROM birdietest.events`, result)
    };


    export function getAllByCareRecipient(idRecipient: string, result: any) {
        return doQuery(`SELECT payload 
        FROM birdietest.events 
        where care_recipient_id='${idRecipient}' 
        ORDER BY timestamp 
        DESC 
        limit 100`, result);
    };


    export function getAllByCareRecipientInADay(req: { idRecipient: string, date: string }, result: any) {
        return doQuery(`SELECT payload 
        FROM birdietest.events 
        where care_recipient_id='${req.idRecipient}' and timestamp like '${req.date + '%'}'
        ORDER BY timestamp ASC limit 100`, result);
    };


    export function getDistinctDaysByCareRecipient(idRecipient: string, result: any) {
        return doQuery(`SELECT distinct(substr(timestamp,1,10)) as DAY 
        FROM birdietest.events 
        where care_recipient_id='${idRecipient}'
        ORDER BY timestamp 
        DESC 
        limit 100`, result);

    }
}