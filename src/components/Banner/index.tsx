import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Banner() {
  const isLargeThan992px = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w="100%"
      h={["230px", "250px", "300px", "335px"]}
      bgImage="url('/Background.png')"
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
      mt="4"
    >
      <Flex width="100%" height="100%" maxWidth={1320}>
        <Box alignItems="center" justifyContent="center" px={["4", "4", "8", "8"]}>
          <Heading color="gray.900" fontSize={[22,26,32]} fontWeight="medium" pt={["10", "12", "16"]} lineHeight={["32px","36px","55px"]}>
            5 Continentes,<br /> infinitas possibilidades.
          </Heading>
          <Text fontSize={["md", "lg"]} color="gray.800" mt={["2", "4", "6"]}>
            Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou.
          </Text>
        </Box>


        { isLargeThan992px && (<Image src='/Airplane.svg' ml="auto" mb="-10"/>) }
        
      </Flex>
    </Flex>
  )
  }
    

  

