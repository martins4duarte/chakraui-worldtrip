import { Flex, Text, HStack, Box, Image, SimpleGrid } from '@chakra-ui/react'

export default function ArticleContinent() {
  return (
    <Flex maxWidth={1320} width="100%" align="center" justify="center" mx="auto" mt={["6", "8", "24"]}>
      <SimpleGrid columns={[1,2]} spacing={[6, 14, 20]}>
        <Text maxWidth={620} width="100%" fontWeight="400" color="gray.700" textAlign="justify" fontSize={[13.8, 18, 25]} lineHeight={["21px", "36px"]} px={["4", "8", 0]}>
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural,
          o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>
        <HStack width="100%" spacing="40px" align="center" justify="center">
          <Box display="flex" flexDirection="column" alignItems={["start", "center"]}>
            <Text color="yellow" fontWeight="600" fontSize={[28, 26, 42]}>50</Text>
            <Text color="gray.700" fontWeight={["400","600"]} fontSize={[16,24]}>países</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems={["start", "center"]}>
            <Text color="yellow" fontWeight="600" fontSize={[28, 26, 42]}>60</Text>
            <Text color="gray.700" fontWeight={["400","600"]} fontSize={[16,24]}>línguas</Text>
          </Box>
          <Flex flexDirection="column" align={["start", "center"]}>
            <Text color="yellow" fontWeight="600" fontSize={[28, 26, 42]}>27</Text>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Text color="gray.700" fontWeight={["400","600"]} fontSize={[16,24]}>cidades +100</Text>
              <Image src='/Info.svg' ml="2"/>
            </Box>
          </Flex>
        </HStack>
      </SimpleGrid>
    </Flex>
  )
}
