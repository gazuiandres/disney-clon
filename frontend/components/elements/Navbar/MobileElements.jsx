import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ListElement } from "./style";

const MobileElements = () => {
  return (
    <>
      <ListElement>
        <Link href="/">
          <span>
            <Image
              src="/images/homeIcon.png"
              width={14}
              height={13}
              alt="disneyLogo"
            />
          </span>
        </Link>
      </ListElement>
      <ListElement>
        <Link href="/search">
          <span>
            <Image
              src="/images/searchIcon.png"
              width={13}
              height={13}
              alt="disneyLogo"
            />
          </span>
        </Link>
      </ListElement>
      <ListElement>
        <Link href="/movies">
          <span>
            <Image
              src="/images/moviesIcon.png"
              width={17}
              height={13}
              alt="disneyLogo"
            />
          </span>
        </Link>
      </ListElement>
      <ListElement>
        <Link href="/series">
          <span>
            <Image
              src="/images/seriesIcon.png"
              width={13}
              height={13}
              alt="disneyLogo"
            />
          </span>
        </Link>
      </ListElement>
    </>
  );
};

export default MobileElements;
