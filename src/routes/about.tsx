import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f1f3f4]">
      {/* Who We Are Section */}
      <section className="py-16 md:py-24 relative" id="who-we-are">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative pb-20">
          {/* Decorative Elements */}
          <img
            src="/images/image4.png"
            className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20"
            alt=""
          />
          <img
            src="/images/image5.png"
            className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20"
            alt=""
          />
          <img
            src="/images/image7.png"
            className="absolute bottom-0 right-0 w-36 h-36 md:w-40 md:h-40"
            alt=""
          />

          {/* Image Grid */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-8 justify-center">
              <img
                src="/images/who-we-are/who-we-are-1.png"
                alt="GDSC team members"
                className="rounded-lg shadow-md"
              />
              <img
                src="/images/who-we-are/who-we-are-3.png"
                alt="GDSC team members"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col gap-8">
              <img
                src="/images/who-we-are/who-we-are-2.png"
                alt="GDSC team members"
                className="rounded-lg shadow-md"
              />
              <img
                src="/images/who-we-are/who-we-are-4.png"
                alt="GDSC team members"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="py-8 md:py-20 px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Who we are</h2>
            <p className="text-[#4b4b4b] text-md md:text-md leading-relaxed text-justify">
              We are a community of developers and tech enthusiasts who love learning, building, and
              innovating. At <b>GDGOC Unilag</b>, you'll find endless opportunities to grow—whether
              it's sharpening your skills, staying updated on the latest tech trends, or networking
              with like-minded people and industry pros.
              <br />
              <br />
              Learning tech alone can be frustrating—endless resources, zero guidance, and moments
              when quitting feels like the only option. We get it. That's why we exist. Here, you'll
              connect with others who share your passion, making the journey less overwhelming and
              way more fun.
              <br />
              <br />
              From workshops and coding challenges to hackathons and speaker sessions with industry
              leaders, there's always something happening. Whether you're a seasoned developer or
              just starting, GDGOC Unilag is the place to explore, experiment, and excel.
              <br />
              <br />
              Tech moves fast, but you don't have to navigate it alone. Join us, and let's grow
              together. 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-8 md:py-16 flex flex-col items-center relative" id="join-community">
        <div className="max-w-[90%] w-full mx-auto bg-[#31a858] text-white rounded-lg py-12 md:py-28 px-8 md:px-20 flex flex-row justify-between items-center gap-8">
          <h3 className="text-2xl md:text-4xl font-bold">Join Our Community</h3>
          <button className="bg-[#0a2212] text-white py-4 md:py-8 px-6 md:px-8 rounded text-base md:text-xl font-medium">
            Become a member
          </button>
        </div>
        <img
          src="/images/assets/vector-blocks.png"
          alt=""
          className="hidden md:block transform -translate-y-1/2 w-16 md:w-auto"
        />
      </section>
    </div>
  );
}
