import React from 'react'

import Carousel from '../Carousel'
import { Section } from './style'

const CarouselContainer = ({title, items}) => {

  return (
    <Section>
        <h4>{title}</h4>
        <Carousel items={items}/>
    </Section>
  )
}

export default CarouselContainer