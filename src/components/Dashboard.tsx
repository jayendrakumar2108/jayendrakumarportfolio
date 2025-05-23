import React, { useState, useMemo } from 'react';
import { ShieldAlert } from 'lucide-react';
import { Incident, Severity } from '../types/incident';
import mockIncidents from '../data/mockIncidents';
import IncidentList from './IncidentList';
import FilterControls from './FilterControls';
import IncidentForm from './IncidentForm';

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const filteredAndSortedIncidents = useMemo(() => {
    let result = [...incidents];
    
    // Apply severity filter
    if (severityFilter !== 'All') {
      result = result.filter(
        (incident) => incident.severity === severityFilter
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    return result;
  }, [incidents, severityFilter, sortOrder]);

  const handleNewIncident = (newIncident: Omit<Incident, 'id'>) => {
    const nextId = Math.max(...incidents.map(incident => incident.id), 0) + 1;
    
    setIncidents((prevIncidents) => [
      ...prevIncidents,
      { ...newIncident, id: nextId }
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-6">
        <ShieldAlert size={28} className="text-blue-600 mr-2" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">AI Safety Incident Dashboard</h1>
      </div>
      
      <IncidentForm onSubmit={handleNewIncident} />
      
      <FilterControls
        activeSeverityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Incidents {severityFilter !== 'All' ? `(${severityFilter} Severity)` : ''}
        </h2>
        <span className="text-sm text-gray-500">
          Showing {filteredAndSortedIncidents.length} of {incidents.length} incidents
        </span>
      </div>
      
      <IncidentList incidents={filteredAndSortedIncidents} />
    </div>
  );
};

export default Dashboard;