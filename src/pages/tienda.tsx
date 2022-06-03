import { NextPage } from 'next'
import React from 'react'
import { Box } from '@chakra-ui/react'
import StoreSlider from '@components/store/slider'
import StoreNav from '@components/store/nav'
import GamesRow from '@components/store/gamesRow'
import GameRecommendations from '@components/store/recomendations'

const StorePage: NextPage = (props) => {
  return (
    <Box bg={'store.dark'}>
      <StoreNav />
      <StoreSlider />
      <GamesRow />
      <GameRecommendations />
    </Box>
  )
}

export default StorePage
