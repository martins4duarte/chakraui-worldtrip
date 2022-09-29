import { Box, SimpleGrid, Image, Text, Flex, useBreakpointValue, Stack, Grid, GridItem } from '@chakra-ui/react'

export default function TravelTypes() {

  const isLargeThan992px = useBreakpointValue({
    base: false,
    lg: true
  })



  return (

    <Flex w="100%" align="center" justify="center" mt={["2", "2", "20"]}>
      {!isLargeThan992px
        ?
        <Stack>
          <SimpleGrid columns={2} spacingX="30px" spacingY='2px' alignItems="center">
            <Box width="100%" height='80px' display="flex" alignItems="center" justifyContent="center">
              <Text color="yellow" fontSize="4xl" mr="2">•</Text>
              <Text color="gray.700" fontWeight="500" fontSize={20}>vida noturna</Text>
            </Box>
            <Box height='60px' display="flex" alignItems="center" justifyContent="center">
              <Text color="yellow" fontSize="4xl" mr="2">•</Text>
              <Text color="gray.700" fontWeight="500" fontSize={20}>praia</Text>
            </Box>
            <Box height='60px' display="flex" alignItems="center" justifyContent="center">
              <Text color="yellow" fontSize="4xl" mr="2">•</Text>
              <Text color="gray.700" fontWeight="500" fontSize={20}>moderno</Text>
            </Box>
            <Box height='60px' display="flex" alignItems="center" justifyContent="center">
              <Text color="yellow" fontSize="4xl" mr="2">•</Text>
              <Text color="gray.700" fontWeight="500" fontSize={20}>clássico</Text>
            </Box>
          </SimpleGrid>
          <Box height='60px' display="flex" alignItems="center" justifyContent="center">
            <Text color="yellow" fontSize="4xl" mr="2">•</Text>
            <Text color="gray.700" fontWeight="500" fontSize={20}>e mais...</Text>
          </Box>
        </Stack>
        :
        <Grid templateColumns='repeat(5, 1fr)' width="100%" maxWidth={1320}>
          <GridItem w='100%' h='40' maxWidth={120} alignItems="center" justifyContent="center" mx="auto">
            <Stack align="center" justify="center">
              <Image src='/cocktail.svg' />
              <Text color="gray.700" fontWeight="600" fontSize="16px" pt="4">vida noturna</Text>
            </Stack>
          </GridItem>
          <GridItem w='100%' h='40' maxWidth={120} alignItems="center" justifyContent="center" mx="auto">
            <Stack align="center" justify="center">
              <Image src='/surf.svg' />
              <Text color="gray.700" fontWeight="600" fontSize="16px" pt="4">praia</Text>
            </Stack>
          </GridItem>
          <GridItem w='100%' h='40' maxWidth={120} alignItems="center" justifyContent="center" mx="auto">
            <Stack align="center" justify="center">
              <Image src='/museum.svg' />
              <Text color="gray.700" fontWeight="600" fontSize="16px" pt="4">moderno</Text>
            </Stack>
          </GridItem>
          <GridItem w='100%' h='40' maxWidth={120} alignItems="center" justifyContent="center" mx="auto">
            <Stack align="center" justify="center">
              <Image src='/building.svg' />
              <Text color="gray.700" fontWeight="600" fontSize="16px" pt="4">clássico</Text>
            </Stack>
          </GridItem>
          <GridItem w='100%' h='40' maxWidth={120} alignItems="center" justifyContent="center" mx="auto">
            <Stack align="center" justify="center">
              <Image src='/earth.svg' alignItems="center" />
              <Text color="gray.700" fontWeight="600" fontSize="16px" pt="4">e mais...</Text>
            </Stack>
          </GridItem>
        </Grid>
      }
    </Flex>
  )
}
