import { Flex, Grid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

interface IHeaderProps {
  isHomePage: boolean;
}

export function Header({ isHomePage }: IHeaderProps) {

  return (
    <Flex as="header" w="100%" h={["5", "20"]} mx="auto" mt="4" px={["0", "6"]} align="center" justify="center">
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW={1320}
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="center"
      >
        {!isHomePage && (
          <Link href="/">
            <Image src='/backButton.svg' width={[5, 10]} ml="6"/>
          </Link>
        )}

        <Image src='/Logo.svg' justifySelf="center" gridColumn="2" width={[20,40]}/>
      </Grid>

    </Flex>
  )
}