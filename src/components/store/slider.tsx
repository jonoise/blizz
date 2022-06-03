import React from 'react'
import Link from 'next/link'
import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const StoreSlider = () => {
  return (
    <Box p={10}>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <Flex
              bg={'black'}
              h='60vh'
              w={'full'}
              backgroundSize='cover'
              backgroundPosition='bottom'
              backgroundImage={{ base: s.mdImg, lg: s.xlImg }}
              py='10'
              px={{ base: '10', lg: '40' }}
              justify={{ base: 'center', lg: 'flex-start' }}
              align={{ base: 'flex-end', lg: 'center' }}
            >
              <VStack spacing={{ base: 3, lg: 6 }}>
                <Image src={s.topImg} w={{ base: '190px', lg: '240px' }} />
                <Text
                  maxW={{ base: 'full', md: '300px', lg: '280px' }}
                  fontWeight='black'
                  fontSize={{ base: 'md', lg: 'xl' }}
                  color={'white'}
                >
                  {s.desc}
                </Text>
                {s.buttons.map((b) => (
                  <Link key={b.id} href={b.url} passHref>
                    <a>
                      <Button
                        bg={'#0074e0'}
                        color='white'
                        rounded={'sm'}
                        fontWeight='bold'
                        px={10}
                        py={7}
                        _hover={{ bg: '#0074a3' }}
                      >
                        {b.content}
                      </Button>
                    </a>
                  </Link>
                ))}
              </VStack>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default StoreSlider

const slides = [
  {
    id: 0,
    xlImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltd220aab2a994191f/62974055a6a544113cef0346/[DESKTOP]_Immortal_Launch-1600x500.png?width=1568&format=webpll',
    mdImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt965f21fa975ea443/6297405586408f6142a038e5/[MOBILE]_Immortal_Launch-928x400.png?width=960&format=webpll',
    topImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt8e0c71b84bff39ed/621d4db5e47e3d2eff210074/Diablo_Immortal_logo-enUS.png?width=320&format=webpll',
    desc: 'Beta abierta gratis en PC ya disponible en determinadas regiones',
    buttons: [
      {
        id: 0,
        content: 'Más información',
        url: 'https://us.shop.battle.net/es-es/product/diablo-immortal',
        variant: 'slider',
      },
    ],
  },
  {
    id: 1,
    xlImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt488351b255e545b5/6291347879e67e7e69e8f7f3/WoW_FactionChangeUpdate_Battlenet_Banners_Desktop_1600x500_HS02.png?width=1568&format=webpll',
    mdImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt027fae77bd59ccdd/62913478472e8f7cff38954b/WoW_FactionChangeUpdate_Battlenet_Banners_Mobile_928x400_HS02.png?width=960&format=webpll',
    topImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltd014e6bca294a28f/60d38b8188f6b5505ef15c09/35550-1.png?width=320&format=webpll',
    desc: 'Ahorrad a lo grande en servicios de juego seleccionados',
    buttons: [
      {
        id: 0,
        content: 'Comprar ahora',
        url: 'https://us.shop.battle.net/es-es/family/world-of-warcraft#game-services',
        variant: 'slider',
      },
    ],
  },
  {
    id: 2,
    xlImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt3de03f70183cf852/60e4a03f2ef84950640d2404/1223_desktop.png?width=1568&format=webpll',
    mdImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt45827ebe1eaa2270/60e4a041b8a7b64ec4000eaa/1123_mobile.png?width=960&format=webpll',
    topImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltdcb2da9f07292513/628407e327feda2cf707f4b7/Updated_LARGE_Logo_MWII_Base_Game-Bnet_Game-Product_Logo-3000px_Wide.png?width=520&format=webpll',
    desc: 'Permanece alerta para no perderte el anuncio global de Modern Warfare II el 8 de mayo',
    buttons: [
      {
        id: 0,
        content: 'Comprar ahora',
        url: 'https://us.shop.battle.net/es-es/product/call-of-duty-modern-warfare',
        variant: 'slider',
      },
    ],
  },
  {
    id: 3,
    xlImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltcc9e312abfaf4a2e/62978f7a93a8cd11271378f2/HS_23p4_Sunken_Treasures_BG_Bundle_BNet_Shop_Desktop-1600x500_RN01.jpg?width=1568&format=webpll',
    mdImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt6a61bb37dbaaa3c7/62978f7a95358a627f6d6fe2/HS_23p4_Sunken_Treasures_BG_Bundle_BNet_Shop_Mobile-928x400_RN02.jpg?width=960&format=webpll',
    topImg:
      'https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/bltfbca49350d8edd3c/62978f29c78cd56278f0b1b4/HS23_Voyage_tt_Sunken_City_Logo_MiniSet_esES_wHS.png?width=320&format=webpll',
    desc: 'Desentierra nuevos tesoros con el miniset de 35 cartas Trono de las Mareas',
    buttons: [
      {
        id: 0,
        content: 'Comprar ahora',
        url: 'https://us.shop.battle.net/es-es/product/hearthstone-throne-of-the-tides-mini-set',
        variant: 'slider',
      },
    ],
  },
]
