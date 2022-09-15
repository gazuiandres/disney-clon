import React from 'react'

import {Button} from './style'

const RightArrow = ({ className, style, onClick, opacity }) => {
  return (
    <Button style={{ ...style }} onClick={onClick}  opacity={opacity} >
        <img src="/images/rightArrow.png" alt="" />
    </Button>
  )
}

export default RightArrow