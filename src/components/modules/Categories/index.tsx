import CategoriesTiles from '@/components/features/CategoriesTiles';
import SectionHeader from '@/components/features/SectionHeader';

type CategoriesType = {
  hasHead?: boolean;
};
const Categories = ({ hasHead }: CategoriesType) => {
  return (
    <section className="py-6">
      <div className="container">
        {hasHead && (
          <SectionHeader
            heading="Shop by Categories"
            paragraphText="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et."
          />
        )}
        <CategoriesTiles />
      </div>
    </section>
  );
};

export default Categories;
