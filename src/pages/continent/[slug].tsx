import { Box, Flex, Text } from "@chakra-ui/react";
import ArticleContinent from "../../components/ArticleContinent";
import ContinentCard from "../../components/ContinentCard";
import { Header } from "../../components/Header";


export default function Continent() {
  return (
    <>
    <Header isHomePage={false}/>
    <Flex
      w="100%"
      h={["150px", "250px", "300px", "500px"]}
      bgImage="url('/europe_france.jpg')"
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
      mt="4"
    >
      <Box display="flex" maxWidth={1320} width="100%" height="100%" alignItems={["center", "end"]} justifyContent={["center", "start"]}>
        <Text fontSize={[24, 26, 34]} fontWeight="600" mb={["0", "6","10"]} ml={["0", "6", "0"]} color="gray.900" letterSpacing={0.6}>Europa</Text>
      </Box>
    </Flex>
      
      <ArticleContinent />

      <Box maxWidth={1320} width="100%" height="100%" mx="auto" mt={20}>
        <Text fontSize={36} color="gray.700" fontWeight="500" pl={["4", 0]}>Cidades 100+</Text>
      </Box>

      <Flex maxWidth={1320} width="100%" height="100%" mx="auto" mt={20}>
        <ContinentCard />
      </Flex>
    </>
  )
}
