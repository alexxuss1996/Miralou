import React from 'react';
import { ReactSVG } from 'react-svg';
import sliders from '@/assets/icons/vector/sliders.svg';

const FilterIcon = () => {
  return (
    <div className="inline-block h-[18px] w-[16px]">
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add('fill-white');
          svg.classList.add('inline-block');
          svg.classList.add('absolute');
          svg.classList.add('h-[20px]');
          svg.classList.add('w-[17px]');
        }}
        className="sliders-icon"
        evalScripts="always"
        fallback={() => <span>Error!</span>}
        httpRequestWithCredentials={true}
        loading={() => <span>Loading</span>}
        onError={(error) => {
          console.error(error);
        }}
        renumerateIRIElements={false}
        src={sliders}
        useRequestCache={true}
        wrapper="span"
      />
    </div>
  );
};

export default FilterIcon;
