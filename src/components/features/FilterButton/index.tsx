import { PanelHeader } from '@/components/features/PanelHeader';
import FilterIcon from '@/components/shared/FilterIcon';

const FilterButton = ({ togglePanel, panelIsOpen }: PanelHeader) => {
  const handleFilterButton = () => {
    togglePanel();
  };
  return (
    <button
      className={
        panelIsOpen
          ? 'relative flex flex-row items-center gap-2 bg-primary px-8 py-2.5 text-base font-light text-white transition duration-300 ease-in-out'
          : 'relative flex flex-row items-center gap-2 bg-secondary px-8 py-2.5 text-base font-light text-black transition duration-300 ease-in-out'
      }
      onClick={handleFilterButton}
    >
      <p>Filter</p>
      <FilterIcon />
    </button>
  );
};

export default FilterButton;
