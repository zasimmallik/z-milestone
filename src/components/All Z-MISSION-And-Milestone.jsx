import React, { useState, useEffect } from 'react';

const AllZMissionAndMilestone = () => {
  const [missionData, setMissionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/All Z-MISSION-And-Milestone.json');
        const data = await response.json();
        setMissionData(data);
      } catch (error) {
        console.error('Error fetching all mission data:', error);
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
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'in-progress':
        return 'text-yellow-400';
      case 'upcoming':
        return 'text-blue-400';
      case 'completed':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'in-progress':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
      case 'upcoming':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
      case 'completed':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="glass-card p-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{missionData.title}</h3>
        <p className="text-sm text-gray-300">{missionData.updated}</p>
      </div>
      
      <div className="space-y-8">
        {missionData.missions.map((mission) => (
          <div key={mission.id} className="space-y-4">
            <h4 className="text-xl font-semibold text-white border-b border-cyan-500/30 pb-2">
              {mission.title}
            </h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {mission.milestones.map((milestone) => (
                <div key={milestone.id} className="p-4 bg-white/5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between mb-3">
                    <h5 className="font-semibold text-white">{milestone.title}</h5>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(milestone.status)}
                      <span className={`text-xs font-medium ${getStatusColor(milestone.status)}`}>
                        {milestone.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-cyan-400 font-medium">{milestone.deadline}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {milestone.details}
                    </p>
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

export default AllZMissionAndMilestone; 