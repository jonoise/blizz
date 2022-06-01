import { Flex } from '@chakra-ui/react'
import Hero from '@components/hero'
import Navbar from '@components/nav'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Flex minH={'100vh'} bg='red'></Flex>
    </>
  )
}

export default Home
