import heroWoman from '@/assets/images/common/header-woman.jpg';
import heroWoman2x from '@/assets/images/common/header-woman@2x.jpg';

const Hero = () => {
  return (
    <section className="bg-primary md:h-[600px]">
      <div className="container flex h-full flex-row items-center">
        <div className="py-4 md:w-5/12">
          <h1 className="mb-8 text-[46px] font-semibold leading-[1.2] text-white">
            The best solution for moisturizing skin
          </h1>
          <p className="max-w-[428px] font-light text-white">
            Only included the most potent botanical ingridients. Nothing more.
          </p>
          <button className="my-5 border-2 py-3 px-8 font-semibold uppercase text-white transition duration-300 ease-linear hover:border-white hover:bg-white hover:text-primary">
            Buy now
          </button>
        </div>
        <div className="hidden justify-center space-x-5 md:flex md:w-5/12 ">
          <span className="relative z-10 before:absolute before:top-[-21.5%] before:left-[-17.5%] before:z-0 before:h-[75%] before:w-[75%] before:border-2 before:border-white before:opacity-0 before:content-[''] after:absolute after:bottom-[-21.5%] after:right-[-17.5%]  after:z-0 after:h-[75%] after:w-[75%] after:border-2 after:border-white after:opacity-0 after:content-[''] md:before:opacity-100 md:after:opacity-100">
            <img
              src={heroWoman}
              srcSet={`${heroWoman} 1x, ${heroWoman2x} 2x`}
              alt="moisture"
              className="relative z-20 h-full"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
