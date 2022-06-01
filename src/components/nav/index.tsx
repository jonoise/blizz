import React from 'react'
import { NavItemProps } from '@appTypes/nav'
import { Flex, HStack, Image } from '@chakra-ui/react'
import Link from 'next/link'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <Flex bg='#0A0E13' align={'center'} h={10} px={10} justify='space-between'>
      <HStack spacing={5}>
        <Link href={'/'} passHref>
          <a>
            <Image
              cursor={'pointer'}
              w={68}
              src='/images/blizzard_logo.svg'
              _hover={{ opacity: 0.85 }}
            />
          </a>
        </Link>
        <HStack spacing={5}>
          {items.map((item) => (
            <NavLink key={item.id} link={item} />
          ))}
        </HStack>
      </HStack>
    </Flex>
  )
}

export default Navbar

const items: NavItemProps[] = [
  {
    id: 1,
    name: 'Juegos',
    hasDropdown: true,
    glow: true,
    children: [
      {
        id: 0,
        name: 'Diablo® II',
        href: '/',
        icon: 'https://blznav.akamaized.net/img/games/logo-d2r-00245205614e6d52.png',
      },
      {
        id: 1,
        name: 'Overwatch®',
        href: '/',
        icon: 'https://blznav.akamaized.net/img/games/logo-ow2-40a23e181ae5418a.png',
      },
      {
        id: 2,
        name: 'Word of Warcraft®',
        href: '/',
        icon: 'https://blznav.akamaized.net/img/games/logo-wow-3dd2cfe06df74407.png',
      },
      {
        id: 3,
        name: 'Hearthstone®',
        href: '/',
        icon: 'https://blznav.akamaized.net/img/games/logo-hs-93512467e87f82c6.png',
      },
      {
        id: 4,
        name: 'Heroes of the Storm®',
        href: '/',
        icon: 'https://blznav.akamaized.net/img/games/logo-heroes-78cae505b7a524fb.png',
      },
      {
        id: 5,
        name: 'Warcraft® III',
        href: '/',
        icon: 'https://blznav.akamaized.net/img/games/logo-w3r-c8a76eea272dbd55.png',
      },
      {
        id: 6,
        name: 'Starcraft®',
        href: '/',
        icon: 'https://blznav.akamaized.net/img/games/logo-scr-fef4f892c20f584c.png',
      },
      {
        id: 7,
        name: 'Starcraft® II',
        href: '/',
        icon: 'https://blznav.akamaized.net/img/games/logo-sc2-6e33583ba0547b6a.png',
      },
    ],
  },
  { id: 2, name: 'Tienda', href: '/tienda' },
  { id: 3, name: 'Noticias', href: '/noticias' },
]
