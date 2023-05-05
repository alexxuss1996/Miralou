import SectionHeading from '@/components/shared/SectionHeading';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '@/store/services/api/productsApi';
import SwiperProductGallery from '@/components/modules/SwiperProductGallery';
const ProductPage = () => {
  const { productId } = useParams();
  const { data: product } = useGetProductQuery(productId!);
  return (
    <section className="py-10">
      <div className="container">
        {product ? (
          <>
            <SectionHeading text={`${product.name}`} />
            <div className="flex">
              <div className="w-7/12">
                <SwiperProductGallery images={product.images} />
              </div>
              <div className="w-5/12">info</div>
            </div>
          </>
        ) : (
          <p>Oops, something went wrong...</p>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
