import { useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { Slides } from './wju-types';
import WJUSlidesData from './why-join-us.json';
import WJUStyles from './why-join-us.module.css';
import WhyJoinUsCarousel from './wju-carousel';

const OPTIONS: EmblaOptionsType = { loop: true };

function WhyJoinUs() {
  const [WJUCarouselSlides, _] = useState<Slides[]>(WJUSlidesData);

  return (
    <section className="py-10 md:py-[60px] bg-[#0D0D0D] flex flex-col gap-y-8 text-off-white">
      <h2 className={`p_cont_auto text-center font-bold ${WJUStyles.wju_title}`}>
        ⭐️Why you should join GDGoC⭐
      </h2>
      <WhyJoinUsCarousel slides={WJUCarouselSlides} options={OPTIONS} />
    </section>
  );
}

export default WhyJoinUs;
