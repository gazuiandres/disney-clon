import React from "react";
import axios from "axios";
import Image from "next/image";

import DescriptionLayout from "../../components/layouts/DescriptionLayout";

import {
  DescriptionContainer,
  LogoContainer,
  InformationContainer,
  InformationImageContainer,
  PlayContainer,
  Button,
  ButtonElementsContainer,
  ButtonText,
  TextContainer,
} from "../../styles/pages/description";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/api/audiovisuals/${id}`
  );

  return {
    props: {
      audiovisual: data.data,
    },
  };
}

const watchElement = ({ audiovisual }) => {

  if (audiovisual) {
    const createdDate = new Date(audiovisual.createdDate).getFullYear();
    const updatedDate = new Date(audiovisual.updatedDate).getFullYear();
    const categories = audiovisual.categories.map((item) => {
      return item.name;
    });

    return (
      <>
        <DescriptionLayout bgSrc={audiovisual.background}>
          <DescriptionContainer>
            <LogoContainer>
              <Image src={audiovisual.logoDesktop} layout="fill" />
            </LogoContainer>

            <InformationContainer>
              <div>
                <InformationImageContainer>
                  <picture>
                    <img src="/images/ageAdvise.png" alt="Age card" />
                  </picture>
                  <picture>
                    <img
                      src="/images/audioDescription.png"
                      alt="Audio Description"
                    />
                  </picture>
                  <picture>
                    <img src="/images/subtitleDescription.png" alt="subtitle" />
                  </picture>
                </InformationImageContainer>
                <p>
                  {createdDate}{" "}
                  {createdDate < updatedDate ? `- ${updatedDate}` : ""}
                  {audiovisual.type == "serie" && " • "}
                  {audiovisual.type == "serie" &&
                    (audiovisual.numberSeasons > 1
                      ? `${audiovisual.numberSeasons} temporadas`
                      : `${audiovisual.numberSeasons} temporada`)}
                </p>
              </div>
              <p>{categories && categories.join(", ")}</p>
            </InformationContainer>

            <PlayContainer>
              <Button bgColor="#f9f9f9" color="black" wrapper={true}>
                <ButtonElementsContainer>
                  <img src="/images/playButton.png" alt="Play Button" />
                  <ButtonText margin="0 0 0 12px">{"tráiler"}</ButtonText>
                </ButtonElementsContainer>
              </Button>

              <Button
                bgColor="#0000004d"
                withBorder={true}
                borderColor="#f9f9f9"
                borderSize="1px"
                typeBorder="solid"
                color="#f9f9f9"
                hoverBg="#f9f9f9"
                hoverColor="black"
                wrapper={true}
              >
                <ButtonElementsContainer>
                  <ButtonText>{"tráiler"}</ButtonText>
                </ButtonElementsContainer>
              </Button>
            </PlayContainer>

            <TextContainer color="#f9f9f9">
              <p>{audiovisual.synopsis}</p>
            </TextContainer>
          </DescriptionContainer>
        </DescriptionLayout>
      </>
    );
  }
};

export default watchElement;
