import { extendTheme } from '@chakra-ui/react'
import { ThemeButton } from './ThemeButton'

export const customTheme = extendTheme({
  components: {
    Button: ThemeButton,
  },
  colors: {
    brand: {
      orange: '#f7b10a',
      red: '#9f1600',
      yellow: '#f8b700',
      blue: '#00aeff',
    },
    store: {
      dark: '#15171E',
      lightDark: '#22252A',
      hoverLightDark: '#303338',
      toxicGreen: '#6CDA02',
    },
  },
})
