import { useEffect } from "react";
// import "./welcome.scss";

// import HomeSection from "../HomeSection";
import HomeSection from "../HomeSection/HomeSection";
// import Button from "../Button";

import hoverEffect from "hover-effect";

import {
  bg1,
  champAshe,
  champAhri,
  champGaren,
  distortion,
} from "../../assets/images";
import styled from "styled-components";

const champImgs = [champAshe, champAhri, champGaren];

const Welcome = (props) => {
  useEffect(() => {
    const welcomeImgs = document.querySelectorAll("#welcome__img__slide > img");
    let animates = [];
    welcomeImgs.forEach((item, index) => {
      let nextImg =
        welcomeImgs[
          index === welcomeImgs.length - 1 ? 0 : index + 1
        ].getAttribute("src");
      let animation = new hoverEffect({
        parent: document.querySelector("#welcome__img__slide"),
        intensity: 0.5,
        image1: item.getAttribute("src"),
        image2: nextImg,
        displacementImage: distortion,
        hover: false,
      });
      animates.push(animation);
    });
    welcomeImgs.forEach((e) => e.remove());

    let currItem = 0;

    const autoImageSlide = () => {
      let prevItem = currItem;
      currItem = (currItem + 1) % animates.length;

      if (!document.hidden) {
        animates[prevItem].next();
      }

      setTimeout(() => {
        let canvas = document.querySelectorAll("#welcome__img__slide > canvas");
        document.querySelector("#welcome__img__slide").appendChild(canvas[0]);
        animates[prevItem].previous();
      }, 3000);
    };

    setInterval(autoImageSlide, 3000);
  }, []);

  return (
    <WelcomeContainer>
      <HomeSection
        className={`welcome ${props.isActive ? "active" : ""}`}
        contentClassName="overlay welcome__content"
        bgImage={bg1}
      >
        <WelcomeInfo className="welcome__info relative">
          <WelcomeInfoContent className="welcome__info__content">
            <div className="title">
              <span>Welcome To</span>
              <h2 className="main-color">Summoner's Rift</h2>
            </div>
            <div className="description">
              Team up with friends and test your skills in 5v5 MOBA combat. All
              the high-skill competition you crave, designed especially for
              mobile and console with revamped controls and streamlined
              matches.Explore the living universe of Runeterra through lore,
              comics, games, and more. Then dive into the community of gamers,
              cosplayers, musicians, and content creators who are waiting for
              you to join them.
            </div>
            <Buttons>
              <Button1 className="btn-main">PLAY NOW</Button1>
              <Button2 className="btn-second">GET STARTED</Button2>
            </Buttons>
          </WelcomeInfoContent>
        </WelcomeInfo>
        <WelcomeImage className="welcome__img relative">
          <div className="welcome__img__slide" id="welcome__img__slide">
            {champImgs.map((item, index) => (
              <img src={item} key={index} />
            ))}
          </div>
        </WelcomeImage>
      </HomeSection>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  .welcome__content {
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
    .welcome__content {
      flex-direction: column-reverse;
    }
  }
`;

const WelcomeInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const WelcomeInfoContent = styled.div`
  padding-left: 1rem;
  padding: 0.5rem;

  .title {
    span {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 4rem;
  }

  .description {
    font-size: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 900px) {
    .title {
      span {
        font-size: 1.2rem;
      }
      h2 {
        font-size: 2.4rem;
      }
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Button1 = styled.button`
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-family: sans-serif;
  border-radius: 99px;
  background-color: #d0a85c;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 140px;
  font-size: 14px;
`;
const Button2 = styled(Button1)`
  background-color: #4267b2;
`;

const WelcomeImage = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  @media screen and (max-width: 900px) {
    width: 100%;
    /* margin-top: 25rem; */
    
  }

  .welcome__img__slide {
    height: 600px;
    width: 600px;
    overflow: hidden;
    object-fit: contain;

    @media screen and (max-width: 900px) {
      .welcome__img__slide {
        img {
          width: 400px;
          height: 400px;
          object-fit: contain;
        }

    }

    canvas {
      display: block;
    }
  }
`;

export default Welcome;
