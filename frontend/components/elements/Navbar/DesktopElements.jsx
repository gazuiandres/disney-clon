import React from 'react'
import Link from 'next/link'
import Image from "next/image";


import { ListElement } from "./style";


const DesktopElements = () => {
  return (
    <>
      <ListElement>
        <span>
          <Image
            src="/images/homeIcon.png"
            width={14}
            height={13}
            alt="disneyLogo"
          />
        </span>
        <Link href="/">
          <a>inicio</a>
        </Link>
      </ListElement>
      <ListElement>
        <span>
          <Image
            src="/images/searchIcon.png"
            width={13}
            height={13}
            alt="disneyLogo"
          />
        </span>
        <Link href="/search">
          <a>búsqueda</a>
        </Link>
      </ListElement>
      <ListElement>
        <span>
          <Image
            src="/images/moviesIcon.png"
            width={17}
            height={13}
            alt="disneyLogo"
          />
        </span>
        <Link href="/movies">
          <a>películas</a>
        </Link>
      </ListElement>
      <ListElement>
        <span>
          <Image
            src="/images/seriesIcon.png"
            width={13}
            height={13}
            alt="disneyLogo"
          />
        </span>
        <Link href="/series">
          <a>series</a>
        </Link>
      </ListElement>
    </>
  )
}

export default DesktopElements