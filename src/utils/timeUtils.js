// src/utils/timeUtils.js

/**
 * Calculate the remaining time between current date and end date in a non-overlapping way.
 * This function accurately handles different month lengths and leap years.
 * @param {string|Date} endDate - The target end date
 * @returns {Object} Object containing years, months, weeks, days, hours, and total milliseconds
 */
export const calculateTimeRemaining = (endDate) => {
  const now = new Date();
  const target = new Date(endDate);
  const totalMs = target.getTime() - now.getTime();

  // If the target date has passed, return zeros
  if (totalMs <= 0) {
    return {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      totalMs: 0,
      isExpired: true,
    };
  }

  // Use a temporary date to perform calculations without modifying 'now'
  let tempNow = new Date(now);

  // Calculate full years remaining
  let years = target.getFullYear() - tempNow.getFullYear();
  tempNow.setFullYear(tempNow.getFullYear() + years);
  if (tempNow > target) {
    years--;
    tempNow.setFullYear(tempNow.getFullYear() - 1);
  }

  // Calculate full months remaining after accounting for years
  let months = target.getMonth() - tempNow.getMonth();
  if (months < 0) {
    months += 12; // Adjust for year wrap-around
  }
  tempNow.setMonth(tempNow.getMonth() + months);
  if (tempNow > target) {
    months--;
    tempNow.setMonth(tempNow.getMonth() - 1);
  }

  // The remaining difference will be used for days and smaller units
  const remainingMs = target.getTime() - tempNow.getTime();

  // Calculate days, weeks, and hours from the remaining milliseconds
  const remainingDays = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
  
  const weeks = Math.floor(remainingDays / 7);
  const days = remainingDays % 7;
  
  const hours = Math.floor((remainingMs / (1000 * 60 * 60)) % 24);

  // For compatibility with other parts of your app, we can still calculate total values
  const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = Math.floor(totalMs / (1000 * 60 * 60));

  return {
    years,
    months,
    weeks,
    days,
    hours,
    totalMs,
    isExpired: false,
    // Keep these additional values in case they are used elsewhere
    totalDays,
    totalWeeks,
    totalHours,
  };
};

/**
 * Format date range for display
 * @param {string|Date} startDate - The start date
 * @param {string|Date} endDate - The end date
 * @returns {string} Formatted date range string
 */
export const formatDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const options = { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  };
  
  const startFormatted = start.toLocaleDateString('en-US', options);
  const endFormatted = end.toLocaleDateString('en-US', options);
  
  return `${startFormatted} – ${endFormatted}`;
};

/**
 * Format time remaining for display with proper pluralization
 * @param {number} value - The time value
 * @param {string} unit - The time unit (year, month, week, day, hour)
 * @returns {string} Formatted time string
 */
export const formatTimeUnit = (value, unit) => {
  if (value === 0) return '';
  if (value === 1) return `${value} ${unit}`;
  return `${value} ${unit}s`;
};

/**
 * Get a human-readable description of remaining time
 * @param {Object} timeRemaining - Result from calculateTimeRemaining
 * @returns {string} Human-readable time description
 */
export const getTimeDescription = (timeRemaining) => {
  const { years, months, weeks, days, hours, isExpired } = timeRemaining;
  
  if (isExpired) return 'Expired';
  
  const parts = [];
  
  if (years > 0) parts.push(formatTimeUnit(years, 'year'));
  if (months > 0) parts.push(formatTimeUnit(months, 'month'));
  if (weeks > 0) parts.push(formatTimeUnit(weeks, 'week'));
  if (days > 0) parts.push(formatTimeUnit(days, 'day'));
  if (hours > 0) parts.push(formatTimeUnit(hours, 'hour'));
  
  if (parts.length === 0) return 'Less than an hour';
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return parts.join(' ');
  
  return parts.slice(0, -1).join(', ') + ' ' + parts[parts.length - 1];
};