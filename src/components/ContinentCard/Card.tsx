import { Box, Flex, Image, Text } from '@chakra-ui/react'

export default function Card() {
  return (
    <Box maxW='sm' borderRadius='4px' borderColor="yellow" overflow='hidden' bg="white">
      <Image src="/londres.svg" alt="" w="100%"/>
        <Flex align="center" justify="space-between" px={4} py={6} border="1px" borderWidth="0 1px 1px 1px" borderColor="yellow">
          <Box>
            <Text color="gray.700" fontWeight="600" mb={2}>Londres</Text>
            <Text fontSize="sm" fontWeight="500" fontFamily="Barlow" color="gray.200">Reino Unido</Text>
          </Box>
          <Image src="/united_kingdom.svg" w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
        </Flex>
      </Box>
  )
}
