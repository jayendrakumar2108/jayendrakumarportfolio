import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Incident } from '../types/incident';
import IncidentCard from './IncidentCard';

interface IncidentListProps {
  incidents: Incident[];
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  if (incidents.length === 0) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center gap-3">
        <AlertCircle size={20} className="text-amber-500" />
        <p className="text-amber-700">No incidents found with the current filters. Try adjusting your filters or report a new incident.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {incidents.map((incident) => (
        <IncidentCard key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;