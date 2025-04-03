import Hero from './hero';
import WhoWeAre from './who-we-are';
import WhyJoinUs from './why-join-us';
import MeetOurTeam from './meet-our-team';
import JoinUsNow from './join-us-now';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <WhoWeAre />
        <WhyJoinUs />
        <MeetOurTeam />
        <JoinUsNow />
      </main>
    </>
  );
}

export default HomePage;
