import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export function Header() {

  return (
    <Flex as="header" w="100%" h="20" mx="auto" mt="4" px="6" align="center" justify="center">
      <Image src='/Logo.svg'/>
    </Flex>
  )
}