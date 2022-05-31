import Hero from '@components/hero'
import Navbar from '@components/nav'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default Home
