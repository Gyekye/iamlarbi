import {
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import moment1 from "../assets/meet1.jpeg"
import moment2 from "../assets/meet2.jpg"
import moment3 from "../assets/meet3.jpg"
import moment7 from "../assets/slide1.jpg"
import moment6 from "../assets/slide2.jpg"
import moment4 from "../assets/slide3.jpg"
import moment5 from "../assets/slide4.jpg"
const Gallery = () => {
  const moments = [
    {
      image: moment1,
      description:
        "Lawyer Larbi emerging from the High Court with other lawyers",
    },
    {
      image: moment2,
      description: "Lawyer Larbi and Francis Adjei, a renowned Gospel Musician",
    },
    {
      image: moment3,
      description: "Lawyer Larbi and Daughters of Glorious Jesus",
    },
    {
      image: moment4,
      description:
        "Lawyer Larbi with Congresswoman Shiela Jackson Lee(middle) representing Texas 18th Congressional District, USA",
    },
    {
      image: moment5,
      description:
        "Lawyer Larbi with General Obasanjo, former President of the Republic of Nigeria",
    },
    {
      image: moment6,
      description:
        "Lawyer Larbi with the late Gen. Collin Powell. The first black US Secretary of State",
    },
    {
      image: moment7,
      description:
        "Lawyer Larbi emerging from the high court with other lawyers",
    },
  ]
  return (
    <Container maxW="7xl">
      <Heading textAlign="center" mb={8}>
        Key moments with Mr. Larbi
      </Heading>
      <SimpleGrid w="full" columns={[1, 2, 3, 4]} spacing={8}>
        {moments.map((item, index) => (
          <VStack
            pos="relative"
            key={index}
            w="full"
            rounded="md"
            overflow="hidden"
            spacing={0}
          >
            <Image
              w="full"
              objectFit="cover"
              src={item.image}
              alt={item.description}
            />
            <Text
              _dark={{
                bg: "blackAlpha.100",
              }}
              p={2}
              bg="brand.50"
              fontSize="md"
            >
              {item.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Gallery
