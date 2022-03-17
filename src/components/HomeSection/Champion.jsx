import React from "react";
import HomeSection from "./HomeSection";
import { bg2 } from "../../assets/images";
import { championsData } from "../../assets/dummy";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import ChampionCard from "./ChampionCard";

const Champion = (props) => {
  return (
    <ChampionContainer>
      <HomeSection
        className={`champion ${props.isActive ? "active" : ""}`}
        contentClassName="overlay"
        bgImage={bg2}
      >
        <Container className="relative">
          <ChampionList>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={0}
              grabCursor={true}
              nested={true}
            >
              {championsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <ChampionCard item={item} id={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ChampionList>
        </Container>
      </HomeSection>
    </ChampionContainer>
  );
};

const ChampionContainer = styled.div``;
const Container = styled.div``;
const ChampionList = styled.div`
  .swiper-slide {
    width: 450px;
    pointer-events: visible;
    overflow: visible;
    transform: translateX(200px);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transition-delay: 0s;
  }
`;

export default Champion;
