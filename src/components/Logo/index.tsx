import logoPngUrl from '../../assets/images/logo.png';
import logoWhitePngUrl from '../../assets/images/logo-white.png';
import logoSvgUrl from '../../assets/images/logo.svg';
import logoWhiteSvgUrl from '../../assets/images/logo-white.svg';

interface Logo {
  isWhite?: boolean;
}

const Logo = ({ isWhite }: Logo) => {
  return (
    <a href="/" className="inline-block cursor-pointer">
      <picture className="sm:min-w-[90px]">
        <source srcSet={isWhite ? logoWhiteSvgUrl : logoSvgUrl} />
        <img src={isWhite ? logoWhitePngUrl : logoPngUrl} className="sm:min-w-[80px]" alt="Logo" />
      </picture>
    </a>
  );
};

export default Logo;
