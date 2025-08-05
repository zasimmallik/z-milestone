import React from 'react';

const Clock = ({ currentDate }) => {
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="glass-card p-8 text-center neon-glow">
      {/* REVERTED: Font sizes returned to original */}
      <div className="text-6xl md:text-8xl font-bold text-cyan-400 text-glow mb-4">
        {formatTime(currentDate)}
      </div>
      <div className="text-xl text-gray-300">
        {formatDate(currentDate)}
      </div>
    </div>
  );
};

export default Clock;