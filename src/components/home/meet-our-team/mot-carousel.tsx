import React, { useCallback, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useEmblaCarousel from 'embla-carousel-react';
import { MOTSlides } from './mot-types';
import MOTStyles from './meet-our-team.module.css';

type PropType = {
  slides: MOTSlides[];
  options?: EmblaOptionsType;
};

const MOTCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [span, setSpan] = useState(0);
  // keyboard gesture - left and right arrow button click
  const keyHandler = useCallback(
    (e: KeyboardEvent) => {
      if (!emblaApi) return;
      if (e.key === 'ArrowLeft') {
        emblaApi.scrollPrev();
      } else if (e.key === 'ArrowRight') {
        emblaApi.scrollNext();
      }
    },
    [emblaApi]
  );
  // mouse gesture - swipe horizontally
  const swipeHandler = useCallback(
    (e: WheelEvent) => {
      if (!emblaApi) return;

      // track only horizontal wheel event
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        return;
      }

      // reduce the span if you swipe to the right, increase the span if you swipe to the left
      if (e.deltaX > 0) {
        setSpan((num) => num - 1);
      } else {
        setSpan((num) => num + 1);
      }

      if (Math.abs(span) < 10) return;

      if (span > 0) {
        emblaApi.scrollPrev();
      } else if (span < 0) {
        emblaApi.scrollNext();
      }

      setSpan(0);
    },
    [emblaApi, span]
  );
  // tracks the keyboard handler
  useEffect(() => {
    window.addEventListener('keydown', keyHandler);

    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, [keyHandler]);
  // tracks the mouse swipe handler
  useEffect(() => {
    if (!emblaApi) return;

    const containerNode = emblaApi.containerNode();
    if (!containerNode) return;

    containerNode.addEventListener('wheel', swipeHandler);

    return () => {
      containerNode.removeEventListener('wheel', swipeHandler);
    };
  }, [emblaApi, swipeHandler]);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className={`pt-8 pb-10 mb:pt-6 mb:pb-[13px]`}>
      <div>
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex items-stretch touch-pan-y touch-pinch-zoom">
            {slides.map((slide) => (
              <div
                className={`transform-gpu translate-y-0 translate-x-0 translate-z-0 min-w-0 grow-0 shrink-0 basis-[229.35px] md:basis-[460.02px] ml-[8.53%] md:ml-[4.93%] flex flex-col gap-y-5 md:gap-y-[42px] justify-center ${MOTStyles.mot_slide}`}
                key={slide.id}
              >
                <figure
                  className={`mr-[9.35px] md:mr-[11.22px] w-[220px] h-[220px] md:w-[448.8px] md:h-[448.8px] overflow-hidden rounded-bl-[45px] rounded-tr-[45px]`}
                >
                  <img
                    className="w-full object-cover object-center"
                    src={slide.pfp}
                    alt={`${slide.name} headshot.`}
                  />
                </figure>
                <div className="flex justify-between gap-x-5">
                  <div className="text-black-02">
                    <h3 className="text-[1.125rem] md:text-3xl font-bold mb-1.5 md:mb-0.5">
                      {!isDesktop && slide.smName ? slide.smName : slide.name}
                    </h3>
                    <h4 className="md:opacity-70 text-[0.875rem] md:text-2xl leading-normal">
                      {slide.post}
                    </h4>
                  </div>
                  <div
                    className={`w-5 h-5 md:w-14 md:h-14 flex justify-center items-center rounded-full transition-[opacity] ease-in-out duration-300 hover:opacity-80 ${MOTStyles.lead_social}`}
                  >
                    <a
                      className="font-bold text-[12px] mt-0.5 md:mt-0 md:text-3xl leading-none align-middle text-white"
                      href={slide.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      in
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOTCarousel;
