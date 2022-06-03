import { Button, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const MidCardTwo = () => {
  return (
    <Stack spacing={0.5} bg='black'>
      {cards.map((card) => (
        <Flex
          key={card.id}
          bg='black'
          h={{ base: '300px', lg: '500px' }}
          backgroundImage={card.img}
          backgroundSize='cover'
          backgroundPosition={{ base: 'right', lg: 'center' }}
          p={4}
        >
          <Stack
            spacing={{ base: 2, lg: 4 }}
            px={'10'}
            justify={'center'}
            align={card.pos}
          >
            {card.sub && (
              <Text color='#ebddc2' fontSize='xl' fontWeight='bold'>
                {card.sub}
              </Text>
            )}
            <Text
              color={'white'}
              fontSize={{ base: 'xl', md: '2xl', lg: '5xl' }}
              fontWeight='black'
            >
              {card.title}
            </Text>
            <Text
              color='#ebddc2'
              fontSize={{ base: 'sm', lg: '22px' }}
              w={{ base: 'full', md: '70%' }}
              textAlign={card.pos === 'start' ? 'left' : 'right'}
            >
              {card.desc}
            </Text>
            <HStack spacing={5}>
              {card.buttons.map((button) => (
                <Button key={button.id} variant={button.variant}>
                  {button.text}
                </Button>
              ))}
            </HStack>
          </Stack>
        </Flex>
      ))}
    </Stack>
  )
}

export default MidCardTwo

const cards = [
  {
    id: 0,
    img: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/F9VWAE5PICXN1652375623136.jpg',
    sub: 'Burning Crusade Classic',
    title: 'La Furia de La Fuente del Sol',
    desc: "El deshonrado príncipe Kael'thas Caminante del Sol planea usar la legendaria Fuente del Sol, de la que mana el poder mágico de los elfos de sangre, para invocar al señor demoníaco Kil'jaeden en Azeroth. Uníos a la batalla en Burning Crusade Classic™ con vuestra suscripción a World of Warcraft. No es necesario adquirirlo de nuevo.",
    buttons: [
      { id: 1, variant: 'secondary', text: 'Suscribirse' },
      { id: 2, variant: 'primary', text: 'Más información' },
    ],
    pos: 'start',
  },
  {
    id: 1,
    img: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/46/46OSV36CIXTP1574128358849.jpg',
    title: 'Recluta a un amigo',
    desc: 'Trae a tus amigos a Azeroth, participad en épicas aventuras juntos y conseguid recompensas increíbles. Podrás disfrutar de beneficios únicos en el juego, desde tiempo de juego a monturas y mascotas, cuando tus amigos se unan a ti para luchar por la Horda o la Alianza.',
    buttons: [{ id: 1, variant: 'primary', text: 'Más información' }],
    pos: 'end',
  },
  {
    id: 2,
    img: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/8QSYJYIUCWVL1651616704229.jpg',
    sub: 'Warcraft Arclight Rumble',
    title: 'Héroes en miniatura. Diversión gigantesca.',
    desc: 'Preparaos para participar en una nueva y deslumbrante sensación que arrasa en las posadas y tabernas de toda la región con este frenético juego de estrategia para móviles; próximamente en iOS y Android.',
    buttons: [
      { id: 1, variant: 'primary', text: 'Regístrate' },
      { id: 2, variant: 'secondary', text: 'Más información' },
    ],
    pos: 'start',
  },
  {
    id: 3,
    img: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/2EV7X4AJDZSX1635275922909.jpg',
    sub: 'Nueva montura en la tienda',
    title: 'Un amiguito purrfecto',
    desc: 'Este mágico felino de ojos verde esmeralda y cola de zorrillo puede llevarte por todo Azeroth sin el menor esfuerzo. Pero lo que a él le gusta es estar donde brilla el sol entre las hojas otoñales...',
    buttons: [{ id: 1, variant: 'primary', text: 'Comprar' }],
    pos: 'start',
  },
]
