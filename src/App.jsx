import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import Calendar from './components/Calendar';
import DynamicMilestone from './components/DynamicMilestone';
import AllZMissionAndMilestone from './components/All Z-MISSION-And-Milestone';
import FitnessProgress from './components/Fitness-Progress';
import DailyRoutine from './components/DAILY-ROUTINE';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Sample milestone data - you can move this to a JSON file later
  const milestones = [
    {
      name: "Small Milestone",
      startDate: "2025-08-05T00:00:00",
      endDate: "2025-08-20T23:59:59", // End of August 20th
      icon: "clock",
      color: "cyan"
    },
    {
      name: "Z Mission",
      startDate: "2025-08-05T00:00:00",
      endDate: "2025-10-31T23:59:59", // End of October 31st
      icon: "target",
      color: "cyan"
    },
    {
      name: "ZR Mission",
      startDate: "2025-08-05T00:00:00",
      endDate: "2026-11-01T00:00:00", // November 1st, 2026
      icon: "zap",
      color: "cyan"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMonthChange = (direction) => {
    const newDate = new Date(selectedMonth);
    if (direction === 'next') {
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setSelectedMonth(newDate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Main Content */}
      <main className="w-full px-4 py-8">
        {/* Clock Section */}
        <div className="mb-6">
          <div className="glass-card p-6">
            <Clock currentDate={currentDate} />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Calendar and Daily Routine */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendar */}
            <div className="glass-card p-6">
              {/* Month Navigation */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => handleMonthChange('prev')}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-cyan-400 hover:text-cyan-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h2 className="text-2xl font-bold text-white">
                    {selectedMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h2>
                  <button 
                    onClick={() => handleMonthChange('next')}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-cyan-400 hover:text-cyan-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calendar
              </h3>
              <Calendar selectedMonth={selectedMonth} currentDate={currentDate} />
            </div>
            
            {/* Daily Routine */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Daily Routine
              </h3>
              <div className="h-96 overflow-y-auto scrollbar-hide pr-2">
                <DailyRoutine />
              </div>
            </div>
          </div>

          {/* Right Column - Dynamic Milestone Components */}
          <div className="lg:col-span-1 space-y-6">
            {milestones.map((milestone, index) => (
              <DynamicMilestone
                key={`${milestone.name}-${index}`}
                title={milestone.name}
                startDate={milestone.startDate}
                endDate={milestone.endDate}
                icon={milestone.icon}
                color={milestone.color}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section - Fitness Progress and All Missions & Milestones side by side */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fitness Progress */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Fitness Progress
            </h3>
            <div className="h-[28rem] overflow-y-auto scrollbar-hide pr-2">
              <FitnessProgress />
            </div>
          </div>
          
          {/* All Missions and Milestones */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              All Missions & Milestones
            </h3>
            <div className="h-[28rem] overflow-y-auto scrollbar-hide pr-2">
              <AllZMissionAndMilestone />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;