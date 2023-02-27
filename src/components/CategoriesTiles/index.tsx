import bodyOil from '@/assets/images/categories/body-oil.jpg';
import men from '@/assets/images/categories/men.jpg';
import eczema from '@/assets/images/categories/eczema.jpg';
import cream from '@/assets/images/categories/cream.jpg';

const CategoriesTiles = () => {
  return (
    <ul className="grid h-[424px] w-full grid-cols-1 grid-rows-4 gap-5 md:grid-cols-4 md:grid-rows-2">
      <li className="group relative row-auto flex items-center justify-center after:absolute after:inset-0 after:z-20 after:h-full after:w-full after:bg-black-alt/0 after:duration-300 after:ease-in-out after:content-[''] hover:after:bg-black-alt/20 md:col-span-2 md:row-span-2">
        <img src={men} className="h-full w-full object-cover" alt="Men" />
        <button className="absolute z-30 inline-block bg-accent px-10 py-2 font-body text-sm font-light uppercase text-white opacity-0 delay-75 duration-300 ease-in-out group-hover:opacity-100">
          For Men
        </button>
      </li>
      <li className="group relative flex items-center justify-center after:absolute after:inset-0 after:z-20 after:h-full after:w-full after:bg-black-alt/0 after:duration-300 after:ease-in-out after:content-[''] hover:after:bg-black-alt/20">
        <img src={bodyOil} className="h-full w-full object-cover" alt="Women" />
        <button className="absolute z-30 inline-block bg-accent px-10 py-2 font-body text-sm font-light uppercase text-white opacity-0 delay-75 duration-300 ease-in-out group-hover:opacity-100">
          For Men
        </button>
      </li>
      <li className="group relative flex items-center justify-center after:absolute after:inset-0 after:z-20 after:h-full after:w-full after:bg-black-alt/0 after:duration-300 after:ease-in-out after:content-[''] hover:after:bg-black-alt/20 md:col-span-1 md:row-span-1">
        <img src={cream} className="h-full w-full object-cover" alt="Kids" />
        <button className="absolute z-30 inline-block bg-accent px-10 py-2 font-body text-sm font-light uppercase text-white opacity-0 delay-75 duration-300 ease-in-out group-hover:opacity-100">
          For Men
        </button>
      </li>
      <li className="group relative flex items-center justify-center after:absolute after:inset-0 after:z-20 after:h-full after:w-full after:bg-black-alt/0 after:duration-300 after:ease-in-out after:content-[''] hover:after:bg-black-alt/20 md:col-span-2 md:row-span-1">
        <img src={eczema} className="h-full w-full object-cover" alt="Healthcare" />
        <button className="absolute z-30 inline-block bg-accent px-10 py-2 font-body text-sm font-light uppercase text-white opacity-0 delay-75 duration-300 ease-in-out group-hover:opacity-100">
          For Men
        </button>
      </li>
    </ul>
  );
};

export default CategoriesTiles;
