import { SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";


export default function ContinentCard() {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing='60px' mx={["auto", 0]} justifyContent="start">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </SimpleGrid>
  )
}
