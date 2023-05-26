import SectionHeading from '@/components/shared/SectionHeading';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '@/store/services/api/productsApi';
import SwiperProductGallery from '@/components/modules/SwiperProductGallery';
const ProductPage = () => {
  const { productId } = useParams();
  const { data: product, isError } = useGetProductQuery(productId!);

  return (
    <section className="py-10">
      <div className="container">
        {product ? (
          <>
            <SectionHeading text={`${product.name}`} />
            <div className="flex flex-col xl:flex-row">
              <div className="xl:w-7/12">
                <SwiperProductGallery images={product.images} />
              </div>
              <div className="xl:w-5/12">info</div>
            </div>
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
