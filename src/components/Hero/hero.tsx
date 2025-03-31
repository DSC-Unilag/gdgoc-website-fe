import EmojiOne from '../../assets/hero/emoji-1.svg';
import EmojiTwo from '../../assets/hero/emoji-2.svg';
import EmojiThree from '../../assets/hero/emoji-3.svg';
import HeroImage from '../../assets/hero/hero.png';
import Separator from '../../assets/hero/separator.svg';
import styles from './hero.module.css';
import WhoWeAre from './who-we-are';

function Hero() {
  return (
    <div className="hero relative flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl relative py-6 px-4 md:px-0">
        <img
          src={EmojiOne}
          alt="Emoji One"
          className="absolute md:-left-2 w-10 h-10 md:w-20 md:h-20"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-snug relative">
          Empowering the <br className="block md:hidden" />
          next generation of{' '}
          <span className={`text-yellow-500 ${styles.ringAround}`}>developers</span>
        </h1>
        <img
          src={EmojiTwo}
          alt="Emoji Two"
          className="absolute top-30 left-85 md:left-auto md:-right-20 w-10 h-10 md:w-20 md:h-20"
        />
        <p className="py-6 text-sm text-[#1E1E1E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget turpis molestie,
          accumsan augue vel, convallis ligula. Mauris at nulla in erat imperdiet tempus.
        </p>
        <button className="mt-6 px-3 md:px-6 py-3 w-full md:w-auto bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-none focus:ring-opacity-75 flex justify-center items-center text-center justify-self-center relative">
          <img
            src={EmojiThree}
            alt="Emoji Three"
            className="absolute left-10 md:-left-70 bottom-45 md:bottom-2 w-10 h-10 md:w-20 md:h-20"
          />
          Join Our Community
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="ml-2 h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <img
          src={HeroImage}
          alt="Hero"
          className="mt-8 w-full rounded-lg shadow-lg justify-self-center max-w-lg md:max-w-xl lg:max-w-2xl"
        />
      </div>
      <img src={Separator} alt="Separator" className="my-6 w-full h-auto" />
      <WhoWeAre />
    </div>
  );
}

export default Hero;
