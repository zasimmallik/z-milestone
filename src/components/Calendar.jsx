import React from 'react';

const Calendar = ({ selectedMonth }) => {
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const isToday = (day) => {
    const today = new Date();
    return selectedMonth.getFullYear() === today.getFullYear() &&
           selectedMonth.getMonth() === today.getMonth() &&
           day === today.getDate();
  };

  const isFriday = (day) => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();
    const date = new Date(year, month, day);
    return date.getDay() === 5;
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(selectedMonth);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const totalCells = startingDayOfWeek + daysInMonth;
  const remainingCells = 42 - totalCells;

  return (
    <div className="grid grid-cols-7 gap-2">
      {/* Days of week header */}
      {daysOfWeek.map((day) => (
        <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
          {day}
        </div>
      ))}
      
      {/* Empty cells for days before the first of the month */}
      {Array.from({ length: startingDayOfWeek }, (_, index) => (
        <div key={`empty-start-${index}`} className="h-12"></div>
      ))}
      
      {/* Days of the month */}
      {Array.from({ length: daysInMonth }, (_, index) => {
        const day = index + 1;
        const isCurrentDay = isToday(day);
        const isDayFriday = isFriday(day);
        
        return (
          <div
            key={day}
            className={`
              h-12 flex items-center justify-center text-sm rounded-lg transition-all duration-200
              ${isCurrentDay 
                ? 'bg-cyan-400 text-slate-900 font-bold neon-glow' // UPDATED: Changed text color to dark and made it bold
                : isDayFriday 
                  ? 'bg-cyan-500/30 text-white border border-cyan-400/50 font-medium'
                  : 'text-gray-300 hover:bg-white/10 font-medium'
              }
            `}
          >
            {day}
          </div>
        );
      })}

      {/* Empty cells to fill the remaining space for a fixed height */}
      {Array.from({ length: remainingCells }, (_, index) => (
        <div key={`empty-end-${index}`} className="h-12"></div>
      ))}
    </div>
  );
};

export default Calendar;