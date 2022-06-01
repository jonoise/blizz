import Hero from '@components/home/hero'
import MidCardOne from '@components/home/mid/MidOne'
import MidCardTwo from '@components/home/mid/MidTwo'
import Navbar from '@components/nav'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MidCardOne />
      <MidCardTwo />
    </>
  )
}

export default Home
