import Avon from '@/assets/images/partners/Avon.svg';
import Oriflame from '@/assets/images/partners/Oriflame.svg';
import Chanel from '@/assets/images/partners/Chanel.svg';
import Nyx from '@/assets/images/partners/Nyx.svg';
import MaryKay from '@/assets/images/partners/MaryKay.svg';

const Partners = () => {
  return (
    <section className="min-h-[200px] py-5">
      <div className="container flex flex-col flex-wrap items-center justify-between md:flex-row">
        <div className=" flex w-full  md:w-1/5">
          <img
            src={Avon}
            alt="Avon"
            className=" mx-auto h-auto max-w-[150px] p-3 lg:max-w-[168px]"
          />
        </div>
        <div className=" flex w-full  md:w-1/5">
          <img
            src={Chanel}
            alt="Chanel"
            className=" mx-auto h-auto max-w-[150px] p-3 lg:max-w-[181px]"
          />
        </div>
        <div className=" flex w-full  md:w-1/5">
          <img
            src={MaryKay}
            alt="MaryKay"
            className=" mx-auto h-auto max-w-[150px] p-3 lg:max-w-[146px]"
          />
        </div>
        <div className=" flex w-full  md:w-1/5">
          <img
            src={Oriflame}
            alt="Oriflame"
            className=" mx-auto h-auto max-w-[150px] p-3 lg:max-w-[180px]"
          />
        </div>
        <div className=" flex w-full  md:w-1/5">
          <img src={Nyx} alt="Nyx" className=" mx-auto h-auto max-w-[150px] p-3 lg:max-w-[200px]" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
