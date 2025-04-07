import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<'button'>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="w-10 md:w-14 h-10 md:h-14 border-2 md:border-3 border-solid border-white rounded-full flex justify-center items-center cursor-pointer transition-[opacity] ease-in-out duration-300 disabled:opacity-30 hover:opacity-80"
      type="button"
      {...restProps}
    >
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.70492 2.28793L6.29492 0.87793L0.294922 6.87793L6.29492 12.8779L7.70492 11.4679L3.12492 6.87793L7.70492 2.28793Z"
          fill="#F1F3F4"
        />
      </svg>
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="w-10 md:w-14 h-10 md:h-14 border-2 md:border-3 border-solid border-white rounded-full flex justify-center items-center cursor-pointer transition-[opacity] ease-in-out duration-300 disabled:opacity-30 hover:opacity-80"
      type="button"
      {...restProps}
    >
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.198609 11.3888L1.57849 12.8282L7.70398 6.95642L1.83215 0.83093L0.392658 2.21081L4.87461 6.8966L0.198609 11.3888Z"
          fill="#F1F3F4"
        />
      </svg>
    </button>
  );
};
