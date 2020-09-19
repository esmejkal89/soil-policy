import React from 'react'
import HowItWorks from '../assets/videos/how-it-works.mp4'

const HomepageVideo = () => {
  return (
    <video
      autoplay="true"
      preload="auto"
      title="How it works"
      src={HomepageVideo}
      width="auto"
      height="600px"
      controls
    >
      <source src={HowItWorks} type="video/mp4" />
    </video>
  )
}
export default HomepageVideo
