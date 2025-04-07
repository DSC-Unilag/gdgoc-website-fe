import { useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { TestimonialSlides } from './testimonial-types';
import TestimonialSlidesData from './testimonial.json';
import TestimonialStyles from './testimonial.module.css';
import TestimonialCarousel from './testimonial-carousel';
import TestimonialFloatingAsset from '../../../assets/home/testimonial-floating-asset.png';

const OPTIONS: EmblaOptionsType = { loop: true, dragFree: false };

function Testimonial() {
  const [TestimonialCarouselSlides, _] = useState<TestimonialSlides[]>(TestimonialSlidesData);

  return (
    <section className={`relative w-full py-10 md:pt-[69px] md:pb-[45.12px] bg-[#0D0D0D]`}>
      <div className="w-full flex flex-col gap-y-8 text-off-white">
        <img
          className={`absolute hidden top-0 -translate-y-10/12 right-0 md:block z-40 max-w-[145.01px] w-[10.07dvw] h-auto ${TestimonialStyles.floating_asset__one}`}
          src={TestimonialFloatingAsset}
          alt=""
        />
        <h2 className={`p_cont_auto text-center font-bold ${TestimonialStyles.testimonial_title}`}>
          Testimonials
        </h2>
        <TestimonialCarousel slides={TestimonialCarouselSlides} options={OPTIONS} />
        <img
          className={`absolute hidden bottom-1 left-0 md:block z-10 max-w-[145.01px] w-[10.07dvw] h-auto rotate-180 ${TestimonialStyles.floating_asset__two}`}
          src={TestimonialFloatingAsset}
          alt=""
        />
      </div>
    </section>
  );
}

export default Testimonial;
