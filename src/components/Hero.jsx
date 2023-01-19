import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react"
import React, { useCallback, useRef } from "react"
import { AiOutlineRight } from "react-icons/ai"
import { BiLeftArrow, BiRightArrow } from "react-icons/all"
import { useNavigate } from "react-router-dom"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import slide5 from "../assets/gallery-person-3.jpeg"
import heroImage from "../assets/hero.png"
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
import slide4 from "../assets/slide4.jpg"

const Hero = () => {
  const slides = [
    {
      image: slide1,
      title: "The guy who is always ready to help",
    },
    {
      image: slide2,
      title: "The guy who is always ready to help",
    },
    {
      image: slide3,
      title: "The guy who is always ready to help",
    },
    {
      image: slide4,
      title: "The guy who is always ready to help",
    },
    {
      image: slide5,
      title: "The guy who is always ready to help",
    },
  ]
  const [isDesktop] = useMediaQuery("(min-width: 976px)")
  const [isTablet] = useMediaQuery("(min-width:768px)")
  const navigate = useNavigate()
  const getSlidesPerView = () => {
    if (isDesktop) {
      return 3
    } else if (isTablet) {
      return 2
    } else return 1
  }
  const sliderRef = useRef(null)
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])
  return (
    <Container maxW="7xl">
      <Stack
        direction={["column-reverse", "column-reverse", "row"]}
        w="full"
        justifyContent="center"
        alignItems="center"
        spacing={8}
        mb={28}
      >
        <VStack alignItems="flex-start" flex="1" spacing={8}>
          <Heading
            textAlign={["center", "left"]}
            size={["lg", "md", "lg", "xl"]}
            w="full"
          >
            Legal Professional Expert <br /> Lawyer Larbi
          </Heading>
          <Text>
            With almost twenty (20) years of legal and management experience, my
            objective is to continue to provide legal representation to
            corporate institutions and individuals, where with a huge experience
            in various aspects of the law, I can provide excellent legal
            services comparable to none in the legal industry.
          </Text>

          <Button
            alignSelf={{ md: "center", lg: "flex-start" }}
            rightIcon={<AiOutlineRight />}
            w={["full", "auto"]}
            px={14}
            py={6}
            onClick={() => navigate("/contact")}
          >
            Get In Touch
          </Button>
        </VStack>
        <VStack flex="1">
          <Box
            w={["xs", "sm", "md"]}
            h={["xs", "sm", "md"]}
            bg="brand.100"
            pos="relative"
            overflow="hidden"
            rounded="full"
          >
            <Image
              src={heroImage}
              w="full"
              pos="absolute"
              top="-12"
              left="-5"
              objectFit="cover"
              alt="Lawyer Larbi"
            />
          </Box>
        </VStack>
      </Stack>
      <Swiper
        loop={true}
        grabCursor
        slidesPerView={getSlidesPerView()}
        spaceBetween={20}
        modules={[Autoplay]}
        speed={1000}
        ref={sliderRef}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Box w="full" h={["xs", "sm"]}>
              <Image
                w="full"
                rounded="md"
                h="full"
                objectFit="cover"
                src={slide.image}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <HStack justifyContent="space-between" mt={5}>
        <IconButton icon={<BiLeftArrow />} onClick={handlePrev} />
        <IconButton icon={<BiRightArrow />} onClick={handleNext} />
      </HStack>
    </Container>
  )
}

export default Hero
