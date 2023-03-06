import AboutUsImg from '@/assets/images/common/about-woman.jpg';
import AboutUsImg2x from '@/assets/images/common/about-woman@2x.jpg';
import { Button } from '@/shared/Button';

const AboutHero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h1 className="mb-8 text-center text-2xl font-semibold md:mb-24 md:text-4xl lg:text-6xl">
          About Us
        </h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col md:w-7/12">
            <h2 className="mb-8 text-xl font-semibold md:text-2xl lg:text-4xl">
              Hello.
              <br className="hidden md:inline" /> We Miralou
            </h2>
            <p className="mb-6 font-light">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
              at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
              Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu
              eros, eget tempus orci facilisis id.
            </p>
            <Button className="inline-block self-start bg-accent py-3 px-10 text-sm font-light uppercase text-white md:px-10">
              Read More
            </Button>
          </div>
          <div className="hidden self-center md:block md:w-5/12">
            <img
              src={AboutUsImg}
              srcSet={`${AboutUsImg} 1x, ${AboutUsImg2x} 2x`}
              alt="About Us"
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
