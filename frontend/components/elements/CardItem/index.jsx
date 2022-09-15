import React, {useRef} from 'react'

import {ItemContainer, WrapperContainer, PictureContainer} from './style'

const CardItem = ({image, video}) => {
  const videoRef = useRef(null)

  const handlePlayVideo = () => {
    videoRef.current.play()
  }

  const handleStopVideo = () => {
    videoRef.current.pause()
  }

  return (
    <ItemContainer onMouseOver={handlePlayVideo} onMouseOut={handleStopVideo}> 
        <WrapperContainer>
            <PictureContainer>
              <img src={image} alt="" />
              <video ref={videoRef} muted loop autoPlay playsInline>
                <source src={video} />
              </video>
            </PictureContainer>
        </WrapperContainer>
      </ItemContainer>
  )
}

export default CardItem