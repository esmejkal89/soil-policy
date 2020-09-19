const Xs = '500px'
const Sm = '740px'
const Md = '960px'
const Lg = '1080px'
const Xl = '1200px'
const Xxl = '1540px'

export const Theme = {
  breakpoints: [Sm, Md, Lg, Xl, Xxl],
  colors: {
    brandPrimary: '#6BD6AF',
    brandPrimaryDarken: '#4BCA9A',
    brandPrimaryLighten: '#96E0C6',
    brandSecondary: '#D9EEE6',
    lightGrey: '#F2F3F1',
    grey: '#9BB1A9',
    darkGrey: '#2D3331',
    black: '#010A19',
    white: '#FFFFFF',
  },
  fonts: {
    header: 'clarendon-text-pro, serif',
    brandFont: 'henderson-sans-basic, sans-serif',
  },
  weight: {
    regular: '400',
    semiBold: '600',
    bold: '700',
  },
  letterSpacing: {
    regular: '0',
    semiBold: '4px',
  },
  transition: '0.2s ease-in-out',
  transitionSlow: '0.4s ease-in-out',
}

const breakpoints = [
  { xs: Xs },
  { sm: Sm },
  { md: Md },
  { lg: Lg },
  { xl: Xl },
  { xxl: Xxl },
]

export const Mq = breakpoints.reduce((acc, breakpoint) => {
  const entry = Object.entries(breakpoint)[0]
  acc = { ...acc, [entry[0]]: `@media (min-width: ${entry[1]})` }
  return acc
}, {})
