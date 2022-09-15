import React from "react";
import Image from "next/image";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Main, Wrap, ImageTextWrapper } from "./style";

import RightArrow from "../SliderRightArrow";
import LeftArrow from "../SliderLeftArrow";

const Slick = ({ banners }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3500,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <Main {...settings}>
        {banners.map(
          ({
            id,
            backgroundDesktop,
            titleImageDesktop,
          }) => (
            <Wrap key={id}>
              <Image
                src={backgroundDesktop}
                layout="fill"
              />
              <ImageTextWrapper>
                <img
                  src={titleImageDesktop}
                  alt="Images"
                />
              </ImageTextWrapper>
            </Wrap>
          )
        )}
      </Main>
    </>
  );
};

export default Slick;
