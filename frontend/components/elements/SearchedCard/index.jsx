import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CardContainer, ImageContainer } from './style'

const SearchedCard = ({image, id}) => {
  return (
      <Link href={`/watch/${id}`}>
        
        <CardContainer>
          <ImageContainer>
              <Image src={image} layout='fill' />
            </ImageContainer>
        </CardContainer>
      </Link>
  )
}

export default SearchedCard