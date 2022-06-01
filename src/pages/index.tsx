import Footer from '@components/footer'
import Hero from '@components/home/hero'
import MidCardOne from '@components/home/mid/MidOne'
import MidCardTwo from '@components/home/mid/MidTwo'
import Navbar from '@components/nav'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>World of Blizzclone</title>
      </Head>
      <Navbar />
      <Hero />
      <MidCardOne />
      <MidCardTwo />
      <Footer />
    </>
  )
}

export default Home
