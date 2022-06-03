import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const GamesRow = () => {
  return (
    <Flex w={'full'} bg='store.dark' px={10}>
      <HStack
        bg='store.lightDark'
        justify='center'
        w={'full'}
        p={4}
        spacing='6'
        rounded={'md'}
      >
        <Text color={'white'} fontWeight={'bold'} textTransform='uppercase'>
          Juegos
        </Text>
        <Flex wrap={'wrap'}>
          {games.map((g) => (
            <Link href={g.href}>
              <a>
                <Box key={g.id} mr='4'>
                  <Image w={10} src={g.img} />
                </Box>
              </a>
            </Link>
          ))}
        </Flex>
      </HStack>
    </Flex>
  )
}

export default GamesRow

const games = [
  {
    id: 0,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltb7c1db49cad77069/60a81b45b078b00d8a909fce/world-of-warcraft.svg',
    href: 'https://us.shop.battle.net/es-es/family/world-of-warcraft',
  },
  {
    id: 1,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt9582745a3585002b/60db86c9ad189d64efcca224/world-of-warcraft-classic.svg',
    href: 'https://us.shop.battle.net/es-es/family/world-of-warcraft-classic',
  },
  {
    id: 2,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt658c764be11bbed4/60db86bbce1eb95db45df71b/call-of-duty-warzone.svg',
    href: 'https://us.shop.battle.net/es-es/family/call-of-duty-warzone',
  },
  {
    id: 3,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltdbe988a11f72d788/6179f1c61bb8c23cf8bbe9c4/VanguardGold.svg',
    href: 'https://us.shop.battle.net/es-es/family/call-of-duty-vanguard',
  },
  {
    id: 4,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt9b410089e8178011/60db86bb3681555f01d08321/call-of-duty-black-ops-cold-war.svg',
    href: 'https://us.shop.battle.net/es-es/family/call-of-duty-black-ops-cold-war',
  },
  {
    id: 5,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt492af3d8b35e50b5/60db86bb2d26525ef67ac5a4/call-of-duty-mw.svg',
    href: 'https://us.shop.battle.net/es-es/family/call-of-duty-mw',
  },
  {
    id: 6,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt959140aefa0792de/60db86bbad189d64efcca220/call-of-duty.svg',
    href: 'https://us.shop.battle.net/es-es/family/call-of-duty',
  },
  {
    id: 7,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt5538a5cdb0e16552/60db86c967d3385db9b805be/hearthstone.svg',
    href: 'https://us.shop.battle.net/es-es/family/hearthstone',
  },
  {
    id: 8,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt59cf83e466644d55/60db86c92d26525ef67ac5a8/overwatch.svg',
    href: 'https://us.shop.battle.net/es-es/family/overwatch',
  },
  {
    id: 9,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltbd25b04a73bbceb9/625e043588d84e24b5018c4b/DIablo_Immortal_Icon_Final_Vector_Flat_Resize.svg',
    href: 'https://us.shop.battle.net/es-es/family/diablo-immortal',
  },
  {
    id: 10,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt9ba52a3f1100a00c/60db86c967d3385db9b805ba/diablo-ii.svg',
    href: 'https://us.shop.battle.net/es-es/family/diablo-ii',
  },
  {
    id: 11,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltcadd0c49e316fea2/60db86c9ce1eb95db45df71f/starcraft-ii.svg',
    href: 'https://us.shop.battle.net/es-es/family/starcraft-ii',
  },
  {
    id: 12,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blte2114932bc6a3b4b/60db86c94ff91563ab257a00/starcraft-remastered.svg',
    href: 'https://us.shop.battle.net/es-es/family/starcraft-remastered',
  },
  {
    id: 13,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltc013d62eab6b634f/60db86c9ef929764f0bb47ba/warcraft-iii.svg',
    href: 'https://us.shop.battle.net/es-es/family/warcraft-iii',
  },
  {
    id: 14,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blte9a32f331b70f4a0/60db86c93681555f01d08325/heroes-of-the-storm.svg',
    href: 'https://us.shop.battle.net/es-es/family/heroes-of-the-storm',
  },
  {
    id: 15,
    img: 'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltb39d6b2c23d8be08/60db86bb2b55c663af1b7110/crash-bandicoot-4.svg',
    href: 'https://us.shop.battle.net/es-es/family/crash-bandicoot-4',
  },
]
