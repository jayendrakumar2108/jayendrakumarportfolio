import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Incident } from '../types/incident';
import SeverityBadge from './SeverityBadge';

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const formattedDate = new Date(incident.reported_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-200 hover:shadow-lg">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-800">{incident.title}</h3>
          <div className="flex items-center gap-2">
            <SeverityBadge severity={incident.severity} />
            <span className="text-sm text-gray-500">{formattedDate}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={toggleExpand}
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Hide Details</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span>View Details</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-3 p-3 bg-gray-50 rounded-md border border-gray-100 animate-fadeIn">
            <p className="text-gray-700">{incident.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncidentCard;