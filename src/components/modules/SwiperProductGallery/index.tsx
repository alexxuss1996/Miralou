import { useLayoutEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SwiperClass from 'swiper/types/swiper-class';
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from 'swiper';

type ProductGalleryType = {
  images: string[];
};

const SwiperProductGallery = ({ images }: ProductGalleryType) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
  const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
  const swiper1Ref = useRef<SwiperClass | null>(null);
  const swiper2Ref = useRef();

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  return (
    <div className="product-slider flex h-[600px] w-[660px] flex-row-reverse overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          if (swiper1Ref.current !== null) {
            swiper1Ref.current = swiper;
          }
        }}
        preloadImages={false}
        loop
        controller={{ control: secondSwiper }}
        spaceBetween={24}
        slidesPerView={1}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="h-full w-[480px]"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        controller={{ control: firstSwiper }}
        loop
        spaceBetween={24}
        slidesPerView={3}
        watchSlidesProgress
        grabCursor
        direction="vertical"
        touchRatio={0.2}
        preloadImages={false}
        slideToClickedSlide
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs, Controller]}
        className="slider-thumbs h-full"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide className="h-[135px] w-[140px] cursor-pointer" key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SwiperProductGallery;
