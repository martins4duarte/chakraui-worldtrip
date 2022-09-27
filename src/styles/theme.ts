import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#F5F8FA",
      "800": "#DADADA",
      "700": "#47585B",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    white: "#FFFFFF",
  },
  size: {
    lg: "20px"
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
      }
    }
  }
})
