import React from "react";
import { useState } from 'react'; 
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function Datepicker() {
    const [value, onChange] = useState<Date | null>(new Date());
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() + 1);
    
    const handleDateChange = (date: Date | null) => {
        if (date !== null) {
            onChange(date);
        }
    }

    return (
        
            <DateTimePicker 
                onChange={handleDateChange} 
                value ={value}
                format="dd/MM/yyyy"
                minDate={today}
                maxDate={maxDate}
            />
       
    )
}