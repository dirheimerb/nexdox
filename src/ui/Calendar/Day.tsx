'use client';
import React from 'react';
import * as dayjs from 'dayjs';
import {
  add,
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addWeeks,
  addYears,
  sub,
  subDays,
  subHours,
  subMinutes,
  subMonths,
  subWeeks,
  subYears,
  differenceInCalendarDays,
  differenceInCalendarISOWeeks,
  differenceInCalendarMonths,
  getMonth,
  getDaysInMonth,
  getWeek,
  getWeekOfMonth,
  getWeeksInMonth,
  startOfMonth,
  lastDayOfMonth,
  isThisMonth,
  isToday,
  isThisHour,
  isThisYear,
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isWednesday,
  isTuesday,
  isWeekend,
  nextDay,
  nextFriday,
  nextMonday,
  nextSaturday,
  nextSunday,
  nextThursday,
  nextWednesday,
  previousDay,
  previousFriday,
  previousMonday,
  previousSaturday,
  previousSunday,
  previousThursday,
  previousWednesday,
  startOfDay,
  endOfDay,
  startOfHour,
  endOfHour,
  startOfMinute,
  endOfMinute,
  setMonth,
  setYear,
  setHours,
  setMinutes,
  setSeconds,
  setDate,
} from 'date-fns';
import clsx from 'clsx';
interface EventsTodayProps {
  id: number;
  date: Date;
  time: string;
  datetime: string;
  title: string;
  description: string | null;
  location: string | null;
  contact_id: number | null;
  user_id: string;
  completed: boolean;
}
interface DayProps {
  date: Date;
  isToday: boolean;
  isCurrentMonth: boolean;
  isThisYear: boolean;
  isThisHour: boolean;
  isSelected: boolean;
  events: EventsTodayProps[];
}

const dayArray = new Array();

const start = startOfMonth(new Date());
const end = lastDayOfMonth(new Date());

const checkIsToday = (date: Date) => isToday(date);
const checkIsCurrentMonth = (date: Date) => isThisMonth(date);
const checkIsThisYear = (date: Date) => isThisYear(date);
const checkIsThisHour = (date: Date) => isThisHour(date);

const daysInMonth = getDaysInMonth(new Date());

const days = Array.from({ length: daysInMonth }, (_, i) => {
  const date = new Date(start.getFullYear(), start.getMonth(), i + 1);
  return {
    date,
    isToday: checkIsToday(date),
    isCurrentMonth: checkIsCurrentMonth(date),
    isThisYear: checkIsThisYear(date),
    isThisHour: checkIsThisHour(date),
    isSelected: false,
  };
});

// const result = setMonth(new Date(2014, 8, 1), 1)
export default function Day() {
  const [selectedArray, setSelectedArray] = React.useState<number[]>([]);
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const handleSelected = (id: number) => {
    setSelectedArray([...selectedArray, id]);
    setIsSelected(!isSelected);
  };

  return (
    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
      {days.map((day, dayIdx) => (
        <button
          key={dayIdx}
          type="button"
          className={clsx(
            'py-1.5 hover:bg-gray-100 focus:z-10',
            day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
            (day.isSelected || day.isToday) && 'font-semibold',
            day.isSelected && 'text-white',
            !day.isSelected &&
              day.isCurrentMonth &&
              !day.isToday &&
              'text-gray-900',
            !day.isSelected &&
              !day.isCurrentMonth &&
              !day.isToday &&
              'text-gray-400',
            day.isToday && !day.isSelected && 'text-sky-600',
            dayIdx === 0 && 'rounded-tl-lg',
            dayIdx === 6 && 'rounded-tr-lg',
            dayIdx === days.length - 7 && 'rounded-bl-lg',
            dayIdx === days.length - 1 && 'rounded-br-lg',
          )}
          onClick={() => handleSelected(dayIdx)}
          ref={buttonRef}
        >
          <time
            dateTime={day.date.getDate().toString()}
            className={clsx(
              'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
              day.isSelected && day.isToday && 'bg-sky-600',
              day.isSelected && !day.isToday && 'bg-gray-900',
            )}
          >
            {day.date.toString().split('-').pop()?.replace(/^0/, '')}
          </time>
        </button>
      ))}
    </div>
  );
}
