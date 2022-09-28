import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function ChooseYourContinentLabel() {
  return (
    <Box mt="4" mx="auto">
      <Text 
        align="center" 
        justifyContent="center" 
        color="gray.700"
        fontWeight="500"
        fontSize={[18, 22, 28]}
      >
        Vamos nessa?<br /> 
        Então escolha seu continente
      </Text>
    </Box>
  )
}
