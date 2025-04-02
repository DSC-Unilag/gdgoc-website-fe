import { useState } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import JUNPointsData from './join-us-now.json';
import JUNStyles from './join-us-now.module.css';
import JUNBannerSM from '../../../assets/home/jun-banner-sm.png';
import JUNBannerLG from '../../../assets/home/jun-banner-lg.png';

interface Points {
  id: string;
  no: string;
  title: string;
  body: string;
  extras: string;
}

function JoinUsNow() {
  const [JUNPoints, _] = useState<Points[]>(JUNPointsData);

  const isSmallScreen = useMediaQuery('(min-width: 768px)');

  return (
    <section className="pb-[67px] md:pb-[143px]">
      <h2
        className={`block md:hidden mb-8 px-[5.3333%] md:px-[6.9444%] text-center text-blue-500 font-bold leading-loose ${JUNStyles.jun_title}`}
      >
        Join Us now
      </h2>
      <div className="px-0 md:pl-[21px] md:pr-[6.9444%] flex flex-col md:flex-row items-center gap-y-8">
        <img className="block md:hidden mx-[3.2%] max-w-[450px] w-full" src={JUNBannerSM} alt="" />
        <img
          className="hidden md:block md:w-[45%] lg:w-[50dvw] xl:w-[54dvw]"
          src={JUNBannerLG}
          alt=""
        />
        <div className="px-[5.3333%] md:px-0 flex flex-col items-center gap-y-8">
          <h2
            className={`hidden md:block text-center text-blue-500 font-bold leading-loose ${JUNStyles.jun_title}`}
          >
            Join Us now
          </h2>
          <ul className={`mb-[34px] md:mb-0 w-full flex flex-col gap-y-10 ${JUNStyles.jun_points}`}>
            {JUNPoints.map((point) => (
              <li
                className="flex items-start gap-x-[5.37%] md:gap-x-[7.52%] text-[#131313]"
                key={point.id}
              >
                <span className="text-stroke">{point.no}</span>
                <div>
                  <h3 className="font-bold leading-loose md:leading-[1.29] mb-0 md:mb-3">
                    {point.title}
                  </h3>
                  <p className="opacity-80 leading-normal">
                    {point.body} {isSmallScreen ? '' : point.extras}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <a
            className="max-w-[335px] md:max-w-[218px] w-full py-3 md:py-4 bg-black-02 flex justify-center items-center gap-x-2 rounded-[25px] transition-[opacity] ease-in-out duration-300 hover:opacity-70"
            href="https://forms.gle/du3A8stkQPvFcArd8"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="font-medium text-white text-base md:text-[1.44rem] leading-none">
              Join Us Today
            </span>
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="white" />
              <path
                d="M17.6665 12L12.6665 17L17.6665 12ZM17.6665 12L12.6665 7L17.6665 12ZM17.6665 12L5.99984 12L17.6665 12Z"
                fill="white"
              />
              <path
                d="M17.6665 12L12.6665 17M17.6665 12L12.6665 7M17.6665 12L5.99984 12"
                stroke="#1E1E1E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default JoinUsNow;
