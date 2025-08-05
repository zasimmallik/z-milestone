// src/components/DynamicMilestone.jsx
import React, { useState, useEffect } from 'react';
import { calculateTimeRemaining, formatDateRange } from '../utils/timeUtils';

const DynamicMilestone = ({ 
  title, 
  startDate, 
  endDate, 
  icon = "clock",
  color = "cyan" 
}) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(endDate));

  useEffect(() => {
    // Initial calculation
    setTimeRemaining(calculateTimeRemaining(endDate));

    // Update every minute (60000ms)
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(endDate));
    }, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [endDate]);

  const getIcon = () => {
    switch (icon) {
      case "clock":
        return (
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "target":
        return (
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "zap":
        return (
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case "cyan":
        return "text-cyan-400";
      case "purple":
        return "text-purple-400";
      case "green":
        return "text-green-400";
      case "blue":
        return "text-blue-400";
      default:
        return "text-cyan-400";
    }
  };

  const timeUnits = [
    { label: 'Years', value: timeRemaining.years, show: timeRemaining.years > 0 },
    { label: 'Months', value: timeRemaining.months, show: timeRemaining.months > 0 || timeRemaining.years > 0 },
    { label: 'Weeks', value: timeRemaining.weeks, show: true },
    { label: 'Days', value: timeRemaining.days, show: true },
    { label: 'Hours', value: timeRemaining.hours, show: true }
  ].filter(unit => unit.show);

  return (
    <div className="glass-card p-6">
      {/* Header with title and date range */}
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${getColorClasses()} flex items-center`}>
          {getIcon()}
          {title}
        </h3>
        <div className="text-xs text-gray-400 text-right">
          {formatDateRange(startDate, endDate)}
        </div>
      </div>

      {/* Time remaining cards */}
      <div className="space-y-4">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="bg-white/5 rounded-lg p-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-300 text-sm">{unit.label}</span>
              <span className={`text-lg font-bold text-white ${timeRemaining.isExpired ? 'text-red-400' : ''}`}>
                {timeRemaining.isExpired ? '0' : unit.value}
              </span>
            </div>
            {/* Additional detail for the last non-zero unit */}
            {unit.label === 'Days' && (
              <div className="text-xs text-gray-400">
                {timeRemaining.isExpired ? 'Expired' : `${timeRemaining.hours} hours remaining`}
              </div>
            )}
            {unit.label === 'Weeks' && timeRemaining.years === 0 && timeRemaining.months === 0 && (
              <div className="text-xs text-gray-400">
                {timeRemaining.isExpired ? 'Expired' : `${timeRemaining.days} days ${timeRemaining.hours} hours`}
              </div>
            )}
            {unit.label === 'Months' && timeRemaining.years === 0 && (
              <div className="text-xs text-gray-400">
                {timeRemaining.isExpired ? 'Expired' : `${Math.floor(timeRemaining.totalDays % 30)} days ${timeRemaining.hours} hours`}
              </div>
            )}
            {unit.label === 'Years' && (
              <div className="text-xs text-gray-400">
                {timeRemaining.isExpired ? 'Expired' : `${timeRemaining.months} months ${Math.floor(timeRemaining.totalDays % 30)} days ${timeRemaining.hours} hours`}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Status indicator */}
      {timeRemaining.isExpired && (
        <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
          <div className="flex items-center text-red-400">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Milestone Expired</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicMilestone;