import React from 'react';
import { Filter, SortDesc, SortAsc } from 'lucide-react';
import { Severity } from '../types/incident';

interface FilterControlsProps {
  activeSeverityFilter: string;
  setSeverityFilter: (filter: string) => void;
  sortOrder: 'newest' | 'oldest';
  setSortOrder: (order: 'newest' | 'oldest') => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  activeSeverityFilter,
  setSeverityFilter,
  sortOrder,
  setSortOrder
}) => {
  const severityOptions: Array<string | Severity> = ['All', 'Low', 'Medium', 'High'];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Filter by Severity:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {severityOptions.map((severity) => (
            <button
              key={severity}
              onClick={() => setSeverityFilter(severity)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeSeverityFilter === severity
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
              }`}
            >
              {severity}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-center mt-4 sm:mt-3">
        <div className="flex items-center gap-2">
          {sortOrder === 'newest' ? (
            <SortDesc size={18} className="text-gray-500" />
          ) : (
            <SortAsc size={18} className="text-gray-500" />
          )}
          <span className="text-sm font-medium text-gray-700">Sort by Date:</span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setSortOrder('newest')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              sortOrder === 'newest'
                ? 'bg-blue-100 text-blue-800 border border-blue-200'
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}
          >
            Newest First
          </button>
          <button
            onClick={() => setSortOrder('oldest')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              sortOrder === 'oldest'
                ? 'bg-blue-100 text-blue-800 border border-blue-200'
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}
          >
            Oldest First
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;