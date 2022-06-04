import React, { FC, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Flex,
  Text,
  HStack,
  Image,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from '@chakra-ui/icons'
import { NavItemProps } from '@appTypes/nav'

interface MobileProps {
  links: NavItemProps[]
}

const Mobile: FC<MobileProps> = (props) => {
  const { links } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [navOpen, setNavOpen] = useState(false)
  const btnRef = React.useRef(null)

  return (
    <>
      <Flex ref={btnRef} onClick={onOpen}>
        <Text color={'white'}>
          <HamburgerIcon />
        </Text>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'store.dark'}>
          <DrawerCloseButton color={'white'} />
          <DrawerHeader></DrawerHeader>
          <DrawerBody color={'white'} fontWeight='bold'>
            {links.map((link) =>
              link.children ? (
                <Accordion allowMultiple>
                  <AccordionItem
                    borderTopWidth={0}
                    borderBottomWidth={0}
                    border={0}
                  >
                    <AccordionButton
                      fontWeight='bold'
                      _focus={{ boxShadow: 'none' }}
                      p={0}
                    >
                      {link.name.toUpperCase()}
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel p={0}>
                      {link.children.map((child) => (
                        <HStack>
                          <Image w={10} src={child.icon} />
                          <Text>{child.name}</Text>
                        </HStack>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ) : (
                <>
                  <Text>{link.name.toUpperCase()}</Text>
                </>
              )
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Mobile
