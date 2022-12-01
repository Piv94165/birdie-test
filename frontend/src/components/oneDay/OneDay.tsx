import { Card, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../axios.instance";
import OneEvent from "./OneEvent";

interface IDay {
    date: string
}

interface IEvent {
    id: string,
    visit_id: string,
    timestamp: string,
    event_type: string,
    caregiver_id: string,
    task_instance_id: string,
    task_schedule_id: string,
    care_recipient_id: string,
    task_definition_id: string,
    task_schedule_note: string,
    task_definition_description: string,
}

export default function OneDay(props: IDay) {

    const [events, setEvents] = useState<IEvent[]>([]);

    useEffect(() => {
        api.get(`test`).then(res => {
            const list_events = []
            const list_object = res.data;
            for (let i = 0; i < list_object.length; i++) {
                list_events.push(JSON.parse(list_object[i]["payload"]));
            }
            setEvents(list_events);
        });
    }, []);

    return (
        <Card sx={{ width: "50vw", padding: "10px" }}>
            <Grid container
                spacing={1}
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >
                <Grid item sx={{ textAlign: "center" }}>
                    <Typography variant="h5">{props.date}</Typography>
                </Grid>
                {events.map(e => {
                    return (
                        <Grid item>
                            <OneEvent
                                id={e.id}
                                type={e.event_type}
                                notes={e.task_schedule_note}
                                task={e.task_definition_description}
                                date={e.timestamp}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Card>
    )
}