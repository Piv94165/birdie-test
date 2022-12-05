import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import api from './axios.instance';
import OneDay from './components/oneDay/OneDay';


function App() {

  const [careRecipient, setCareRecipient] = useState("");
  const [availableCareRecipients, setAvailableCareRecipients] = useState<string[]>([]);
  const [day, setDay] = useState("");
  const [availableDays, setAvailableDays] = useState<string[]>([]);

  useEffect(() => {
    api.get(`carerecipients`).then((res: any) => {
      const list_recipients = [];
      for (let i = 0; i < res.data.length; i++) {
        list_recipients.push(res.data[i]["care_recipient_id"]);
      }
      setAvailableCareRecipients(list_recipients);
    })
    if (careRecipient !== "") {
      api.get(`days/${careRecipient}`).then((res: any) => {
        const list_events = []
        const list_object = res.data;
        console.log(list_object);
        for (let i = 0; i < list_object.length; i++) {
          list_events.push(list_object[i]["DAY"]);
        }
        setAvailableDays(list_events);
      })
    }
  }, [careRecipient]);

  const handleChangeDay = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  }

  const handleChangeCareRecipient = (event: SelectChangeEvent) => {
    setCareRecipient(event.target.value as string);
  }


  return (
    <Box className={style['screen']}>
      <Grid container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Grid item >
          <FormControl fullWidth className={style['select']}>
            <InputLabel id="select-care-recipient-label">Care recipient</InputLabel>
            <Select
              labelId="select-care-recipient"
              id="select-care-recipient"
              value={careRecipient}
              label="A care recipient"
              onChange={handleChangeCareRecipient}
            >
              {availableCareRecipients.map(r => {
                return <MenuItem value={r}>{r}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item >
          <FormControl fullWidth className={style['select']}>
            <InputLabel id="select-day-label">Day</InputLabel>
            <Select
              labelId="select-day"
              id="select-day"
              value={day}
              label="A day"
              onChange={handleChangeDay}
            >
              {availableDays.map(day => {
                return <MenuItem value={day}>{day}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item >
          <OneDay date={day} careRecipient={careRecipient} />
        </Grid>
      </Grid>
    </Box>

  );
}

export default App;
