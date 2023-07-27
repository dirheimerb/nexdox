import React from 'react';
import { startOfWeek, addDays, startOfMonth, endOfMonth } from 'date-fns';
import Day from './Days';

interface MonthProps {
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

const Month: React.FC<MonthProps> = ({ selectedDate, onDateClick }) => {
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfMonth(monthEnd);

  const generateDays = () => {
    let startDate = startOfWeek(monthStart);
    let days: Date[] = [];

    while (startDate <= endDate) {
      for (let i = 0; i < 7; i++) {
        days.push(addDays(startDate, i));
      }
      startDate = addDays(startDate, 7);
    }
    return days;
  };

  return (
    <div className="grid grid-cols-7 gap-4">
      {generateDays().map((day) => (
        <Day
          key={day.toString()}
          day={day}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
        />
      ))}
    </div>
  );
};

export default Month;
