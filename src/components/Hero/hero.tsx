import EmojiOne from '../../assets/hero/emoji-1.svg';
import EmojiTwo from '../../assets/hero/emoji-2.svg';
import EmojiThree from '../../assets/hero/emoji-3.svg';
import HeroImage from '../../assets/hero/hero.jpg';
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
          className={`absolute ${styles.floatingIcon} left-10 md:left-12 lg:-left-2 top-4 md:top-6 lg:top-6 w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20`}
        />
        <img
          src={EmojiTwo}
          alt="Emoji Two"
          className={`absolute ${styles.floatingIcon} top-25 md:top-20 lg:top-30 right-15 md:-right-2 lg:-right-20 w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20`}
        />
        <img
          src={EmojiThree}
          alt="Emoji Three"
          className={`absolute ${styles.floatingIcon} left-15 md:left-0 lg:-left-10 top-28 md:top-30 lg:top-60 w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20`}
        />
        <div className="flex flex-col justify-center items-center mb-2 space-y-0">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] leading-snug relative">
            Empowering the <br className="block md:hidden" />
            next generation of{' '}
            <span className={`text-yellow-500 ${styles.ringAround}`}>developers</span>
          </h1>
          <p className="py-6 text-sm text-[#1E1E1E]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget turpis molestie,
            accumsan augue vel, convallis ligula. Mauris at nulla in erat imperdiet tempus.
          </p>
          <button className="mt-6 px-3 md:px-6 py-3 w-full md:w-auto bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-none focus:ring-opacity-75 flex justify-center items-center text-center justify-self-center relative">
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
        </div>
        <img src={HeroImage} alt="Hero" className={`mt-8 ${styles.heroImage}`} />
      </div>
      <img src={Separator} alt="Separator" className="my-6 w-full h-auto" />
      <WhoWeAre />
    </div>
  );
}

export default Hero;
