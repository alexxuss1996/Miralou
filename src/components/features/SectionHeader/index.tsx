import { Button } from '@/components/shared/Button';
import { Link } from 'react-router-dom';

type HeaderGroup = {
  heading: string;
  paragraphText?: string;
};

const SectionHeader = ({ heading, paragraphText }: HeaderGroup) => {
  return (
    <div className="my-5 block items-center px-2 md:px-0 lg:flex lg:justify-between">
      <div className="self-start">
        <h2 className="text-3xl font-semibold">{heading}</h2>
        <p className="max-w-xl py-2 text-base">{paragraphText}</p>
      </div>
      <Link
        to={'/shop'}
        className="bg-transition mb-4 w-full self-end border-[2px] border-accent py-2 px-11 text-base font-semibold uppercase text-black hover:border-accent hover:bg-accent hover:text-white md:w-auto"
      >
        See All
      </Link>
    </div>
  );
};

export default SectionHeader;
