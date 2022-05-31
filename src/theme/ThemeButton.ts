export const ThemeButton = {
  variants: {
    primary: {
      rounded: 'none',
      textTransform: 'uppercase',
      bg: 'rgba(0, 0, 0, 0.4)',
      color: 'brand.orange',
      p: 6,
      border: '1px solid #f7b10a',
      _hover: { bg: '#cf6e00', color: '#ffd87a' },
      _focus: { boxShadow: 'none' },
      _active: { bg: 'brand.orange', opacity: '0.8' },
    },
    secondary: {
      rounded: 'none',
      bg: 'rgba(159, 22, 0, 0.65)',
      py: 6,
      px: 12,
      border: '1px solid #9f1600',
      color: 'brand.orange',
      textTransform: 'uppercase',
      _hover: {
        bg: '#9f1600',
        color: '#ffd87a',
        borderColor: '#ff2e0d',
      },
    },
    link: {
      rounded: 'none',
      fontWeight: 'hairline',
      color: 'white',
      fontSize: 'sm',
      _active: {
        color: 'gray.300',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
  },
}
