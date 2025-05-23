import React from 'react';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { Severity } from '../types/incident';

interface SeverityBadgeProps {
  severity: Severity;
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const getSeverityConfig = (severity: Severity) => {
    switch (severity) {
      case 'Low':
        return {
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-800',
          borderColor: 'border-blue-200',
          icon: <Info size={16} className="text-blue-500" />
        };
      case 'Medium':
        return {
          bgColor: 'bg-amber-100',
          textColor: 'text-amber-800',
          borderColor: 'border-amber-200',
          icon: <AlertTriangle size={16} className="text-amber-500" />
        };
      case 'High':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          borderColor: 'border-red-200',
          icon: <AlertCircle size={16} className="text-red-500" />
        };
      default:
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          borderColor: 'border-gray-200',
          icon: <Info size={16} className="text-gray-500" />
        };
    }
  };

  const { bgColor, textColor, borderColor, icon } = getSeverityConfig(severity);

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor} border ${borderColor}`}>
      {icon}
      {severity}
    </span>
  );
};

export default SeverityBadge;