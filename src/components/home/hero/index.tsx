import HeroStyles from './hero.module.css';
import EmojiOne from '../../../assets/home/hero/emoji-1.svg';
import EmojiTwo from '../../../assets/home/hero/emoji-2.svg';
import EmojiThree from '../../../assets/home/hero/emoji-3.svg';
import HeroImage from '../../../assets/home/hero/hero.jpg';
import GoldCircle from '../../../assets/home/hero/frame.svg';
import Separator from '../../../assets/home/hero/separator.svg';

function Hero() {
  return (
    <section className="hero">
      <div className="p_cont_auto w-full pt-[39px] md:pt-[81px] text-black-02">
        <div className="mx-auto w-fit">
          <h1
            className={`mx-auto w-fit relative font-bold text-center leading-snug ${HeroStyles.hero_title}`}
          >
            <span className="w-fit z-10 relative">
              Empowering the <br className="hidden h-xsm:block sm:hidden" />
              next <br className="hidden sm:block" /> generation of{' '}
              <span className={`relative text-[#FBBC4D]`}>
                developers
                <img
                  className="absolute -top-1 -left-0.5 md:-top-2.5 md:-left-2.5 w-[90%] md:w-[98%]"
                  src={GoldCircle}
                  alt=""
                />
              </span>
            </span>
            <img
              src={EmojiOne}
              alt=""
              className={`absolute z-0 -top-[4.267dvw] sm:-top-[2.083dvw] 2xl:-top-[30px] -left-2 h-xsm:left-[3.2dvw] sm:-left-[3.472dvw] 2xl:-left-[50px] max-w-9 sm:max-w-[100px] w-[9.6dvw] sm:w-[6.94dvw]`}
            />
            <img
              src={EmojiTwo}
              alt=""
              className={`absolute z-0 block sm:hidden top-8/12 right-0 h-xsm:top-[22dvw] h-xsm:right-[7dvw] max-w-9 w-[9.6dvw]`}
            />
            <img
              src={EmojiThree}
              alt=""
              className={`absolute z-0 block sm:hidden top-10/12 -left-1 h-xsm:top-[24.5dvw] h-xsm:left-[10dvw] max-w-9 w-[9.6dvw]`}
            />
          </h1>
          <p
            className={`mx-auto w-full sm:w-[75dvw] md:w-[64dvw] xl:w-[50.35dvw] 2xl:max-w-[760px] relative mt-[26px] md:mt-6 mb-[23px] md:mb-12 opacity-80 tracking-[3%] leading-normal md:leading-[1.388] text-center ${HeroStyles.hero_body}`}
          >
            <span className="relative z-10">
              At GDGoC Unilag, we're dedicated to nurturing the next generation of developers.
              Through innovation and collaboration, we provide the tools and support needed for
              success. Join us as we shape the future of technology together.
            </span>
            <img
              src={EmojiTwo}
              alt=""
              className={`absolute z-0 hidden sm:block top-1/2 -translate-y-1/2 right-0 translate-x-full max-w-[100px] w-[6.94dvw]`}
            />
            <img
              src={EmojiThree}
              alt=""
              className={`absolute z-0 hidden sm:block -bottom-[6.528dvw] 2xl:-bottom-[94px] -left-[5.278dvw] 2xl:-left-[76px] max-w-[100px] w-[6.94dvw]`}
            />
          </p>
          <a
            className="max-w-[335px] md:max-w-[263px] w-full mx-auto px-3 py-3 md:py-4 md:w-auto bg-blue-500 flex justify-center items-center gap-x-2 transition-[opacity] ease-in-out duration-300 hover:opacity-80 rounded-[25px]"
            href="https://forms.gle/du3A8stkQPvFcArd8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-white text-base md:text-[20px] font-medium leading-none">
              Join Our Community
            </span>
            <svg
              className="w-5 md:w-6 h-5 md:h-6"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12.5" cy="12" r="12" fill="white" />
              <path
                d="M18.1665 12L13.1665 17L18.1665 12ZM18.1665 12L13.1665 7L18.1665 12ZM18.1665 12L6.49984 12L18.1665 12Z"
                fill="white"
              />
              <path
                d="M18.1665 12L13.1665 17M18.1665 12L13.1665 7M18.1665 12L6.49984 12"
                stroke="#1E1E1E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="mt-[26px] md:mt-8 mx-auto max-w-[550px] w-full md:max-w-max md:w-[67.22dvw] pl-1 pr-3.5">
          <img
            src={HeroImage}
            alt="Hero"
            className={`w-full h-auto aspect-[16/9] border-4 border-solid border-[#fbbc04] shadow-[10px_10px_0_#fbbc04] rounded-[30px]`}
          />
        </div>
      </div>

      <img src={Separator} alt="Separator" className="mt-[26px] md:mt-[41px] w-full h-auto" />
    </section>
  );
}

export default Hero;
