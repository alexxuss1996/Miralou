import AboutImg from '../../assets/images/common/woman-about.jpg';
import AboutImg2x from '../../assets/images/common/woman-about@2x.jpg';

const About = () => {
  return (
    <section className="py-16 md:h-[500px]">
      <div className="container flex w-full flex-col md:flex-row">
        <div className="order-2 mr-5 md:order-none md:w-5/12">
          <img
            src={AboutImg}
            srcSet={`${AboutImg} 1x, ${AboutImg2x} 2x`}
            alt="about"
            className="relative z-20 max-h-full w-full translate-y-0"
          />
        </div>
        <div className="flex flex-col justify-center pb-5 md:w-7/12">
          <h2 className="mb-8 font-body text-3xl font-semibold md:ml-20">About Mirolau</h2>
          <p className="mb-8 text-base font-light md:ml-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus rem,
            hic vel rerum iure sunt et facilis nostrum veniam optio veritatis id, velit quae eos
            assumenda debitis nam excepturi blanditiis molestiae odit aut. Adipisci provident
            voluptates blanditiis magnam incidunt quisquam natus consequatur! Laboriosam, quisquam
            voluptate quidem quaerat rerum nobis?
          </p>
          <a
            href="/about"
            className="relative self-start font-body text-sm font-semibold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-accent after:transition-all after:duration-700 after:ease-in-out after:hover:w-1 md:ml-20"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
