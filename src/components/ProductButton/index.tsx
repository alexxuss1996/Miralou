import { ReactSVG } from 'react-svg';

interface IProductButton {
  src: string;
}
const ProductButton = ({ src }: IProductButton) => {
  return (
    <button className="bg-transition group/product-btn flex h-8 w-8 items-center justify-center rounded-full bg-white hover:bg-accent">
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add('group-hover/product-btn:stroke-white');
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
    </button>
  );
};

export default ProductButton;
