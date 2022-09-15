import React, { useEffect, useState } from "react";

import Navbar from "../../elements/Navbar";
import { Main, BackgroundContainer } from "./style";

const DescriptionLayout = ({ children, bgSrc }) => {
  const [opacity, setOpacity] = useState(1);
  let scroll = 0

  const handleScroll = () => {

    if (window.scrollY < scroll){
      setOpacity((state) => {
        return state < 1 ? (state + 0.05) : 1
      })
    }

    if(window.scrollY > scroll) {
      setOpacity((state) => {
        return state > 0.4 ? (state - 0.05) : 0.4
      })
    
    }

    scroll = window.scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Main className="container-w">{children}</Main>
      <BackgroundContainer background={bgSrc} opacityBg={opacity}>
        <div></div>
      </BackgroundContainer>
    </>
  );
};

export default DescriptionLayout;
