import React, { useState } from 'react';
type PanelBodyType = {
  panelIsOpen: boolean;
};
const PanelBody = ({ panelIsOpen }: PanelBodyType) => {
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
        <input type="checkbox" name="men" id="men" className="appearance-none" />
        <label htmlFor="men" className="text-light mb-5 cursor-pointer">
          For Men (20)
        </label>

        <input type="checkbox" name="woman" id="woman" className="appearance-none" />
        <label htmlFor="woman" className="text-light mb-5 cursor-pointer">
          For woman (40)
        </label>

        <input type="checkbox" name="pregnant" id="pregnant" className="appearance-none" />
        <label htmlFor="pregnant" className="text-light mb-5 cursor-pointer">
          For pregnant (13)
        </label>

        <input type="checkbox" name="children" id="children" className="appearance-none" />
        <label htmlFor="children" className="text-light mb-0 cursor-pointer">
          For children (27)
        </label>
      </div>
      <div className="brands mb-5 flex  flex-col md:mb-0">
        <h3 className="mb-4 text-xl font-medium text-black md:text-base">Brands</h3>
        <input type="checkbox" name="aveda" id="aveda" className="appearance-none" />
        <label htmlFor="aveda" className="text-light mb-5 cursor-pointer">
          Aveda (15)
        </label>

        <input type="checkbox" name="benefit" id="benefit" className="appearance-none" />
        <label htmlFor="benefit" className="text-light mb-5 cursor-pointer">
          Benefit (25)
        </label>

        <input type="checkbox" name="cerave" id="cerave" className="appearance-none" />
        <label htmlFor="cerave" className="text-light mb-5 cursor-pointer">
          Cerave (20)
        </label>

        <input type="checkbox" name="dave" id="dave" className="appearance-none" />
        <label htmlFor="dave" className="text-light mb-0 cursor-pointer">
          Dave (40)
        </label>
      </div>
      <div className="price mb-5 flex flex-col md:mb-0">
        <h3 className="mb-4 text-xl font-medium text-black md:text-base">Price</h3>
        <input type="radio" name="price" id="all" defaultChecked className="appearance-none" />
        <label htmlFor="all" className="text-light mb-5 cursor-pointer">
          All
        </label>

        <input type="radio" name="price" id="low-price" className="appearance-none" />
        <label htmlFor="low-price" className="text-light mb-5 cursor-pointer">
          $0.00 - $20.00
        </label>

        <input type="radio" name="price" id="medium-price" className="appearance-none" />
        <label htmlFor="medium-price" className="text-light mb-5 cursor-pointer">
          $20.00 - $80.00
        </label>

        <input type="radio" name="price" id="high-price" className="appearance-none" />
        <label htmlFor="high-price" className="text-light mb-0 cursor-pointer">
          $80.00+
        </label>
      </div>
      <div className="sort-by flex flex-col">
        <h3 className="mb-4 text-xl font-medium text-black md:text-base">Sort By</h3>
        <input type="radio" name="sort-by" id="name" className="appearance-none" />
        <label htmlFor="name" className="text-light mb-5 cursor-pointer">
          Name
        </label>

        <input type="radio" name="sort-by" id="rating" className="appearance-none" />
        <label htmlFor="rating" className="text-light mb-5 cursor-pointer">
          Average rating
        </label>

        <input type="radio" name="sort-by" id="latest" className="appearance-none" />
        <label htmlFor="latest" className="text-light mb-5 cursor-pointer">
          Sort by latest
        </label>

        <input type="radio" name="sort-by" id="high-to-low" className="appearance-none" />
        <label htmlFor="high-to-low" className="text-light mb-0 cursor-pointer">
          High to low
        </label>
      </div>
    </div>
  );
};

export default PanelBody;
