import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { EmblaOptionsType } from 'embla-carousel';
import MOTSlidesData from './team-leads.json';
import MOTStyles from './meet-our-team.module.css';
import MOTFloatingAsset from '../../../assets/home/mot-floating-asset.png';
import MOTCarousel from './mot-carousel';
import { MOTSlides } from './mot-types';

const OPTIONS: EmblaOptionsType = { loop: true };

function MeetOurTeam() {
  const [MOTSlides, _] = useState<MOTSlides[]>(MOTSlidesData);
  return (
    <section className="relative py-[60px] md:pt-[143px] md:pb-[196px]">
      <img
        className="absolute top-1.5 md:-top-[31px] right-0 z-10 max-w-[135.01px] w-[14.133dvw] md:w-[9.375dvw] h-auto"
        src={MOTFloatingAsset}
        alt=""
      />
      <h2
        className={`px-[5.3333%] md:px-[6.9444%] font-bold text-black-02 text-center ${MOTStyles.mot_title}`}
      >
        Meet Our Team
      </h2>
      <MOTCarousel slides={MOTSlides} options={OPTIONS} />
      <div className="relative w-full px-[5.3333%] md:px-[6.9444%]">
        <Link
          className="mx-auto max-w-[335px] md:max-w-[459px] w-full py-3 md:py-6 bg-black-02 flex justify-center items-center gap-x-[4.77%] md:gap-x-[11.98%] rounded-[25px] md:rounded-[38.25px] transition-[opacity] ease-in-out duration-300 hover:opacity-70"
          to="/teams"
        >
          <span className="font-medium text-white text-base md:text-[1.9125rem] leading-none">
            View all Teams
          </span>
          <svg
            className="w-5 h-5 md:w-[36.72px] md:h-[36.72px]"
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
              stroke-width="3.06"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>

        <img
          className="absolute -bottom-[86px] md:bottom-auto md:top-0 left-0 z-10 max-w-[141.25px] w-[14.133dvw] md:w-[9.809dvw] h-auto rotate-180"
          src={MOTFloatingAsset}
          alt=""
        />
      </div>
    </section>
  );
}

export default MeetOurTeam;
