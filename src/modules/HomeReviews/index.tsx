import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperType, EffectFlip, Navigation, Controller, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

import review1img from '@/assets/images/reviews/1.jpg';
import review2img from '@/assets/images/reviews/2.jpg';
import review3img from '@/assets/images/reviews/3.jpg';
import QuoteIcon from '@/shared/QuoteIcon';

const HomeReviews = () => {
  let homeQuoteSliderRef = useRef<SwiperType | null>(null);
  let homeImgSliderRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Refs
    const homeQuoteSlider = homeQuoteSliderRef?.current;
    const homeImgSlider = homeImgSliderRef?.current;

    if (homeQuoteSlider?.controller && homeImgSlider?.controller) {
      homeImgSlider.controller.control = homeQuoteSlider;
      homeQuoteSlider.controller.control = homeImgSlider;
    }
    // navigation controls
    document.documentElement.style.setProperty('--swiper-theme-color', 'rgba(0, 0, 0, 0.4)');
    document.documentElement.style.setProperty('--swiper-navigation-size', '35px');

    return () => {
      //reset
      document.documentElement.style.setProperty('--swiper-theme-color', '#007aff');
      document.documentElement.style.setProperty('--swiper-navigation-size', '44px');

      if (homeQuoteSlider) {
        homeQuoteSlider.destroy(true, true);
        homeQuoteSliderRef.current = null;
      }
      if (homeImgSlider) {
        homeImgSlider.destroy(true, true);
        homeImgSliderRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative py-4">
      <div className="container flex flex-col flex-wrap md:flex-row">
        <div className={'w-full space-x-5 pb-3 md:h-[356px] md:w-7/12'}>
          <Swiper
            modules={[Navigation, Controller, EffectFlip, A11y]}
            speed={1000}
            effect="flip"
            autoplay={true}
            slidesPerView={1}
            className="h-full"
            loop={true}
            navigation
            tag="section"
            onSwiper={(swiper) => {
              homeQuoteSliderRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <div className="flex w-full flex-col items-center justify-center md:h-[300px]">
                <QuoteIcon />
                <p className="px-12 text-center text-2xl font-medium leading-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere similique beatae
                  sint et cupiditate repellat!
                </p>
                <h2 className="mt-8 font-sans text-base font-bold">Kristy Hoffer</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full flex-col items-center justify-center md:h-[300px]">
                <QuoteIcon />
                <p className="px-12 text-center text-2xl font-medium leading-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere similique beatae
                  sint et cupiditate repellat!
                </p>
                <h2 className="mt-8 font-sans text-base font-bold">Tiffany Allen</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full flex-col items-center justify-center md:h-[300px]">
                <QuoteIcon />
                <p className="px-12 text-center text-2xl font-medium leading-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere similique beatae
                  sint et cupiditate repellat!
                </p>
                <h2 className="mt-8 font-sans text-base font-bold">Noelle Morris</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="top-[-72px] right-0 w-full md:relative md:h-[380px] md:w-5/12">
          <Swiper
            modules={[Controller, A11y]}
            speed={300}
            loop={true}
            onSwiper={(swiper) => {
              homeImgSliderRef.current = swiper;
            }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img className="w-full" src={review1img} alt="review 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={review2img} alt="review 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={review3img} alt="review 3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
