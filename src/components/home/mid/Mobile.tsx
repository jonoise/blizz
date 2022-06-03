import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Mobile = () => {
  return (
    <Box
      pos={'absolute'}
      h={{ base: '50%', xl: '140vh' }}
      display={{ base: 'block', lg: 'none' }}
      w='full'
      bg={'red'}
      backgroundImage='https://bnetcmsus-a.akamaihd.net/cms/template_resource/0JFDRGOV8UTV1623254306639.jpg'
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    ></Box>
  )
}

export default Mobile
