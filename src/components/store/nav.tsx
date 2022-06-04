import React from 'react'
import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

const StoreNav = () => {
  return (
    <Flex h={'60px'} bg={'store.dark'} px='5' justify={'space-between'}>
      <Image w={'200px'} src='/battlenet.svg' />
      <HStack spacing={10} display={{ base: 'none', lg: 'flex' }}>
        <Link href={'/'}>
          <a>
            <HStack>
              <Image src='https://bnetshopus.akamaized.net/static/images/icons/system/download.svg' />
              <Text fontSize={'sm'} color={'gray.200'}>
                Descargar Battlet.net
              </Text>
            </HStack>
          </a>
        </Link>
        <Link href={'/'}>
          <a>
            <Text fontSize={'sm'} color={'gray.200'}>
              Asistencia
            </Text>
          </a>
        </Link>
        <Link href={'/'}>
          <a>
            <Text fontSize={'sm'} color={'gray.200'}>
              Mi Cuenta
            </Text>
          </a>
        </Link>
      </HStack>
    </Flex>
  )
}

export default StoreNav
