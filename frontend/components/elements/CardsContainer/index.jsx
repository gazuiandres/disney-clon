import React from "react";

import CardItem from "../CardItem";

import { CardContainer } from "./style";

const CardsContainer = () => {
  return (
    <CardContainer>
      <CardItem
        image="/images/disneyMiniLogo.png"
        video="https://res.cloudinary.com/dqd4krsof/video/upload/v1650486819/brands/disney_hgt8fe.mp4"
      />
      <CardItem
        image="/images/pixarMiniLogo.png"
        video="https://res.cloudinary.com/dqd4krsof/video/upload/v1650486812/brands/pixar_nwwhdn.mp4"
      />
      <CardItem
        image="/images/marvelMiniLogo.png"
        video="https://res.cloudinary.com/dqd4krsof/video/upload/v1650486812/brands/marvel_yk8n5f.mp4"
      />
      <CardItem
        image="/images/starWarsMiniLogo.png"
        video="https://res.cloudinary.com/dqd4krsof/video/upload/v1650486806/brands/star-wars_xdidi2.mp4"
      />
      <CardItem
        image="/images/natgeoMiniLogo.png"
        video="https://res.cloudinary.com/dqd4krsof/video/upload/v1650486819/brands/natgeo_hrwxds.mp4"
      />
    </CardContainer>
  );
};

export default CardsContainer;
