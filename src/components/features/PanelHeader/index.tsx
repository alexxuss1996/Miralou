import FilterButton from '@/components/features/FilterButton';
import SortSelect from '@/components/features/SortSelect';
import React from 'react';
export type PanelHeader = {
  panelIsOpen: boolean;
  togglePanel: () => void;
};
const PanelHeader = ({ panelIsOpen, togglePanel }: PanelHeader) => {
  return (
    <div className="mb-12 flex flex-col items-center justify-between text-xl md:flex-row">
      <span className=" mb-5 font-light md:mb-0">Showing 1-12 of 16 results</span>
      <div className="flex flex-col gap-10 md:flex-row">
        <SortSelect />
        <FilterButton panelIsOpen={panelIsOpen} togglePanel={togglePanel} />
      </div>
    </div>
  );
};

export default PanelHeader;
