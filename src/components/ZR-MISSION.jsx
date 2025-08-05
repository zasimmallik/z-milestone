import React, { useState, useEffect } from 'react';

const ZRMission = () => {
  const [missionData, setMissionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/ZR-MISSION.json');
        const data = await response.json();
        setMissionData(data);
      } catch (error) {
        console.error('Error fetching ZR mission data:', error);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'planned':
        return 'text-blue-400';
      case 'in-progress':
        return 'text-yellow-400';
      case 'completed':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-cyan-400">{missionData.title}</h3>
        <span className={`text-sm font-medium ${getStatusColor(missionData.status)}`}>
          {missionData.status}
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-white/5 rounded-lg border border-cyan-500/20">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-white">{missionData.title}</h4>
            <span className="text-sm text-cyan-400 font-medium">
              {formatDate(missionData.date)}
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-3">
            {missionData.description}
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">Category:</span>
            <span className="text-xs text-cyan-400 font-medium">{missionData.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZRMission; 