// import './section.scss'
import styled from "styled-components";
const Section = (props) => {
  return <div className={`section ${props.className}`}>{props.children}</div>;
};

export const SectionContent = (props) => {
  const bgImage = props.bgImage
    ? {
        backgroundImage: `url(${props.bgImage})`,
      }
    : {};

  return (
    <div className={`section__content ${props.className}`} style={bgImage}>
      {props.children}
    </div>
  );
};

const div = styled.div`
  .section {
    padding: 5rem;
    height: 100%;
    overflow: hidden;
    visibility: hidden;
    transition: visibility 1s ease;

    &.active {
      visibility: visible;
    }

    &.active &section__content {
      transform: scale(1);
      opacity: 1;
      transition-delay: 0.3s;
    }

    &section__content {
      position: relative;
      height: 100%;
      transform: scale(3);
      opacity: 0;
      transition: transform 0.6s ease, opacity 0.5s ease;
      padding-top: $header-height;
    }
  }
`;

export default Section;
