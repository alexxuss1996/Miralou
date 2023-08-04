import React from 'react';

import { TbChevronLeft, TbChevronRight, TbChevronsLeft, TbChevronsRight } from 'react-icons/tb';
import { calculatePaginationPages } from '@/helpers';
import { useAppDispatch } from '@/hooks';
import {
  decrementCurrentPage,
  incrementCurrentPage,
  setCurrentPage,
} from '@/store/slices/pagination/paginationSlice';
type PaginatorType = {
  numberOfPages: number;
  currentPage: number;
};
const Paginator = ({ numberOfPages, currentPage }: PaginatorType) => {
  if (!Number.isInteger(numberOfPages) || numberOfPages <= 0) {
    return null;
  }

  let pages = calculatePaginationPages(numberOfPages);
  const dispatch = useAppDispatch();

  return (
    <div className="relative flex h-10 flex-row items-center justify-center pt-10 font-sans font-medium">
      <button
        disabled={currentPage === 1 || pages.length === 0}
        className="first mr-0 flex h-10 w-10 items-center justify-center rounded-full bg-[transparent] text-black"
        onClick={() => dispatch(setCurrentPage(1))}
      >
        <TbChevronsLeft fontSize={28} />
      </button>
      <button
        disabled={currentPage === 1 || pages.length === 0}
        className="prev mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[transparent] text-black"
        onClick={() => dispatch(decrementCurrentPage())}
      >
        <TbChevronLeft fontSize={28} />
      </button>

      <div className="flex flex-row items-center justify-center">
        {pages?.map((page, index) => (
          <button
            key={index}
            className={currentPage === page ? `pagination-button active` : `pagination-button`}
            onClick={() => dispatch(setCurrentPage(page))}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === numberOfPages}
        className="next mr-0 flex h-10 w-10 items-center justify-center rounded-full bg-[transparent] text-black"
        onClick={() => dispatch(incrementCurrentPage())}
      >
        <TbChevronRight fontSize={28} />
      </button>
      <button
        disabled={currentPage === numberOfPages}
        className="last mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[transparent] text-black"
        onClick={() => dispatch(setCurrentPage(numberOfPages))}
      >
        <TbChevronsRight fontSize={28} />
      </button>
    </div>
  );
};

export default Paginator;
