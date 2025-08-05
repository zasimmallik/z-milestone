import React, { useState, useEffect } from 'react';

const ZMission = () => {
  const [missionData, setMissionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Z-MISSION.json');
        const data = await response.json();
        setMissionData(data);
      } catch (error) {
        console.error('Error fetching mission data:', error);
      }
    };

    fetchData();
  }, []);

  if (!missionData) {
    return (
      <div className="glass-card p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      {/* UPDATED: Increased font sizes */}
      <h3 className="text-xl font-semibold text-cyan-400 mb-4">{missionData['Z-MISSION']}</h3>
      
      <div className="space-y-4">
        {missionData.milestones.map((milestone) => (
          <div key={milestone.id} className="p-4 bg-white/5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
            <div className="flex items-start justify-between mb-2">
              {/* UPDATED: Increased font sizes */}
              <h4 className="text-lg font-semibold text-white">{milestone.title}</h4>
              <span className="text-base text-cyan-400 font-medium">{milestone.deadline}</span>
            </div>
            {/* UPDATED: Increased font sizes */}
            <p className="text-base text-gray-300 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZMission;