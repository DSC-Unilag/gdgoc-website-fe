import { useState, useMemo } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { Event } from './programs-type';
import ProgramsData from './programs.json';
import ProgramsStyles from './programs.module.css';
import ProgramsCarousel from './programs-carousel';

const OPTIONS: EmblaOptionsType = { loop: true };

function Programs() {
  const [ProgramsSlides, _] = useState<Event[]>(ProgramsData);

  const [showPast, setShowPast] = useState<boolean>(false);

  const now = useMemo(() => new Date().toISOString(), []);

  const filteredPrograms = useMemo(() => {
    if (showPast) return ProgramsSlides.filter((program) => program.dateTime < now);

    return ProgramsSlides.filter((program) => program.dateTime >= now);
  }, [ProgramsSlides, showPast, now]);

  const isMidScreen = useMediaQuery('(min-width: 640px)');

  return (
    <section className="pt-[67px] pb-16 md:pt-[143px] md:pb-[44px] flex flex-col md:gap-y-8 text-[#49454F]">
      {isMidScreen ? (
        <h2
          className={`p_cont_auto text-center font-medium ${ProgramsStyles.programs_title} text-black-02 flex justify-center items-center gap-x-[2.991%]`}
        >
          <button
            className={`transition-[color] ease-in-out duration-300 ${showPast ? 'text-[#7E8286]' : 'text-black'}`}
            onClick={() => {
              setShowPast(false);
            }}
          >
            Upcoming Program
            <hr
              className={`mx-auto mt-3 w-11/12 rounded-full transition-[border] ease-in-out duration-300 ${showPast ? 'border-0 border-transparent' : 'border-6 border-black'}`}
            />
          </button>
          <button
            className={`transition-[color] ease-in-out duration-300 ${!showPast ? 'text-[#7E8286]' : 'text-black'}`}
            onClick={() => {
              setShowPast(true);
            }}
          >
            Past Program
            <hr
              className={`mx-auto mt-3 w-11/12 rounded-full transition-[border] ease-in-out duration-300 ${!showPast ? 'border-0 border-transparent' : 'border-6 border-black'}`}
            />
          </button>
        </h2>
      ) : (
        <h2 className={`mx-auto font-bold text-black-02 ${ProgramsStyles.programs_title}`}>
          Upcoming Events
        </h2>
      )}
      <ProgramsCarousel slides={filteredPrograms} options={OPTIONS} />
    </section>
  );
}

export default Programs;
