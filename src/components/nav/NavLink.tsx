import { NavItemProps } from '@appTypes/nav'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Flex, Text, Box, VStack, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React, { FC } from 'react'
import { AnimateGroup, Animate } from 'react-simple-animate'

const NavLink: FC<{ link: NavItemProps }> = (props) => {
  const { link } = props
  const [isOpen, setIsOpen] = React.useState(false)

  const animation = {
    easeType: 'ease-in-out',
    duration: 0.1,
    start: { opacity: 0, transform: 'translateY(-20px)' },
    end: { opacity: 1, transform: 'translateY(0px)' },
  }

  return link.href ? (
    <Link href={link.href}>
      <a>
        <Text color={'white'} opacity={0.85} _hover={{ opacity: 1 }}>
          {link.name.toUpperCase()}
        </Text>
      </a>
    </Link>
  ) : (
    <Box>
      <Flex
        onClick={() => setIsOpen(!isOpen)}
        align={'center'}
        cursor={'pointer'}
        color={'#fff'}
        opacity={0.85}
        _hover={{ opacity: 1 }}
        textShadow={
          link.glow ? '0 0 15px #fff, 0 0 30px rgb(255 255 255 / 30%)' : ''
        }
      >
        <Text fontWeight={'medium'}>{link.name.toUpperCase()}</Text>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Flex>

      <Flex
        position={'absolute'}
        display={isOpen ? 'flex' : 'none'}
        w='full'
        bg={'#252E3E'}
        top={10}
        left={0}
        justify='space-evenly'
        px={32}
        py={5}
        color='white'
        border={'1px solid #393C45'}
        opacity={0.85}
        zIndex={1}
      >
        <AnimateGroup play={isOpen}>
          {link.children?.map((child) => (
            <Animate {...animation} key={child.id} sequenceIndex={child.id}>
              <Link href={child.href} passHref>
                <a>
                  <VStack spacing={0}>
                    <Image src={child.icon} w='14' />
                    <Text fontSize={'12px'}>{child.name}</Text>
                  </VStack>
                </a>
              </Link>
            </Animate>
          ))}
        </AnimateGroup>
      </Flex>
    </Box>
  )
}

export default NavLink
