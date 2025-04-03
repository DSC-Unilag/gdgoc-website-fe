import { useState } from 'react';
import { Link } from '@tanstack/react-router';
// import NavStyles from "./navbar.module.css"
import NavLogo from '../../assets/nav-logo.png';

function NavBar() {
  const [showNavDD, setShowNavDD] = useState(false);
  const [showProgramsDD, setShowProgramsDD] = useState(false);

  return (
    <nav className="p_cont_auto relative pt-10 pb-[7px] md:pb-6 flex gap-x-8 md:gap-x-[1.6vw] justify-between items-center border-b border-[#CFC9C9] border-solid">
      <div className={`max-w-[235px] md:w-[24vw] lg:w-full`}>
        <img src={NavLogo} alt="" className={`w-full`} />
      </div>

      <ul
        className={`fixed md:static w-full md:w-max top-0 md:top-auto left-0 md:left-auto z-10 overflow-hidden md:overflow-visible md:h-auto px-[22.98%] md:p-0 bg-blue-500 md:bg-transparent transition-[height] ease-in-out duration-300 flex flex-col md:flex-row gap-y-6 md:gap-x-[1.67vw] text-base md:text-[0.875rem] lg:text-base text-off-white md:text-black-02 leading-none ${showNavDD ? 'h-dvh' : 'h-0'} md:h-auto`}
      >
        <button
          className="absolute top-[22px] left-[23px] w-6 h-6 md:hidden"
          onClick={() => {
            console.log(showNavDD);
            setShowNavDD(false);
          }}
        >
          <svg
            className="w-full"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="#F1F3F4"
            />
          </svg>
        </button>
        <li className={`mt-[74px] md:m-0`}>
          <Link
            to="/"
            className="transition-[color] ease-in-out duration-300"
            activeProps={{ className: 'text-black-02 md:text-blue-500 font-medium' }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="transition-[color] ease-in-out duration-300"
            activeProps={{ className: 'text-black-02 md:text-blue-500 font-medium' }}
          >
            About
          </Link>
        </li>
        <li>
          <dl className="static md:relative">
            <dt
              className="flex items-center gap-x-2.5 cursor-pointer"
              onClick={() => {
                setShowProgramsDD(!showProgramsDD);
              }}
            >
              <span>Programs</span>
              <button
                className={`w-3 transition-[rotate] ease-in-out duration-300 ${showProgramsDD ? 'rotate-180' : 'rotate-0'}`}
              >
                <svg
                  className="w-full"
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3332 1.0835L6.49984 6.91683L0.666504 1.0835"
                    stroke="#200E32"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-off-white md:stroke-[#200E32]"
                  />
                </svg>
              </button>
            </dt>
            <div
              className={`bg-transparent md:bg-white md:shadow-[5px_5px_11px_rgba(0,0,0,0.11)] static md:absolute md:top-[150%] md:left-[50%] md:-translate-x-[50%] z-50 overflow-hidden md:px-[30px] flex flex-col justify-end md:justify-center gap-y-6 transition-[height] duration-300 md:leading-[1%] ${showProgramsDD ? 'h-[121.6px] md:h-[110px]' : 'h-0'}`}
            >
              <dd>
                <Link
                  to="/"
                  className="transition-[color] ease-in-out duration-300"
                  activeProps={{ className: 'text-black-02 md:text-blue-500 font-medium' }}
                >
                  Hackathon
                </Link>
              </dd>
              <dd>
                <Link
                  to="/"
                  className="transition-[color] ease-in-out duration-300"
                  activeProps={{ className: 'text-black-02 md:text-blue-500 font-medium' }}
                >
                  Workshop
                </Link>
              </dd>
              <dd className="whitespace-nowrap">
                <Link
                  to="/"
                  className="transition-[color] ease-in-out duration-300"
                  activeProps={{ className: 'text-black-02 md:text-blue-500 font-medium' }}
                >
                  Open Hack Week
                </Link>
              </dd>
            </div>
          </dl>
        </li>
        <li>
          <Link
            to="/teams"
            className="transition-[color] ease-in-out duration-300"
            activeProps={{ className: 'text-black-02 md:text-blue-500 font-medium' }}
          >
            Teams
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition-[color] ease-in-out duration-300"
            activeProps={{ className: 'text-black-02 md:text-blue-500 font-medium' }}
          >
            FAQs
          </Link>
        </li>
      </ul>

      <a
        href="https://forms.gle/du3A8stkQPvFcArd8"
        rel="noreferrer noopener"
        className="hidden md:inline-block bg-blue-500 transition-[opacity] ease-in-out duration-300 hover:opacity-80 py-[13.59px] px-5 lg:px-6 rounded-[20px] text-[0.875rem] lg:text-base text-off-white leading-none whitespace-nowrap"
      >
        Join GDGoC
      </a>

      <button
        className="w-6 h-6 flex justify-center items-center md:hidden"
        onClick={() => {
          setShowNavDD(true);
        }}
      >
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z"
            fill="black"
          />
        </svg>
      </button>
    </nav>
  );
}

export default NavBar;
