// import './App.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicer() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate] = useState("2025/04/02");
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(minDate.getDate() - 0); 
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 6); 
  const minTime = new Date(today);

  minTime.setHours(10);
  minTime.setMinutes(0);
  const maxTime = new Date(today);
  maxTime.setHours(18);
  maxTime.setMinutes(0);
  const excludedDates = [
    new Date("2023/04/20"),
    new Date("2023/04/25"),
    new Date("2023/04/19"),

  ];

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={120}
        dateFormat="yyyy/MM/dd h:mm aa"
        minDate={minDate}
        maxDate={maxDate}
        minTime={minTime}
        maxTime={maxTime}
        excludeDates={excludedDates}
        endDate={endDate}
      />
    </div>
  );
}

export default DatePicer;
