import React, { useState, useEffect } from 'react';

const FitnessProgress = () => {
  const [fitnessData, setFitnessData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fitness.json');
        const data = await response.json();
        setFitnessData(data);
      } catch (error) {
        console.error('Error fetching fitness data:', error);
      }
    };

    fetchData();
  }, []);

  if (!fitnessData) {
    return (
      <div className="glass-card p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const calculateProgress = (current, target) => {
    if (typeof current === 'number' && typeof target === 'number') {
      return Math.min((current / target) * 100, 100);
    }
    return 60;
  };

  return (
    <div className="glass-card p-6">
      {/* UPDATED: Increased font sizes */}
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{fitnessData.title}</h3>
      <p className="text-base text-gray-300 mb-6">Target: {fitnessData.targetDate}</p>
      
      <div className="space-y-4">
        {fitnessData.metrics.map((metric) => (
          <div key={metric.id} className="space-y-2">
            <div className="flex justify-between items-center">
              {/* UPDATED: Increased font sizes */}
              <span className="text-base text-gray-300">{metric.label}</span>
              <div className="text-right text-base"> {/* UPDATED: Increased font size */}
                <span className="text-white font-medium">{metric.current}</span>
                <span className="text-gray-400 mx-2">→</span>
                <span className="text-cyan-400 font-medium">{metric.target}</span>
              </div>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${calculateProgress(metric.current, metric.target)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessProgress;