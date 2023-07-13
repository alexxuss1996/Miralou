import { ProductResponseType } from '@/store/services/api/miralouApi';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

type ProductTabsProps = Pick<ProductResponseType, 'reviews' | 'description'>;

const ProductTabs = ({ reviews, description }: ProductTabsProps) => {
  return (
    <Tabs>
      <TabList className="mb-8 flex flex-row gap-4 border-b border-gray py-3">
        <Tab className="cursor-pointer text-xl" selectedClassName="text-accent">
          Description
        </Tab>
        <Tab className="cursor-pointer text-xl" selectedClassName="text-accent">
          Reviews
        </Tab>
      </TabList>

      <TabPanel className="flex flex-col gap-3">
        <p>{description}</p>
        <p>{description}</p>
        <p>{description}</p>
        <p>{description}</p>
        <p>{description}</p>
      </TabPanel>
      <TabPanel className="flex flex-col gap-8">
        {reviews?.map((review) => (
          <div
            key={review.id}
            className="flex flex-col items-center gap-2 bg-primary py-8 text-secondary md:h-72 md:flex-row md:items-stretch md:p-0 lg:h-60"
          >
            {review.personal_avatar ? (
              <img
                src={review.personal_avatar}
                alt={review.name}
                className="w-52 object-cover lg:max-h-full"
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                alt="Avatar Placeholder"
                className="w-52 object-cover lg:max-h-full"
              />
            )}
            <div className="px-8 py-5 text-center font-light">
              <h2 className="my-2 text-xl">{review.name}</h2>
              <p className="text-left text-[15px] leading-8">{review.comment}</p>
            </div>
          </div>
        ))}
      </TabPanel>
    </Tabs>
  );
};

export default ProductTabs;
