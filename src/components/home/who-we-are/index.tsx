import WWAStyles from './who-we-are.module.css';
import WhoWeAreImage from '../../../assets/home/who-we-are.jpg';
import { Link } from '@tanstack/react-router';

function WhoWeAre() {
  return (
    <section
      className={`p_cont_auto w-full pt-[58px] md:pt-[100px] pb-[67.22px] md:pb-[143px] ${WWAStyles.wwa_section} text-black-02`}
    >
      <h2 className="block lg:hidden mb-10 font-bold text-center">Who We Are</h2>
      <div className="w-full flex flex-col md:flex-row items-center lg:items-start justify-between md:gap-x-[8.55%]">
        <div className="max-w-[450px] w-full md:max-w-max md:w-[73.9699vw] h-max pr-1.5 md:pr-0 flex items-start justify-center">
          <img
            src={WhoWeAreImage}
            alt="Who We Are"
            className="w-full md:h-[300px] lg:h-[360px] object-cover border-4 border-[#0f9d58] drop-shadow-[10px_10px_0px_#0f9d58] rounded-[0px_20px]"
          />
        </div>

        <div className="w-full mt-8 md:mt-0 text-center md:text-left">
          <h2 className="hidden lg:block font-bold ">Who We Are</h2>
          <p className="mt-[35px] md:mt-0 lg:mt-[34px] text-sm md:text-base leading-[1.35] md:leading-[1.43] opacity-80">
            Welcome to GDGoC Unilag! We're a lively community of developers and tech enthusiasts,
            connected to the global Google Developer Group on Campus network. Here, we spark
            innovation and growth, offering students a space to explore cutting-edge tech, dive into
            hands-on workshops, tackle collaborative projects, and gain insights from industry
            mentors. Join us as we tap into Google's resources to shape the future of technology
            together!
          </p>
          <Link
            className="max-w-[380px] mt-8 hidden lg:flex px-3 py-4 bg-black-02 transition-[opacity] ease-in-out duration-300 hover:opacity-80 justify-center items-center gap-x-2 rounded-[25px]"
            to="/about"
          >
            <span className="text-white text-[1.25rem] font-medium">
              Read more about GDGoC Unilag
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Link
        className="max-w-[335px] mt-10 md:mt-9 mx-auto flex lg:hidden px-3 py-3 bg-black-02 transition-all ease-in-out duration-300 hover:bg-[#151515] justify-center items-center gap-x-2 rounded-[25px]"
        to="/about"
      >
        <span className="text-white text-base font-medium leading-none">
          Read more about GDGoC Unilag
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}

export default WhoWeAre;
