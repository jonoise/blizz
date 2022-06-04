import { Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const GameRecommendations = () => {
  return (
    <Stack p={{ base: 2, md: 10 }}>
      <Heading color={'white'}>Recomendado</Heading>
      <SimpleGrid gap={8} columns={{ base: 1, md: 2, xl: 4 }}>
        {gRecomendations.map((game) => (
          <Flex
            key={game.id}
            direction={'column'}
            h='96'
            bg={'store.lightDark'}
            transition='all 0.2s'
            _hover={{ bg: 'store.hoverLightDark' }}
          >
            <Flex
              w={'full'}
              h='90%'
              bg='black'
              backgroundImage={game.img}
              backgroundSize={'cover'}
            />
            <Stack p={4} h='full' transition={'all 0.3s ease-in-out'}>
              <Text color={'gray.400'} fontWeight={'bold'}>
                {game.smTitle}
              </Text>
              <Text color={'white'} fontSize='2xl' fontWeight={'bold'}>
                {game.lgTitle}
              </Text>
              <Text color={'brand.yellow'} fontSize='xs' fontWeight={'medium'}>
                {game.lgTitle}
              </Text>
              <Text color={'gray.300'} fontSize='xs' fontWeight={'medium'}>
                {game.desc}
              </Text>
            </Stack>
            <Flex p={4}>
              {game.discount ? (
                <Flex key={game.id} w={'full'} justify={'space-between'}>
                  <Stack direction={'row'} align='center'>
                    <Text
                      color={'store.toxicGreen'}
                      fontSize='lg'
                      fontWeight={'black'}
                    >
                      {game.discount.current}
                    </Text>
                    <Text
                      color={'gray.300'}
                      textDecoration='line-through'
                      fontSize='lg'
                      fontWeight={'medium'}
                    >
                      {game.discount.previous}
                    </Text>
                  </Stack>
                  <Text
                    p={2}
                    rounded='md'
                    bg={'store.toxicGreen'}
                    color={'store.dark'}
                    fontSize='xs'
                    fontWeight={'black'}
                  >
                    {game.discount.percent}
                  </Text>
                </Flex>
              ) : (
                <Text color={'white'} fontSize='lg' fontWeight={'bold'}>
                  {game.price}
                </Text>
              )}
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default GameRecommendations

const gRecomendations = [
  {
    id: 0,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blte5dd6a11c612a8e9/61dcd708819be248ba631437/COD_Vanguard_Standard_Edition.jpg?width=400&format=webpll',
    smTitle: 'Call of Duty: Vanguard',
    lgTitle: 'Call of Duty®: Vanguard',
    desc: '¡Hazte con el paquete de armas Primera línea!',
    type: 'Shooter de acción',
    price: '59.99 USD',
  },
  {
    id: 1,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltdc3386232e72f844/61255751c8e665143d536841/21974-168304.png?width=400&format=webpll',
    smTitle: 'Diablo II: Resurected',
    lgTitle: 'Diablo II: Resurected™',
    desc: 'Ya disponible!',
    type: '(RPG) Juego de rol/acción',
    price: '39.99 USD',
  },
  {
    id: 2,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt711ed7fdb73c6b1e/61fc20c69ff4612b05e74aa7/CODWZ_S2-Bnet-Product_Browsing_Card-960x540.jpg?width=400&format=webpll',
    smTitle: 'Call of Duty: MW',
    lgTitle: 'Call of Duty®: Warzone',
    type: 'Gratis para todos',
    desc: 'Shooter de acción',
    price: 'Juega gratis',
  },
  {
    id: 3,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltdc0c6c8beecf995e/612548e8fe89ee250efa2e67/17680-68930.png?width=400&format=webpll',
    smTitle: 'Call of Duty: MW',
    lgTitle: 'Call of Duty®: Modern Warfare®',
    type: '¡Juega a Warzone gratis ahora!',
    desc: 'Shooter de acción',
    price: '29.99 USD',
    discount: { current: '29.99 USD', previous: '59.99 USD', percent: '50%' },
  },
  {
    id: 4,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt8fa71e71bc40af51/61254c606ab1961306bd21ef/19160-61810.png?width=400&format=webpll',
    smTitle: 'Word of Warcraft',
    lgTitle: 'Word of Warcraft®: Shadowlands',
    type: '¡Adéntrate en Shadowlands! ¡Ya está disponible!',
    desc: '(MMORPG) Juego de rol multijugador online',
    price: '39.99 USD',
  },
  {
    id: 5,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt3330ec75d5d92fb7/624f28e6c6d11125f3c9af93/HS_23p0_Available_Now_PRODUCT-THUMB-960x540.jpg?width=400&format=webpll',
    smTitle: 'Hearthstone',
    lgTitle: 'Sobres de Viaje a la Ciudad Sumergida',
    type: '',
    desc: 'Sobre de cartas',
    price: '2.99 USD',
  },
  {
    id: 6,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt16f1a7dc997454e4/612537fd2e1d9b34a6b104f6/7515-20991.png?width=400&format=webpll',
    smTitle: 'Overwatch',
    lgTitle: 'Overwatch®',
    type: '',
    desc: 'Juego de acción por equipos',
    price: '2.99 USD',
    discount: { current: '14.99 USD', previous: '19.99 USD', percent: '25%' },
  },
  {
    id: 8,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt7dfb952258470306/6137fde3568fbb37922f9d81/21729-160949.png?width=400&format=webpll',
    smTitle: 'World of Warcraft',
    lgTitle: 'WoW®: edición de lujo de Burning Crusade',
    type: 'Burning Crusade se incluye en la suscripción de WoW',
    desc: 'Mejoras de juego',
    price: '69.99 USD',
  },
]
