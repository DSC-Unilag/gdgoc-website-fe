import React from 'react';
import { Link } from '@tanstack/react-router';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { Event } from './programs-type';
import ProgramsStyles from './programs.module.css';
import { PrevButton, NextButton, usePrevNextButtons } from './programs-controls';

type PropType = {
  slides: Event[];
  options?: EmblaOptionsType;
};

const ProgramsCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const isDesktop = useMediaQuery('(min-width: 640px)');

  return (
    <div className={`mt-8`}>
      {isDesktop ? (
        <div>
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex items-center touch-pan-y touch-pinch-zoom">
              {slides.map((program) => (
                <div
                  className={`${ProgramsStyles.programs_slide} translate_3d_0 min-w-0 grow-0 shrink-0 w-[400px] ml-6 rounded-[20px] overflow-hidden`}
                  key={program.id}
                >
                  <figure className="w-full bg-[#cdcdcd] h-[266.09px]">
                    <img
                      className="hidden w-full h-full object-cover object-center"
                      src={program.banner}
                      alt={program.title}
                    />
                  </figure>
                  <div className="w-full bg-white p-4 leading-[20px]">
                    <div className="mb-[13px] flex justify-between items-start gap-x-8">
                      <div className="">
                        <h3 className="mb-[5px] text-[#1D1B20] font-bold text-base leading-[24px]">
                          {program.title}
                        </h3>
                        <p className="text-sm">{program.description}</p>
                      </div>
                      <span
                        className={`${ProgramsStyles.event_level} py-3 px-4 rounded-full text-sm`}
                      >
                        {program.level}
                      </span>
                    </div>
                    <ul className="w-full flex flex-col gap-y-[3px] text-[12px]">
                      <li>
                        <span>Date: </span>
                        <span>{program.date}</span>
                      </li>
                      <li>
                        <span>Time: </span>
                        <span>{program.time}</span>
                      </li>
                      <li>
                        <span>Venue: </span>
                        <span>{program.venue}</span>
                      </li>
                      <li>
                        <span>Speaker: </span>
                        <span>{program.speaker}</span>
                      </li>
                    </ul>
                    <div className="w-full flex justify-end">
                      <a
                        className={`${ProgramsStyles.rsvp_btn} w-[104px] h-[45px] flex justify-center items-center rounded-full font-bold text-sm leading-none`}
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        RSVP
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 w-full p_cont_auto flex justify-center gap-x-6">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      ) : (
        <div className={`p_cont_auto flex flex-col items-center gap-y-8`}>
          {slides.map((program, index) => {
            if (index < 5) {
              return (
                <div
                  className={`${ProgramsStyles.programs_slide} max-w-[400px] w-full rounded-[20px] overflow-hidden`}
                  key={program.id}
                >
                  <figure className="w-full bg-[#cdcdcd] h-[217px]">
                    <img
                      className="hidden w-full h-full object-cover object-center"
                      src={program.banner}
                      alt={program.title}
                    />
                  </figure>
                  <div className="w-full bg-white p-4 leading-[20px]">
                    <h3 className="text-[#1D1B20] font-bold text-base leading-[24px]">
                      {program.title}
                    </h3>
                    <p className="mt-1 text-sm">{program.description}</p>
                    <ul className="my-4 w-full flex flex-col gap-y-0.5 text-[12px]">
                      <li>
                        <span>Date: </span>
                        <span>{program.date}</span>
                      </li>
                      <li>
                        <span>Time: </span>
                        <span>{program.time}</span>
                      </li>
                      <li>
                        <span>Venue: </span>
                        <span>{program.venue}</span>
                      </li>
                      <li>
                        <span>Speaker: </span>
                        <span>{program.speaker}</span>
                      </li>
                    </ul>
                    <div className="w-full flex justify-between">
                      <span
                        className={`${ProgramsStyles.event_level} px-4 h-[37px] rounded-full text-[12px] leading-[37px] text-center`}
                      >
                        {program.level}
                      </span>

                      <a
                        className={`${ProgramsStyles.rsvp_btn} w-[85px] h-[37px] rounded-full font-bold text-[12px] leading-[37px] text-center`}
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        RSVP
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <Link
            className="max-w-[335px] w-full py-3 md:py-6 bg-black-02 flex justify-center items-center gap-x-[4.77%] rounded-[25px] btn_cta"
            to="/events"
          >
            <span className="font-medium text-white text-base leading-none">View all Events</span>
            <svg
              className="w-5 h-5"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19.0402" cy="18.9801" r="18.36" fill="white" />
              <path
                d="M27.71 18.9801L20.06 26.6301L27.71 18.9801ZM27.71 18.9801L20.06 11.3301L27.71 18.9801ZM27.71 18.9801L9.85996 18.9801L27.71 18.9801Z"
                fill="white"
              />
              <path
                d="M27.71 18.9801L20.06 26.6301M27.71 18.9801L20.06 11.3301M27.71 18.9801L9.85996 18.9801"
                stroke="#1E1E1E"
                strokeWidth="3.06"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProgramsCarousel;
