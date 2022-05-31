import React from 'react'

const Video = () => {
  return (
    <video
      style={{ position: 'absolute', top: 0, zIndex: -1 }}
      autoPlay={true}
      loop={true}
      preload='auto'
      muted={true}
    >
      <source
        src='https://bnetcmsus-a.akamaihd.net/cms/template_resource/4TBVITQDP0AW1650382032717.mp4'
        type='video/mp4'
      />
    </video>
  )
}

export default Video
