import SectionHeading from '@/components/shared/SectionHeading';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '@/store/services/api/miralouApi';
import SwiperProductGallery from '@/components/modules/SwiperProductGallery';
import ProductInfo from '@/components/modules/ProductInfo';
import ProductTabs from '@/components/modules/ProductTabs';
import SimilarProducts from '@/components/modules/SimilarProducts';

const ProductPage = () => {
  const { productId } = useParams();
  const { data: product, isError } = useGetProductQuery(productId!);

  return (
    <section className="py-10">
      <div className="container">
        {product ? (
          <>
            <SectionHeading text={product.name} />
            <div className="mb-8 flex flex-col xl:flex-row">
              <div className="xl:w-7/12">
                <SwiperProductGallery images={product.images} />
              </div>
              <div className="px-4 xl:w-5/12 xl:px-0">
                <ProductInfo
                  code={product.code}
                  name={product.name}
                  productImgUrl={product.image_thumb_url}
                  category={product.category}
                  price={product.price}
                  id={product.id}
                  popularity={product.popularity}
                  reviews={product.reviews}
                  description={product.description}
                  rating={product.rating}
                  discountPercent={product.discount_percent}
                  tags={product.tags}
                />
              </div>
            </div>
            <ProductTabs description={product.description} reviews={product.reviews} />
            <SimilarProducts category={product.category} id={product.id} />
          </>
        ) : (
          <p>Loading...</p>
        )}
        {isError && <p>Something went wrong...</p>}
      </div>
    </section>
  );
};

export default ProductPage;
