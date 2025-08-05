import React, { useState, useEffect } from 'react';

const DailyRoutine = () => {
  const [routineData, setRoutineData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/dailyRoutine.json');
        const data = await response.json();
        setRoutineData(data);
      } catch (error) {
        console.error('Error fetching routine data:', error);
      }
    };

    fetchData();
  }, []);

  if (!routineData) {
    return (
      <div className="glass-card p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-4 bg-gray-700 rounded"></div>
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="h-3 bg-gray-700 rounded"></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-cyan-400 mb-4">{routineData.title}</h3>
      <p className="text-sm text-gray-300 mb-6">{routineData.updated}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {routineData.routines.map((routine) => (
          <div key={routine.day} className="space-y-3">
            <h4 className="text-md font-semibold text-white border-b border-cyan-500/30 pb-2">
              {routine.day}
            </h4>
            <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-hide">
              {routine.schedule.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-cyan-400">
                      {activity.time}
                    </div>
                    <div className="text-xs text-gray-300 mt-1">
                      {activity.activity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyRoutine; 