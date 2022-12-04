import * as React from 'react';
import { Card, CardContent, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalDrinkOutlinedIcon from '@mui/icons-material/LocalDrinkOutlined';
import AttributionOutlinedIcon from '@mui/icons-material/AttributionOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import style from './OneEvent.module.css';

interface IOneEvent {
    id: string;
    type: string;
    task: string;
    notes: string;
    date: string;
}


export default function OneEvent(props: IOneEvent) {
    let icon = <div></div>
    switch (props.type) {
        case "fluid_intake_observation": {
            icon = <LocalDrinkOutlinedIcon className={style['icon']} />
            break;
        }
        case "task_completed": {
            icon = <CheckCircleOutlineIcon className={style['icon']} />
            break;
        }
        case "physical_health_observation": {
            icon = <AttributionOutlinedIcon className={style['icon']} />
            break;
        }
        default: {
            icon = <MedicationOutlinedIcon className={style['icon']} />
            break;
        }
    }

    console.log(props.type);

    return (
        <Card key={props.id} className={style['card']} sx={{ maxWidth: "100%" }}>
            <CardContent>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item xs={2}>
                        {icon}
                    </Grid>
                    {
                        /* props.type !== "regular_medication_taken" ? */
                        (props.notes !== undefined) || (props.task !== undefined) ?
                            <Grid item xs={10}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {props.task}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {props.notes}
                                </Typography>
                            </Grid>
                            : <Grid item xs={10}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {props.date.substring(11, 16)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {props.type.replaceAll("_", " ")}
                                </Typography>
                            </Grid>
                    }

                </Grid>
            </CardContent>
        </Card>
    )
}