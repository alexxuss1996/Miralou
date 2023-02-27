import React from 'react';
import { ReactSVG } from 'react-svg';
import quoteIcon from '@/assets/images/icons/feather/quote.svg';

const QuoteIcon = () => {
  return (
    <div className="h-[33px] w-[33px]">
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add('fill-accent');
        }}
        className="quote-icon"
        evalScripts="always"
        fallback={() => <span>Error!</span>}
        httpRequestWithCredentials={true}
        loading={() => <span>Loading</span>}
        onError={(error) => {
          console.error(error);
        }}
        renumerateIRIElements={false}
        src={quoteIcon}
        useRequestCache={true}
        wrapper="span"
      />
    </div>
  );
};

export default QuoteIcon;
