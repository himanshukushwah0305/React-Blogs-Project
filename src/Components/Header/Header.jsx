import React from "react";
import style from "./header.module.css";
import HeroSlider, { Slide, Overlay } from "hero-slider";

import Wrapper from "./Wrapper/Wrapper";
import Title from "./Title/Title";

const Header = () => {
  return (
    // <div className={style.header}>
    //   <img className={style.titleImage} src={mainImg} alt="main" />
    // </div>
    <div className={style.slideWrapper}>
      <HeroSlider
        className={style.heroSlider}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 5000,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Overlay>
          <Wrapper>
            <Title>Blogs</Title>
          </Wrapper>
        </Overlay>

        <Slide
          shouldRenderMask
          label="First Blog"
          background={{
            backgroundImageSrc: "assets/image/1.jpg",
          }}
        />

        <Slide
          shouldRenderMask
          label="Second Blog"
          background={{
            backgroundImageSrc: "assets/image/2.jpg",
          }}
        />

        <Slide
          shouldRenderMask
          label="Third Blog"
          background={{
            backgroundImageSrc: "assets/image/3.jpg",
          }}
        />
      </HeroSlider>
    </div>
  );
};

export default Header;
