import { Box, Flex, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const MidCardOne = () => {
  return (
    <SimpleGrid columns={2}>
      {cards.map((card) => (
        <Link href={'/'}>
          <a>
            <Stack
              key={card.id}
              h={'400px'}
              bg='#211511'
              w={'full'}
              border={'1px solid orange'}
            >
              <Box
                w={'full'}
                h={'full'}
                backgroundImage={`url(${card.img})`}
                backgroundPosition={'center'}
                backgroundSize={'cover'}
                borderBottom={'1px solid #504136'}
              />
              <VStack w={'full'} justify='center' py={5}>
                <Text
                  textTransform={'uppercase'}
                  fontWeight='semibold'
                  color={'#EBDDC2'}
                >
                  {card.sub}
                </Text>
                <Text fontSize={'3xl'} fontWeight='bold' color={'brand.yellow'}>
                  {card.title}
                </Text>
              </VStack>
            </Stack>
          </a>
        </Link>
      ))}
    </SimpleGrid>
  )
}

export default MidCardOne

const cards = [
  {
    id: 0,
    img: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/H0F00HC2TXIP1645554509289.jpg',
    sub: 'Fin de la eternidad',
    title: 'Notas de la actualización de contenido',
  },
  {
    id: 1,
    img: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/YJ5F66MYA0XE1599671840973.jpg',
    sub: 'Últimas actualizaciones',
    title: 'Correciones en Vivo',
  },
]
