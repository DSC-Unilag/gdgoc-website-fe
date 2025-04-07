import Hero from './hero';
import WhoWeAre from './who-we-are';
import WhyJoinUs from './why-join-us';
import MeetOurTeam from './meet-our-team';
import JoinUsNow from './join-us-now';
import Testimonial from './testimonial';
import Programs from './programs';
import Newsletter from './newsletter';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <WhoWeAre />
        <WhyJoinUs />
        <MeetOurTeam />
        <JoinUsNow />
        <Testimonial />
        <Programs />
        <Newsletter />
      </main>
    </>
  );
}

export default HomePage;
