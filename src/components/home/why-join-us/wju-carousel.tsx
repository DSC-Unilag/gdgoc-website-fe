import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { Slides } from './wju-types';
import WJUStyles from './why-join-us.module.css';
import { PrevButton, NextButton, usePrevNextButtons } from './wju-controls';

type PropType = {
  slides: Slides[];
  options?: EmblaOptionsType;
};

const WhyJoinUsCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const isDesktop = useMediaQuery('(min-width: 640px)');

  return (
    <div className={`${WJUStyles.wju_container}`}>
      {isDesktop ? (
        <div>
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex items-stretch touch-pan-y touch-pinch-zoom">
              {slides.map((slide) => (
                <div
                  className="transform-gpu translate-y-0 translate-x-0 translate-z-0 min-w-0 grow-0 shrink-0 basis-[500px] ml-6 nth-1:bg-[#4285f4] nth-2:bg-[#EA4335] nth-3:bg-[#0F9D58] nth-4:bg-[#FBBC04] px-[55px] py-[123px] rounded-[20px] flex flex-col gap-y-3 justify-center"
                  key={slide.id}
                >
                  <h3 className="font-bold">{slide.title}</h3>
                  <p className="leading-normal">{slide.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full mt-8 px-[5.3333%] md:px-[6.9444%] flex justify-center gap-x-6">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      ) : (
        <div className={`px-[5.3333%] flex flex-col gap-y-6 ${WJUStyles.wju_slides}`}>
          {slides.map((slide) => (
            <div
              className="nth-1:bg-[#4285f4] nth-2:bg-[#EA4335] nth-3:bg-[#0F9D58] nth-4:bg-[#FBBC04] p-6 rounded-[20px]"
              key={slide.id}
            >
              <h3 className="font-bold mb-5">{slide.title}</h3>
              <p className="leading-[1.5]">{slide.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WhyJoinUsCarousel;
