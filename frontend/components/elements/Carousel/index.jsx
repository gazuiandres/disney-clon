import React from "react";
import Image from "next/image";
import Link from "next/link";

import RightArrow from "../SliderRightArrow";
import LeftArrow from "../SliderLeftArrow";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Main, Wrap } from "./style";

const Carousel = ({ items }) => {

  const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <RightArrow opacity={1} />,
    prevArrow: <LeftArrow  />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          infinite: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      {items.length > 0 ? (
        <Main {...settings}>
          {items.map(({ id, thumbnailDesktop }, index) => {
            return (
              <Wrap key={id}>
                <Link href={`/watch/${id}`}>
                  <a>
                    <Image
                      src={thumbnailDesktop}
                      layout="fill"
                    />
                  </a>
                </Link>
              </Wrap>
            );
          })}
        </Main>
      ) : null}
    </>
  );
};

export default Carousel;
