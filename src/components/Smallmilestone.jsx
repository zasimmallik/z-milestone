import React, { useState, useEffect } from 'react';

const SmallMilestone = () => {
  const [milestoneData, setMilestoneData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Smallmilestone.json');
        const data = await response.json();
        setMilestoneData(data);
      } catch (error) {
        console.error('Error fetching small milestone data:', error);
      }
    };

    fetchData();
  }, []);

  if (!milestoneData) {
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
      <div className="text-center mb-6">
        {/* UPDATED: Increased font sizes */}
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{milestoneData.title}</h3>
        <p className="text-base text-gray-300">{milestoneData.period}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestoneData.milestones.map((milestone) => (
          <div key={milestone.id} className="p-4 bg-white/5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              {/* UPDATED: Increased font sizes */}
              <span className="text-sm text-cyan-400 font-medium">{milestone.dateRange}</span>
              <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <span className="text-sm text-cyan-400 font-bold">{milestone.id}</span>
              </div>
            </div>
            {/* UPDATED: Increased font sizes */}
            <h4 className="text-lg font-semibold text-white mb-2">{milestone.title}</h4>
            <p className="text-base text-gray-300 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallMilestone;