import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  setCategories,
  setBrands,
  setPriceRange,
  setSortBy,
} from '@/store/slices/products/productsSlice';
import { capitalizeFirstLetter } from '@/helpers';

type PanelBodyType = {
  panelIsOpen: boolean;
};

const PanelBody = ({ panelIsOpen }: PanelBodyType) => {
  const { categories, brands, priceRange, sortBy } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target?.id;
    const checked = e.target?.checked;

    if (checked) {
      dispatch(setCategories([...categories, category]));
    } else {
      dispatch(setCategories(categories.filter((cat) => cat !== category)));
    }
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brand = capitalizeFirstLetter(e.target?.id);
    const checked = e.target?.checked;

    if (checked) {
      dispatch(setBrands([...brands, brand]));
    } else {
      dispatch(setBrands(brands.filter((b) => b !== brand)));
    }
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPriceRange(e.target?.id));
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortBy(e.target?.id));
  };

  return (
    <div
      className={
        panelIsOpen
          ? 'visible flex flex-col items-center justify-between bg-secondary py-10 px-24 text-black opacity-100 transition duration-500 ease-linear md:flex-row'
          : 'invisible hidden bg-secondary py-10 px-24 text-black opacity-0 transition duration-500 ease-linear'
      }
    >
      <div className="categories mb-5 flex flex-col md:mb-0">
        <h3 className="mb-4 text-xl font-medium text-black md:text-base">Categories</h3>
        <input
          type="checkbox"
          name="men"
          id="men"
          className="appearance-none"
          onChange={handleCategoryChange}
        />
        <label htmlFor="men" className="text-light mb-5 cursor-pointer">
          For Men
        </label>

        <input
          type="checkbox"
          name="women"
          id="women"
          className="appearance-none"
          onChange={handleCategoryChange}
        />
        <label htmlFor="women" className="text-light mb-5 cursor-pointer">
          For women
        </label>

        <input
          type="checkbox"
          name="pregnant"
          id="pregnant"
          className="appearance-none"
          onChange={handleCategoryChange}
        />
        <label htmlFor="pregnant" className="text-light mb-5 cursor-pointer">
          For pregnant
        </label>

        <input
          type="checkbox"
          name="children"
          id="children"
          className="appearance-none"
          onChange={handleCategoryChange}
        />
        <label htmlFor="children" className="text-light mb-0 cursor-pointer">
          For children
        </label>
      </div>
      <div className="brands mb-5 flex  flex-col md:mb-0">
        <h3 className="mb-4 text-xl font-medium text-black md:text-base">Brands</h3>
        <input
          type="checkbox"
          name="aveda"
          id="aveda"
          className="appearance-none"
          onChange={handleBrandChange}
        />
        <label htmlFor="aveda" className="text-light mb-5 cursor-pointer">
          Aveda
        </label>

        <input
          type="checkbox"
          name="benefit"
          id="benefit"
          className="appearance-none"
          onChange={handleBrandChange}
        />
        <label htmlFor="benefit" className="text-light mb-5 cursor-pointer">
          Benefit
        </label>

        <input
          type="checkbox"
          name="cerave"
          id="cerave"
          className="appearance-none"
          onChange={handleBrandChange}
        />
        <label htmlFor="cerave" className="text-light mb-5 cursor-pointer">
          Cerave
        </label>

        <input
          type="checkbox"
          name="dave"
          id="dave"
          className="appearance-none"
          onChange={handleBrandChange}
        />
        <label htmlFor="dave" className="text-light mb-0 cursor-pointer">
          Dave
        </label>
      </div>
      <div className="price mb-5 flex flex-col md:mb-0">
        <h3 className="mb-4 text-xl font-medium text-black md:text-base">Price</h3>
        <input
          type="radio"
          name="price"
          id="all"
          checked={priceRange === 'all'}
          className="appearance-none"
          onChange={handlePriceRangeChange}
        />
        <label htmlFor="all" className="text-light mb-5 cursor-pointer">
          All
        </label>

        <input
          type="radio"
          name="price"
          id="low-price"
          className="appearance-none"
          onChange={handlePriceRangeChange}
          checked={priceRange === 'low-price'}
        />
        <label htmlFor="low-price" className="text-light mb-5 cursor-pointer">
          $0.00 - $50.00
        </label>

        <input
          type="radio"
          name="price"
          id="medium-price"
          className="appearance-none"
          onChange={handlePriceRangeChange}
          checked={priceRange === 'medium-price'}
        />
        <label htmlFor="medium-price" className="text-light mb-5 cursor-pointer">
          $50.00 - $200.00
        </label>

        <input
          type="radio"
          name="price"
          id="high-price"
          className="appearance-none"
          onChange={handlePriceRangeChange}
          checked={priceRange === 'high-price'}
        />
        <label htmlFor="high-price" className="text-light mb-0 cursor-pointer">
          $200.00+
        </label>
      </div>
      <div className="sort-by flex flex-col">
        <h3 className="mb-4 text-xl font-medium text-black md:text-base">Sort By</h3>
        <input
          type="radio"
          name="sort-by"
          id="none"
          className="appearance-none"
          onChange={handleSortByChange}
          checked={sortBy === 'none'}
        />
        <label htmlFor="none" className="text-light mb-5 cursor-pointer">
          No sort
        </label>
        <input
          type="radio"
          name="sort-by"
          id="name"
          className="appearance-none"
          onChange={handleSortByChange}
          checked={sortBy === 'name'}
        />
        <label htmlFor="name" className="text-light mb-5 cursor-pointer">
          Name
        </label>

        <input
          type="radio"
          name="sort-by"
          id="rating"
          className="appearance-none"
          onChange={handleSortByChange}
          checked={sortBy === 'rating'}
        />
        <label htmlFor="rating" className="text-light mb-5 cursor-pointer">
          Average rating
        </label>

        <input
          type="radio"
          name="sort-by"
          id="latest"
          className="appearance-none"
          onChange={handleSortByChange}
          checked={sortBy === 'latest'}
        />
        <label htmlFor="latest" className="text-light mb-5 cursor-pointer">
          Sort by latest
        </label>

        <input
          type="radio"
          name="sort-by"
          id="high-to-low"
          className="appearance-none"
          onChange={handleSortByChange}
          checked={sortBy === 'high-to-low'}
        />
        <label htmlFor="high-to-low" className="text-light mb-0 cursor-pointer">
          High to low
        </label>
      </div>
    </div>
  );
};

export default PanelBody;
