import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Mobile from '../mid/Mobile'
import Video from './Video'

const Hero = () => {
  return (
    <Box pos={'relative'} overflow='hidden' bg={'black'}>
      <Video />
      <Mobile />
      <Stack
        px={10}
        minH={'90vh'}
        justify={'center'}
        color={'white'}
        maxW={{ base: '100%', md: '100%', lg: '60%' }}
        align={{ base: 'center', md: 'center', lg: 'inherit' }}
        spacing='5'
        zIndex={4}
      >
        <Heading
          textShadow={'0 0 1px transparent, 0 1px 2px rgb(0 0 0 / 80%)'}
          fontSize={{ base: '5xl', xl: '6xl' }}
          textAlign={{ base: 'center', md: 'left' }}
          zIndex={2}
          fontFamily='Blinker'
        >
          ANUNCIO DE DRAGONFLIGHT
        </Heading>
        <Text
          zIndex={2}
          fontSize={{ base: 'lg', xl: '2xl' }}
          textAlign={{ base: 'center', lg: 'left' }}
          textShadow='0 0 1px transparent, 0 1px 2px rgb(0 0 0 / 80%)'
          color={'#EBDDC2'}
        >
          Los Vuelos de Azeroth están a punto de regresar, convocados para
          defender su hogar ancestral, las Islas Dragón. Suscríbete a
          Shadowlands y juega hoy mismo para prepararte de cara al próximo
          capítulo de la saga Warcraft: ¡Dragonflight!
        </Text>
        <Box zIndex={4}>
          <Link href={'/'}>Explorar Dragonflight</Link>
        </Box>
        <HStack>
          <Flex border={'1px solid black'}>
            <Button variant={'primary'}>Trailer Cinemático</Button>
          </Flex>
          <Flex border={'1px solid black'}>
            <Button variant={'secondary'}>Suscribirse</Button>
          </Flex>
        </HStack>
      </Stack>

      <Stack position={'relative'} px={10} my='10' top='-10px'>
        <Text
          color={'white'}
          fontSize='28px'
          fontFamily={'Blinker'}
          fontWeight={'600'}
          textTransform={'uppercase'}
        >
          Últimas noticias y actualizaciones
        </Text>
        <SimpleGrid my={10} columns={{ base: 1, lg: 2, xl: 4 }} gap={10}>
          {articles.map((article) => (
            <Link key={article.id} href={`/`} passHref>
              <a>
                <Flex
                  width={'100%'}
                  h={{ base: '200px', md: '350px', lg: '180px' }}
                  bg='black'
                  backgroundImage={`url(${article.img})`}
                  backgroundSize='cover'
                  backgroundPosition={'50% 50%'}
                  border='1px solid rgba(248, 182, 0, 0.5)'
                  _hover={{ border: '1px solid rgba(248, 182, 0, 1)' }}
                  alignItems={'end'}
                >
                  <Stack p={2}>
                    <Text
                      color={'white'}
                      textShadow='0 0 1px transparent, 0 1px 2px rgb(0 0 0 / 80%)'
                    >
                      {article.date}
                    </Text>
                    <Text
                      color={'brand.yellow'}
                      fontWeight='bold'
                      textShadow='0 0 1px transparent, 0 1px 2px rgb(0 0 0 / 80%)'
                      fontSize={{ base: 'sm', md: 'lg', xl: 'xs' }}
                    >
                      {article.title}
                    </Text>
                  </Stack>
                </Flex>
              </a>
            </Link>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  )
}

export default Hero

const articles = [
  {
    id: 0,
    img: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/mq/MQN8X69AJCNK1653505249887.png',
    date: '25 de mayo del 2022',
    title:
      '¡La actualización de contenido 9.2.5 de Shadowlands llega el 1 de junio!',
  },
  {
    id: 1,
    img: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/u6/U6DZXCTVMQYG1651769294024.jpg',
    date: '12 de mayo del 2022',
    title:
      'Burning Crusade Classic: ¡ya está abierta la Meseta de La Fuente del Sol! ',
  },
  {
    id: 2,
    img: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/ga/GAM7VM8U1I4Z1651596923274.jpg',
    date: '03 de mayo del 2022',
    title: '¡Presentado Warcraft® Arclight Rumble™!',
  },
  {
    id: 3,
    img: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/5w/5WQZN0EPVRSB1595866399195.jpg',
    date: '21 de abril del 2022',
    title:
      "Temporada de maestría: ¡Ya está disponible el esfuerzo de guerra en Ahn'Qiraj!",
  },
]
