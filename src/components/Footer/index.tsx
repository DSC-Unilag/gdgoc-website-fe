import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import FooterStyle from './footer.module.css';
import FooterLogo from '../../assets/footer-logo.png';

function Footer() {
  const [currentNav, setCurrentNav] = useState(0);

  return (
    <footer
      className={`w-full bg-black-02 pt-10 px-[5.3333%] pb-7 md:pt-[54px] md:px-[6.9444%] sm:pb-[14px] text-off-white`}
    >
      <div className="mb-16 sm:mb-[46.44px] flex flex-col lg:flex-row justify-center lg:justify-between lg:items-start">
        <div className="lg:shrink-0 flex justify-start sm:justify-center lg:justify-start">
          <img
            src={FooterLogo}
            alt=""
            className="max-w-[153.98px] w-full sm:max-w-max sm:w-[212px] lg:w-[14.75vw] h-auto"
          />
        </div>

        <ul
          className={`lg:shrink-1 pt-[42px] pb-[59px] lg:py-0 lg:pl-[5%] xl:pl-[6%] lg:pr-[2.86%] xl:pr-[3.86%] flex flex-col sm:flex-row gap-y-4 sm:gap-x-[5vw] lg:gap-x-[2.5vw] xl:gap-x-[4vw] justify-center lg:justify-start ${FooterStyle.foot_nav}`}
        >
          <li>
            <dl>
              <dt className="flex items-center gap-x-[0.625rem]">
                <span className="font-bold">Community</span>
                <button
                  className="block sm:hidden cursor-pointer w-2.5"
                  onClick={() => {
                    if (currentNav !== 1) {
                      setCurrentNav(1);
                    } else {
                      setCurrentNav(0);
                    }
                  }}
                >
                  <svg
                    className="w-full"
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.833252 0.333008L4.99992 4.49967L9.16659 0.333008H0.833252Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </dt>
              <div
                className={`h-0 sm:h-auto overflow-hidden transition-[height] ease-in-out ${currentNav === 1 ? 'h-[55px]' : 'h-0'}`}
              >
                <dd className="pt-[14.97px]">
                  <Link to="/">About GDGoC</Link>
                </dd>
                <dd className="pt-[14.97px]">
                  <Link to="/">Core Team</Link>
                </dd>
              </div>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="flex items-center gap-x-[0.625rem]">
                <span className="font-bold">Resources</span>
                <button
                  className="block sm:hidden cursor-pointer w-2.5"
                  onClick={() => {
                    if (currentNav !== 2) {
                      setCurrentNav(2);
                    } else {
                      setCurrentNav(0);
                    }
                  }}
                >
                  <svg
                    className="w-full"
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.833252 0.333008L4.99992 4.49967L9.16659 0.333008H0.833252Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </dt>
              <div
                className={`h-0 sm:h-auto overflow-hidden transition-[height] ease-in-out ${currentNav === 2 ? 'h-[82.5px]' : 'h-0'}`}
              >
                <dd className="pt-[14.97px]">
                  <Link to="/">Blog</Link>
                </dd>
                <dd className="pt-[14.97px]">
                  <Link to="/">Learn</Link>
                </dd>
                <dd className="pt-[14.97px]">
                  <Link to="/">Join GDGoC</Link>
                </dd>
              </div>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="flex items-center gap-x-[0.625rem]">
                <span className="font-bold">Activities</span>
                <button
                  className="block sm:hidden cursor-pointer w-2.5"
                  onClick={() => {
                    if (currentNav !== 3) {
                      setCurrentNav(3);
                    } else {
                      setCurrentNav(0);
                    }
                  }}
                >
                  <svg
                    className="w-full"
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.833252 0.333008L4.99992 4.49967L9.16659 0.333008H0.833252Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </dt>
              <div
                className={`h-0 sm:h-auto overflow-hidden transition-[height] ease-in-out ${currentNav === 3 ? 'h-[110px]' : 'h-0'}`}
              >
                <dd className="pt-[14.97px]">
                  <Link to="/">Programs</Link>
                </dd>
                <dd className="pt-[14.97px]">
                  <Link to="/">Hackathon</Link>
                </dd>
                <dd className="pt-[14.97px]">
                  <Link to="/">Open Source</Link>
                </dd>
                <dd className="pt-[14.97px]">
                  <Link to="/">Workshops</Link>
                </dd>
              </div>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="flex items-center gap-x-[0.625rem]">
                <span className="font-bold">Help and Support</span>
                <button
                  className="block sm:hidden cursor-pointer w-2.5"
                  onClick={() => {
                    if (currentNav !== 4) {
                      setCurrentNav(4);
                    } else {
                      setCurrentNav(0);
                    }
                  }}
                >
                  <svg
                    className="w-full"
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.833252 0.333008L4.99992 4.49967L9.16659 0.333008H0.833252Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </dt>
              <div
                className={`h-0 sm:h-auto overflow-hidden transition-[height] ease-in-out ${currentNav === 4 ? 'h-[82.5px]' : 'h-0'}`}
              >
                <dd className="pt-[14.97px]">
                  <Link to="/">FAQs</Link>
                </dd>
                <dd className="pt-[14.97px]">
                  <Link to="/">Contact Us</Link>
                </dd>
                <dd className="pt-[14.97px]">
                  <Link to="/">Privacy Policy</Link>
                </dd>
              </div>
            </dl>
          </li>
        </ul>

        <div className="w-full lg:w-auto lg:shrink-2">
          <p className="block sm:hidden text-[0.75rem] mb-2">Follow us:</p>
          <ul
            className={`flex gap-x-3 xl:gap-x-[1.56vw] justify-start sm:justify-center lg:justify-start ${FooterStyle.socials}`}
          >
            <li>
              <a href="https://x.com/gdgoc_unilag" target="_blank" rel="noreferrer noopener">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5685 5.965C27.5595 6.41209 26.4757 6.71417 25.3362 6.85071C26.5119 6.14721 27.3915 5.03998 27.8109 3.73563C26.7063 4.39174 25.4973 4.85357 24.2366 5.10105C23.3888 4.19584 22.2659 3.59586 21.0422 3.39424C19.8185 3.19263 18.5624 3.40067 17.469 3.98606C16.3757 4.57145 15.5061 5.50144 14.9955 6.63165C14.4848 7.76185 14.3616 9.02904 14.6449 10.2365C12.4067 10.1241 10.2171 9.54233 8.21826 8.52897C6.21943 7.51561 4.45601 6.09328 3.04245 4.3543C2.55912 5.18805 2.28121 6.15471 2.28121 7.18421C2.28067 8.111 2.50889 9.02359 2.94564 9.84101C3.38239 10.6584 4.01415 11.3554 4.78487 11.8701C3.89104 11.8417 3.01693 11.6002 2.23529 11.1657V11.2382C2.2352 12.538 2.68483 13.7979 3.50788 14.804C4.33094 15.81 5.47673 16.5004 6.75083 16.7578C5.92165 16.9822 5.05232 17.0153 4.2085 16.8545C4.56797 17.973 5.2682 18.951 6.21115 19.6517C7.1541 20.3524 8.29256 20.7407 9.46716 20.7623C7.47321 22.3275 5.01069 23.1766 2.47575 23.1729C2.02671 23.173 1.57805 23.1468 1.13208 23.0943C3.7052 24.7488 6.70049 25.6268 9.75958 25.6234C20.115 25.6234 25.776 17.0466 25.776 9.60813C25.776 9.36646 25.77 9.12238 25.7591 8.88071C26.8603 8.08439 27.8108 7.09829 28.5661 5.96863L28.5685 5.965Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" rel="noreferrer noopener">
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#fb-si-clip-path)">
                    <path
                      d="M26.4483 1.8125H3.66256C2.8385 1.8125 2.04818 2.09894 1.46548 2.6088C0.882779 3.11867 0.55542 3.81019 0.55542 4.53125L0.55542 24.4688C0.55542 25.1898 0.882779 25.8813 1.46548 26.3912C2.04818 26.9011 2.8385 27.1875 3.66256 27.1875H12.547V18.5606H8.46892V14.5H12.547V11.4052C12.547 7.88494 14.9421 5.94047 18.6105 5.94047C20.3673 5.94047 22.2044 6.21461 22.2044 6.21461V9.66969H20.1803C18.1859 9.66969 17.5638 10.7527 17.5638 11.8634V14.5H22.0161L21.304 18.5606H17.5638V27.1875H26.4483C27.2723 27.1875 28.0627 26.9011 28.6454 26.3912C29.2281 25.8813 29.5554 25.1898 29.5554 24.4688V4.53125C29.5554 3.81019 29.2281 3.11867 28.6454 2.6088C28.0627 2.09894 27.2723 1.8125 26.4483 1.8125Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="fb-si-clip-path">
                      <rect width="29" height="29" fill="white" transform="translate(0.55542)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" rel="noreferrer noopener">
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.0814 4.49177L3.65764 12.7531C2.19555 13.3404 2.20401 14.156 3.38939 14.5197L8.88972 16.2356L21.6159 8.20618C22.2176 7.84006 22.7674 8.03702 22.3155 8.43818L12.0048 17.7436H12.0024L12.0048 17.7448L11.6254 23.4143C12.1812 23.4143 12.4265 23.1593 12.7383 22.8584L15.4099 20.2605L20.967 24.3652C21.9917 24.9295 22.7276 24.6395 22.9825 23.4167L26.6305 6.22452C27.0038 4.72739 26.0589 4.04952 25.0814 4.49177Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gdgoc_unilag"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.68687 1.28776C11.1042 1.22251 11.5562 1.20801 15.1667 1.20801C18.7772 1.20801 19.2291 1.22372 20.6452 1.28776C22.0614 1.3518 23.0281 1.57776 23.8739 1.90522C24.7596 2.23992 25.5632 2.76313 26.2277 3.4398C26.9044 4.10317 27.4264 4.90551 27.7599 5.79242C28.0886 6.63826 28.3133 7.60492 28.3786 9.01867C28.4438 10.4385 28.4583 10.8904 28.4583 14.4997C28.4583 18.1102 28.4426 18.5621 28.3786 19.9795C28.3145 21.3932 28.0886 22.3599 27.7599 23.2057C27.4264 24.0927 26.9035 24.8964 26.2277 25.5608C25.5632 26.2374 24.7596 26.7594 23.8739 27.0929C23.0281 27.4216 22.0614 27.6463 20.6477 27.7116C19.2291 27.7768 18.7772 27.7913 15.1667 27.7913C11.5562 27.7913 11.1042 27.7756 9.68687 27.7116C8.27312 27.6475 7.30646 27.4216 6.46062 27.0929C5.57361 26.7594 4.76995 26.2365 4.10558 25.5608C3.42938 24.897 2.90609 24.0937 2.57221 23.2069C2.24475 22.3611 2.02 21.3944 1.95475 19.9807C1.8895 18.5609 1.875 18.109 1.875 14.4997C1.875 10.8892 1.89071 10.4373 1.95475 9.02109C2.01879 7.60492 2.24475 6.63826 2.57221 5.79242C2.90658 4.90561 3.43027 4.10234 4.10679 3.43859C4.77022 2.76253 5.57307 2.23925 6.45942 1.90522C7.30525 1.57776 8.27192 1.35301 9.68567 1.28776H9.68687ZM20.5377 3.68026C19.136 3.61622 18.7155 3.60292 15.1667 3.60292C11.6178 3.60292 11.1973 3.61622 9.79562 3.68026C8.49908 3.73947 7.79583 3.95576 7.327 4.13822C6.70712 4.37988 6.26367 4.66626 5.79846 5.13147C5.35747 5.56049 5.01809 6.08277 4.80521 6.66001C4.62275 7.12884 4.40646 7.83209 4.34725 9.12863C4.28321 10.5303 4.26992 10.9508 4.26992 14.4997C4.26992 18.0485 4.28321 18.469 4.34725 19.8707C4.40646 21.1673 4.62275 21.8705 4.80521 22.3393C5.01787 22.9157 5.35742 23.4389 5.79846 23.8679C6.22742 24.3089 6.75062 24.6485 7.327 24.8611C7.79583 25.0436 8.49908 25.2599 9.79562 25.3191C11.1973 25.3831 11.6166 25.3964 15.1667 25.3964C18.7167 25.3964 19.136 25.3831 20.5377 25.3191C21.8342 25.2599 22.5375 25.0436 23.0063 24.8611C23.6262 24.6195 24.0697 24.3331 24.5349 23.8679C24.9759 23.4389 25.3155 22.9157 25.5281 22.3393C25.7106 21.8705 25.9269 21.1673 25.9861 19.8707C26.0501 18.469 26.0634 18.0485 26.0634 14.4997C26.0634 10.9508 26.0501 10.5303 25.9861 9.12863C25.9269 7.83209 25.7106 7.12884 25.5281 6.66001C25.2865 6.04013 25.0001 5.59667 24.5349 5.13147C24.1058 4.69051 23.5836 4.35114 23.0063 4.13822C22.5375 3.95576 21.8342 3.73947 20.5377 3.68026ZM13.469 18.5971C14.4171 18.9918 15.4728 19.0451 16.4559 18.7478C17.4389 18.4506 18.2883 17.8213 18.8589 16.9674C19.4295 16.1135 19.6859 15.088 19.5844 14.066C19.4829 13.044 19.0297 12.089 18.3023 11.364C17.8386 10.9006 17.2779 10.5458 16.6606 10.3251C16.0433 10.1043 15.3847 10.0232 14.7323 10.0876C14.0798 10.1519 13.4498 10.3601 12.8875 10.6972C12.3252 11.0343 11.8446 11.4918 11.4804 12.0369C11.1162 12.582 10.8773 13.2011 10.781 13.8495C10.6848 14.498 10.7335 15.1598 10.9237 15.7872C11.1138 16.4146 11.4407 16.992 11.8809 17.4779C12.321 17.9638 12.8634 18.346 13.469 18.5971ZM10.3357 9.66876C10.9702 9.03435 11.7233 8.53112 12.5522 8.18778C13.3811 7.84444 14.2695 7.66773 15.1667 7.66773C16.0639 7.66773 16.9522 7.84444 17.7811 8.18778C18.61 8.53111 19.3632 9.03435 19.9976 9.66876C20.632 10.3032 21.1352 11.0563 21.4786 11.8852C21.8219 12.7141 21.9986 13.6025 21.9986 14.4997C21.9986 15.3969 21.8219 16.2853 21.4786 17.1141C21.1352 17.943 20.632 18.6962 19.9976 19.3306C18.7163 20.6118 16.9786 21.3316 15.1667 21.3316C13.3547 21.3316 11.617 20.6118 10.3357 19.3306C9.05451 18.0494 8.33472 16.3116 8.33472 14.4997C8.33472 12.6877 9.05451 10.95 10.3357 9.66876ZM23.5138 8.68517C23.671 8.53687 23.7969 8.35854 23.8839 8.16073C23.971 7.96291 24.0175 7.74964 24.0206 7.53355C24.0238 7.31745 23.9835 7.10292 23.9023 6.90265C23.821 6.70239 23.7004 6.52046 23.5476 6.36764C23.3948 6.21482 23.2129 6.09421 23.0126 6.01297C22.8123 5.93172 22.5978 5.89148 22.3817 5.89463C22.1656 5.89778 21.9523 5.94426 21.7545 6.03131C21.5567 6.11836 21.3784 6.24421 21.2301 6.40142C20.9417 6.70717 20.7838 7.11328 20.7899 7.53355C20.796 7.95382 20.9657 8.35515 21.2629 8.65236C21.5601 8.94957 21.9614 9.11924 22.3817 9.12537C22.802 9.1315 23.2081 8.97359 23.5138 8.68517Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={`${FooterStyle.cp_ff_size} w-full text-left sm:text-center`}>
        Copyright &copy;2025. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
