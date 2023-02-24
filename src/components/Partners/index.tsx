import Avon from '../../assets/images/partners/Avon.svg';
import Oriflame from '../../assets/images/partners/Oriflame.svg';
import Chanel from '../../assets/images/partners/Chanel.svg';
import Nyx from '../../assets/images/partners/Nyx.svg';
import MaryKay from '../../assets/images/partners/MaryKay.svg';

const Partners = () => {
  return (
    <section className="py-5 min-h-[200px]">
      <div className="container flex md:flex-row flex-col items-center justify-between flex-wrap">
        <div className=" w-full md:w-1/5  flex">
          <img
            src={Avon}
            alt="Avon"
            className=" p-3 max-w-[150px] lg:max-w-[168px] mx-auto h-auto"
          />
        </div>
        <div className=" w-full md:w-1/5  flex">
          <img
            src={Chanel}
            alt="Chanel"
            className=" p-3 max-w-[150px] lg:max-w-[181px] mx-auto h-auto"
          />
        </div>
        <div className=" w-full md:w-1/5  flex">
          <img
            src={MaryKay}
            alt="MaryKay"
            className=" p-3 max-w-[150px] lg:max-w-[146px] mx-auto h-auto"
          />
        </div>
        <div className=" w-full md:w-1/5  flex">
          <img
            src={Oriflame}
            alt="Oriflame"
            className=" p-3 max-w-[150px] lg:max-w-[180px] mx-auto h-auto"
          />
        </div>
        <div className=" w-full md:w-1/5  flex">
          <img src={Nyx} alt="Nyx" className=" p-3 max-w-[150px] lg:max-w-[200px] mx-auto h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
