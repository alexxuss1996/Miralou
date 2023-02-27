import Image1 from '@/assets/images/instagram/1.png';
import Image2 from '@/assets/images/instagram/2.png';
import Image3 from '@/assets/images/instagram/3.png';
import Image4 from '@/assets/images/instagram/4.png';
import Image5 from '@/assets/images/instagram/5.png';

const Socials = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-baseline justify-between">
          <h2 className="mb-6 text-3xl font-semibold">Follow us on Instagram</h2>
          <a className="text-2xl font-light text-accent" href="https://instagram.com/miralou">
            @miralou
          </a>
        </div>
        <div className="flex flex-wrap gap-5">
          <img src={Image1} alt="Image" />
          <img src={Image2} alt="Image" />
          <img src={Image3} alt="Image" />
          <img src={Image4} alt="Image" />
          <img src={Image5} alt="Image" />
        </div>
      </div>
    </section>
  );
};

export default Socials;
