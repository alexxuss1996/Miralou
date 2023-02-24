import React from 'react';
import { ReactSVG } from 'react-svg';

interface SocialIcon {
  src: string;
}

const SocialIcon = ({ src }: SocialIcon) => {
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        svg.classList.add('stroke-white/80');
        svg.classList.add('group-hover/social-btn:stroke-black');
      }}
      className="social-icon"
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

export default SocialIcon;
