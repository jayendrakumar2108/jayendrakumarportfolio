import React, { useState } from 'react';
import { AlertCircle, Plus, X } from 'lucide-react';
import { Incident, Severity } from '../types/incident';

interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, 'id'>) => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onSubmit }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Severity>('Medium');
  const [formErrors, setFormErrors] = useState<{ title?: string; description?: string }>({});

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    // Reset form when hiding
    if (isFormVisible) {
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setFormErrors({});
  };

  const validateForm = () => {
    const errors: { title?: string; description?: string } = {};
    
    if (!title.trim()) {
      errors.title = 'Title is required';
    }
    
    if (!description.trim()) {
      errors.description = 'Description is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newIncident = {
        title,
        description,
        severity,
        reported_at: new Date().toISOString()
      };
      
      onSubmit(newIncident);
      resetForm();
      setIsFormVisible(false);
    }
  };

  return (
    <div className="mb-8">
      <button
        onClick={toggleFormVisibility}
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-white font-medium transition-colors ${
          isFormVisible ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isFormVisible ? (
          <>
            <X size={18} />
            <span>Cancel</span>
          </>
        ) : (
          <>
            <Plus size={18} />
            <span>Report New Incident</span>
          </>
        )}
      </button>
      
      {isFormVisible && (
        <div className="mt-4 p-5 bg-white rounded-lg shadow-md border border-gray-200 animate-slideDown">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Report New AI Safety Incident</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Incident Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formErrors.title ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter a descriptive title"
              />
              {formErrors.title && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {formErrors.title}
                </p>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Incident Description *
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formErrors.description ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Describe what happened in detail..."
              />
              {formErrors.description && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {formErrors.description}
                </p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="severity" className="block text-sm font-medium text-gray-700 mb-1">
                Severity Level *
              </label>
              <select
                id="severity"
                value={severity}
                onChange={(e) => setSeverity(e.target.value as Severity)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setIsFormVisible(false);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default IncidentForm;