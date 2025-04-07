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
      className="w-10 md:w-14 h-10 md:h-14 border-2 md:border-3 border-solid border-black rounded-full flex justify-center items-center cursor-pointer transition-[opacity] ease-in-out duration-300 disabled:opacity-30 hover:opacity-80"
      type="button"
      {...restProps}
    >
      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.20492 1.41L6.79492 0L0.794922 6L6.79492 12L8.20492 10.59L3.62492 6L8.20492 1.41Z"
          fill="#000000"
        />
      </svg>
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="w-10 md:w-14 h-10 md:h-14 border-2 md:border-3 border-solid border-black rounded-full flex justify-center items-center cursor-pointer transition-[opacity] ease-in-out duration-300 disabled:opacity-30 hover:opacity-80"
      type="button"
      {...restProps}
    >
      <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.698609 11.5108L2.07849 12.9503L8.20398 7.07849L2.33215 0.953001L0.892658 2.33288L5.37461 7.01867L0.698609 11.5108Z"
          fill="#000000"
        />
      </svg>
    </button>
  );
};
