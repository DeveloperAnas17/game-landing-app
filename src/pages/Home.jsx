import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";

import {
  Welcome,
  // Champion,
  // ChampionDetail,
  // Trailer,
  // Credit
} from "../components/HomeSection";
import Champion from "../components/HomeSection/Champion";

// import { championsData } from "../assets/dummy";

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 1000,
};

const Home = () => {
  return (
    <div>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Champion isActive={isActive} />}
        </SwiperSlide>
        {/* <SwiperSlide>slide 3</SwiperSlide> */}
      </Swiper>

      <div className="scroll">
        <span>Scroll to see effect</span>
      </div>
    </div>
  );
};

export default Home;
