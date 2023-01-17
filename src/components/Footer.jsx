import {
  Box,
  Container,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { BiPhone, MdEmail } from "react-icons/all"

const Footer = () => {
  const footerLinks = [
    {
      icon: <MdEmail />,
      link: "mailto:info@imlarbilaw.com",
    },
    {
      icon: <BiPhone />,
      link: "tel:0266812112",
    },
  ]
  return (
    <Box
      bg="brand.50"
      _dark={{
        bg: "blackAlpha.100",
      }}
      mt={10}
    >
      <Container maxW="7xl" py={8}>
        <Stack
          w="full"
          justifyContent="space-between"
          direction={["column", "column", "row"]}
          spacing={6}
        >
          <HStack spacing={8}>
            {footerLinks.map((item, i) => (
              <IconButton
                as={Link}
                href={item.link}
                key={i}
                icon={item.icon}
                isRound
              />
            ))}
          </HStack>
          <Text fontSize="md">
            Copyright {new Date().getFullYear()} Lawyer Isaac M. Larbi. All
            rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
