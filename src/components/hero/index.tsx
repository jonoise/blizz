import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Video from './Video'

const Hero = () => {
  return (
    <Box pos={'relative'}>
      <Video />
      <Stack
        px={10}
        minH={'100vh'}
        justify={'center'}
        color={'white'}
        maxW={'60%'}
        spacing='5'
      >
        <Heading
          textShadow={'0 0 1px transparent, 0 1px 2px rgb(0 0 0 / 80%)'}
          fontSize={'52px'}
        >
          ANUNCIO DE DRAGONFLIGHT
        </Heading>
        <Text
          fontSize={'22px'}
          textShadow='0 0 1px transparent, 0 1px 2px rgb(0 0 0 / 80%)'
          color={'#EBDDC2'}
        >
          Los Vuelos de Azeroth están a punto de regresar, convocados para
          defender su hogar ancestral, las Islas Dragón. Suscríbete a
          Shadowlands y juega hoy mismo para prepararte de cara al próximo
          capítulo de la saga Warcraft: ¡Dragonflight!
        </Text>
        <Link href={'/'}>Explorar Dragonflight</Link>
        <HStack>
          <Flex border={'1px solid black'}>
            <Button variant={'primary'}>Trailer Cinemático</Button>
          </Flex>
          <Flex border={'1px solid black'}>
            <Button variant={'secondary'}>Suscribirse</Button>
          </Flex>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Hero
