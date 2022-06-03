import { Box } from '@chakra-ui/react'
import React from 'react'

const Video = () => {
  return (
    <Box
      pos={'absolute'}
      h={{ base: '160vh', xl: '140vh' }}
      display={{ base: 'none', lg: 'block' }}
      bg={'red'}
    >
      <video autoPlay={true} loop={true} preload='auto' muted={true}>
        <source
          src='https://bnetcmsus-a.akamaihd.net/cms/template_resource/4TBVITQDP0AW1650382032717.mp4'
          type='video/mp4'
        />
      </video>
    </Box>
  )
}

export default Video
