import useMediaQuery from '../../../hooks/useMediaQuery';
import NewsletterStyles from './newsletter.module.css';

function Newsletter() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section className={`w-full md:py-[100px] ${isDesktop ? 'p_cont_auto' : ''}`}>
      <div
        className={`p_cont_auto pt-8 md:pt-[81px] pb-[69px] md:pb-[118px] ${NewsletterStyles.newsletter_content} bg-green-500 md:rounded-[20px]`}
      >
        <h2 className="mb-[46px] md:mb-[88px] font-medium md:font-bold text-white leading-[33px] text-center">
          Subscribe to our Newsletter
        </h2>
        <form
          className="w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-[2.18%] 2xl:gap-[27px]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="mx-auto md:mx-0 max-w-[400px] w-full md:max-w-[762px] px-2.5 md:px-8 py-4 md:py-6 bg-white rounded-[10px] outline-none text-[#5F6368]"
            type="email"
            placeholder={isDesktop ? 'Your Email' : 'Your email address'}
          />
          <input
            className="mx-auto md:mx-0 max-w-[400px] w-full md:max-w-[257px] md:w-[35%] lg:w-[20.75%] py-4 bg-[#0A2212] cursor-pointer rounded-[10px] transition-[opacity] ease-in-out duration-300 hover:opacity-80 text-white text-base md:text-2xl leading-none text-center align-middle"
            type="submit"
          />
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
