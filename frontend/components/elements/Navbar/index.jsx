import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import { Nav, LogoContainer, ListContainer } from "./style";

import DesktopElements from "./DesktopElements";
import MobileElements from "./MobileElements";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  const isTablet = useMediaQuery({
    query: "(min-device-width: 800px)",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Nav>
      <LogoContainer>
        <Link href="/">
          <a>
            <Image
              src="/images/disneyLogo.png"
              width={80}
              height={49}
              alt="disneyLogo"
            />
          </a>
        </Link>
      </LogoContainer>
      <ListContainer>
        {mounted && (isTablet ? <DesktopElements /> : <MobileElements />)}
      </ListContainer>
    </Nav>
  );
};

export default Navbar;
