import FilterButton from '@/components/features/FilterButton';
import SortSelect from '@/components/features/SortSelect';
import { getPaginationText } from '@/helpers';
import { useAppSelector } from '@/hooks';
export type PanelHeader = {
  panelIsOpen: boolean;
  togglePanel: () => void;
};
const PanelHeader = ({ panelIsOpen, togglePanel }: PanelHeader) => {
  const { currentProductsCount } = useAppSelector((state) => state.products);
  const { currentPage, perPage } = useAppSelector((state) => state.pagination);

  return (
    <div className="mb-12 flex flex-col items-center justify-between text-xl md:flex-row">
      <span className=" mb-5 font-light md:mb-0">
        {getPaginationText(currentPage, perPage, currentProductsCount)}
      </span>
      <div className="flex flex-col gap-10 md:flex-row">
        <SortSelect />
        <FilterButton panelIsOpen={panelIsOpen} togglePanel={togglePanel} />
      </div>
    </div>
  );
};

export default PanelHeader;
