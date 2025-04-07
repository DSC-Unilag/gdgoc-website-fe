import React, { useCallback, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { TestimonialSlides } from './testimonial-types';
import TestimonialStyles from './testimonial.module.css';
import { PrevButton, NextButton, usePrevNextButtons } from './testimonial-controls';

type PropType = {
  slides: TestimonialSlides[];
  options?: EmblaOptionsType;
};

const TestimonialCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect); // Track active slide
    onSelect(); // Set initial active slide
  }, [emblaApi, onSelect]);
  return (
    <div className={`${TestimonialStyles.wju_container}`}>
      <div>
        <div className="h-[490px] sm:h-[600px] w-full overflow-hidden" ref={emblaRef}>
          <div className="h-full flex items-center touch-pan-y touch-pinch-zoom">
            {slides.map((testimonial, index) => (
              <div
                className={`translate_3d_0 min-w-0 grow-0 shrink-0 ml-5 md:ml-[4.51%] bg-black flex flex-col justify-between rounded-[8px] overflow-hidden transition-[width,opacity] ease-in-out delay-100 duration-100 ${selectedIndex === index ? 'w-[285px] sm:w-[391px]' : 'w-[185px] sm:w-[297px] opacity-50'}`}
                key={testimonial.id}
              >
                <img src={testimonial.pfp} alt={testimonial.name} />
                <div className="px-4 md:px-6 py-5 md:py-6 text-center">
                  <p className={`text-sm sm:text-base leading-normal`}>{testimonial.body}</p>
                  <hr className="mx-auto my-3 md:my-5 w-8/12 sm:w-7/12 border border-white opacity-40" />
                  <h3 className="mb-0.5 md:mb-2 font-bold text-sm sm:text-base">
                    {testimonial.name}
                  </h3>
                  <h4 className="text-[11px] sm:text-[12px]">{testimonial.position}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-[27px] md:mt-[77.8px] p_cont_auto flex justify-center gap-x-4 md:gap-x-6">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
