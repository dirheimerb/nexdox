import React from 'react';
import { format, isSameMonth, isSameDay } from 'date-fns';

interface DayProps {
  day: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

const Day: React.FC<DayProps> = ({ day, selectedDate, onDateClick }) => {
  return (
    <div
      className={`cursor-pointer w-8 h-8 flex items-center justify-center m-1 rounded-full 
      ${isSameMonth(day, selectedDate) ? 'text-black' : 'text-gray-300'}
      ${isSameDay(day, selectedDate) ? 'bg-blue-500 text-white' : ''}`}
      onClick={() => onDateClick(day)}
    >
      {format(day, 'd')}
    </div>
  );
};

export default Day;
