'use client';
import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import Month from './Month';

interface CalendarProps {
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

export default function Calendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const dateFormat = 'MMMM yyyy';

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    onDateClick(addMonths(selectedDate!, 1));
  };

  const prevMonth = () => {
    onDateClick(subMonths(selectedDate!, 1));
  };
  const handleSelectedDate = (day: Date) => {
    const updatedDate = format(day, dateFormat);
    setSelectedDate(new Date(updatedDate));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-between mb-5">
        <button onClick={prevMonth}>Prev</button>
        <h2>{}</h2>
        <button onClick={nextMonth}>Next</button>
      </div>
      <Month
        selectedDate={selectedDate!}
        onDateClick={onDateClick}
      />
    </div>
  );
}
