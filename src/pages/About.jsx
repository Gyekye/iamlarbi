import { chakra, Container, Heading, Text, VStack } from "@chakra-ui/react"
import React from "react"

const About = () => {
  return (
    <Container maxW="7xl">
      <Heading textAlign="center" textTransform="uppercase" spacing={5} mb={5}>
        About Mr. Isaac Minta Larbi
      </Heading>
      <VStack mb={5}>
        <Heading alignSelf="flex-start">Life & Education</Heading>
        <Text>
          Isaac Minta Larbi is a lawyer with 20 years of experience at the Ghana
          Bar. He attended primary school at Good News International School and
          obtained his "O" and "A" Level Certificates from Koforidua Secondary
          Technical School and Ghana Secondary School in 1995. He holds an LL.B.
          from the Faculty of Law at the University of Ghana and an LL.M. from
          the American University Washington College of Law. He has previously
          worked at the Center for International Policy and War Crimes Research
          Office in Washington D.C., and currently runs his own law firm,{" "}
          <chakra.span color="brand.500" fontWeight="bold">
            The Law Office of Isaac M.
          </chakra.span>{" "}
          Larbi. He has also served as an International Judge in the Phillip C.
          Jessup International Law Moot Court Competition, and has been
          recognized with awards such as the "Academic Consortium Certificate of
          Excellence" and the 2002 Dean Grossman Scholarship in International
          Law. He has participated in international training programs and has
          several publications and landmark cases to his credit.
        </Text>
      </VStack>
    </Container>
  )
}

export default About
