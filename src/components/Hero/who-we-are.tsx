import WhoWeAreImage from '../../assets/hero/who-we-are.jpg';

function WhoWeAre() {
  return (
    <div className="who-we-are flex flex-col md:flex-row items-center justify-between px-[5.3333%] md:px-[6.9444%] py-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={WhoWeAreImage}
          alt="Who We Are"
          className="aspect-[16/9] border-4 border-[#0f9d58] drop-shadow-[10px_10px_0px_#0f9d58] rounded-[0px_20px]"
        />
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">Who We Are</h2>
        <p className="mt-4 text-sm md:text-base text-[#1E1E1E] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget turpis molestie,
          accumsan augue vel, convallis ligula. Mauris at nulla in erat imperdiet tempus. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nam eget turpis molestie, accumsan
          augue vel, convallis ligula. Mauris at nulla in erat imperdiet tempus...
        </p>
        <button className="mt-6 px-6 py-3 bg-[#1E1E1E] text-white font-medium rounded-full w-full md:w-auto hover:bg-[#151515] focus:outline-none focus:ring-2 focus:ring-none focus:ring-opacity-75 flex justify-center items-center text-center justify-self-center md:justify-self-start relative">
          Read more about GDSC Unilag
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
    </div>
  );
}

export default WhoWeAre;
