
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import{ Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <Flex w="100%" h={["250px", "470px"]} maxW={1320} mx="auto" mt={["5", "10"]} mb={["5", "10"]}>
      <Swiper
        slidesPerView={1}
        cssMode={true}
        className="mySwiper"
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{
          delay:4000,
        }}
        style={{width: '100%', height: '100%', flex: '1'}}
      > 
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/europe.jpg')"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"

          >
            <Link href={""}>
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.50" fontWeight="bold">Europa</Heading>
                <Text fontWeight="bold" color="gray.800" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/europe.jpg')"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"

          >
            <Link href={""}>
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.50" fontWeight="bold">Europa</Heading>
                <Text fontWeight="bold" color="gray.800" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

      </Swiper>
    </Flex>
  )
}
