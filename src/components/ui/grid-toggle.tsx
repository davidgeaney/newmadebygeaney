'use client';

import { useState, useEffect } from 'react';
import { LayoutGrid, LayoutList } from 'lucide-react';

type GridLayout = 'grid' | 'list';

interface GridToggleProps {
  onLayoutChange: (layout: GridLayout) => void;
  initialLayout?: GridLayout;
}

export default function GridToggle({ 
  onLayoutChange,
  initialLayout = 'grid'
}: GridToggleProps) {
  const [layout, setLayout] = useState<GridLayout>(initialLayout);

  useEffect(() => {
    onLayoutChange(layout);
  }, [layout, onLayoutChange]);

  return (
    <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
      <button
        onClick={() => setLayout('grid')}
        className={`p-2 rounded-full transition-colors ${layout === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'}`}
        aria-label="Grid view"
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
      <button
        onClick={() => setLayout('list')}
        className={`p-2 rounded-full transition-colors ${layout === 'list' ? 'bg-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'}`}
        aria-label="List view"
      >
        <LayoutList className="w-5 h-5" />
      </button>
    </div>
  );
}
