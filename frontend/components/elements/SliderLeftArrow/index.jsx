import React from 'react'

import {Button} from './style'

const LeftArrow = ({ style, onClick, opacity }) => {
  return (
    <Button style={{ ...style }} onClick={onClick} opacity={opacity}>
        <img src="/images/leftArrow.png" alt="" />
    </Button>
  )
}

export default LeftArrow