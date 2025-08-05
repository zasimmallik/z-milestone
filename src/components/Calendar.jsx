import React from 'react';

const Calendar = ({ selectedMonth, currentDate }) => {
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

  const isHighlighted = (day) => {
    // Highlight specific dates (you can customize this)
    const highlightedDates = [2, 3, 4, 9, 10, 16, 17, 23, 24, 30, 31];
    return highlightedDates.includes(day);
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(selectedMonth);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-cyan-400 mb-4">
        {selectedMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </h3>
      
      <div className="grid grid-cols-7 gap-1">
        {/* Days of week header */}
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
            {day}
          </div>
        ))}
        
        {/* Empty cells for days before the first day of the month */}
        {Array.from({ length: startingDayOfWeek }, (_, index) => (
          <div key={`empty-${index}`} className="h-12"></div>
        ))}
        
        {/* Days of the month */}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const isCurrentDay = isToday(day);
          const isHighlightedDay = isHighlighted(day);
          
          return (
            <div
              key={day}
              className={`
                h-12 flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200
                ${isCurrentDay 
                  ? 'bg-purple-500/80 text-white neon-glow' 
                  : isHighlightedDay 
                    ? 'bg-purple-400/30 text-white border border-purple-400/50' 
                    : 'text-gray-300 hover:bg-white/10'
                }
              `}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar; 