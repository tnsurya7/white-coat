'use client';

import { Search } from 'lucide-react';

interface PropertyFiltersProps {
  onSearchChange: (search: string) => void;
  onTypeChange: (type: string) => void;
  onBudgetChange: (budget: string) => void;
  onClearAll: () => void;
}

const PropertyFilters = ({ onSearchChange, onTypeChange, onBudgetChange, onClearAll }: PropertyFiltersProps) => {
  return (
    <div className="glass-card p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        <div className="md:col-span-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by location, property type..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <select 
          onChange={(e) => onTypeChange(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
        >
          <option value="">All Property Types</option>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Land">Land</option>
        </select>

        <select 
          onChange={(e) => onBudgetChange(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
        >
          <option value="">All Budgets</option>
          <option value="0-1">Less than ₹1 Cr</option>
          <option value="2-4">₹2-4 Cr</option>
          <option value="4-6">₹4-6 Cr</option>
          <option value="6+">₹6+ Cr</option>
        </select>
      </div>

      <div className="flex items-center justify-end mt-4 pt-4 border-t border-gray-200">
        <button 
          onClick={onClearAll}
          className="text-gold-600 font-medium hover:underline text-sm sm:text-base"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default PropertyFilters;
