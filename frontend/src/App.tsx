import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import api from './axios.instance';
import OneDay from './components/oneDay/OneDay';


function App() {

  const [day, setDay] = useState("");
  const [availableDays, setAvailableDays] = useState<string[]>([]);

  useEffect(() => {
    api.get(`days/df50cac5-293c-490d-a06c-ee26796f850d`).then((res: any) => {
      const list_events = []
      const list_object = res.data;
      console.log(list_object);
      for (let i = 0; i < list_object.length; i++) {
        list_events.push(list_object[i]["DAY"]);
      }
      setAvailableDays(list_events);
    });
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  }


  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-day-label">Day</InputLabel>
        <Select
          labelId="select-day"
          id="select-day"
          value={day}
          label="A day"
          onChange={handleChange}
        >
          {availableDays.map(day => {
            return <MenuItem value={day}>{day}</MenuItem>
          })}
        </Select>
      </FormControl>
      <OneDay date={day} />
    </>

  );
}

export default App;
