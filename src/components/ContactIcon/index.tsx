import React from 'react';
import { ReactSVG } from 'react-svg';

interface ContactIcon {
  src: string;
}

const ContactIcon = ({ src }: ContactIcon) => {
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        svg.classList.add('stroke-white');
        svg.classList.add('inline-block');
      }}
      className="contact-icon"
      evalScripts="always"
      fallback={() => <span>Error!</span>}
      httpRequestWithCredentials={true}
      loading={() => <span>Loading</span>}
      onError={(error) => {
        console.error(error);
      }}
      renumerateIRIElements={false}
      src={src}
      useRequestCache={true}
      wrapper="span"
    />
  );
};

export default ContactIcon;
