import CategoriesTiles from '@/components/CategoriesTiles';
import SectionHeader from '@/shared/SectionHeader';

const Categories = () => {
  return (
    <section className="py-6">
      <div className="container">
        <SectionHeader
          heading="Shop by Categories"
          paragraphText="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et."
        />
        <CategoriesTiles />
      </div>
    </section>
  );
};

export default Categories;
