import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import image6 from "../assets/gallery-person-2.jpeg"
import image5 from "../assets/gallery-person-3.jpeg"
import image4 from "../assets/gallery-person-4.jpeg"
import image1 from "../assets/hero.png"
import image2 from "../assets/larbi.jpeg"
import image3 from "../assets/slide5.jpeg"

const About = () => {
  const personalPictures = [image1, image2, image3, image4, image5, image6]
  return (
    <Container maxW="7xl">
      <Heading textAlign="center" textTransform="uppercase" spacing={5} mb={5}>
        About Mr. Isaac Minta Larbi
      </Heading>
      <VStack mb={5}>
        <Heading alignSelf="flex-start">Life & Education</Heading>
        <Text>
          Mr. Isaac Minta Larbi attended his primary school at Good News
          International School at Adweso a town sharing boundary with Koforidua.
          He proceeded to obtain his “O” Level and “A” Level Certificates from
          Koforidua Secondary Technical School in 1993 and Ghana Secondary
          School in 1995 all in Koforidua, E/R respectively. He holds an LL.B.
          from the Faculty of Law University of Ghana where he graduated in the
          year 2000. He proceeded to the Ghana School of Law where he obtained
          his B.L. qualification and became a lawyer in Ghana in 2002. Lawyer
          Isaac Minta Larbi then went to pursue further studies in the USA where
          he obtained an LL.M. (Master of Laws) from the American University
          Washington College of Law in Washington D.C., USA in 2003. He has
          previous working experiences at the Center for International Policy,
          Washington, D.C, USA, the War Crimes Research Office, Washington D.C.,
          USA, and presently the owner and Head of Chambers of The Law Office of
          Isaac M. Larbi, Okore Chambers, a private law firm at Adweso, E/R. Mr.
          Isaac M. Larbi was called to the Ghana Bar in October, 2002 and has 20
          years experience at the Ghana Bar. His other experiences include
          judging four (4) oral rounds and two (2) legal memos as an
          International Judge in the Phillip C. Jessup International Law Moot
          Court Competition, Washington, DC USA in both 2003 and 2004
          respectively. He contributed as a Legal Research Officer to the Book
          titled “Capitalism Achilles Heels” published by Raymond Baker of the
          Brookings Institute and also of the Center for International Policy in
          Washington DC, USA. Same book won the award “One of the Best Business
          Books in the Year 2005” by The Financial Times of USA. Mr. Larbi was
          awarded the “Academic Consortium Certificate of Excellence” by the
          Office of the Prosecutor, Special Court for Sierra Leone, in October,
          2003 for his work as a Legal Research Officer at the War Crimes
          Research Office. He was also awarded the 2002 Dean Grossman
          Scholarship in International Law, American University Washington
          College of Law and the ILSP International Law Scholarship, American
          University Washington College of Law, Washington, DC. Mr. Larbi has
          participated in many international training programs including
          Peacekeeping training at the Lester B. Pearson International
          Peacekeeping Training Center in Nova Scotia, Canada, The Global
          Alliance for Justice Education World Conference in Durban, South
          Africa, as well as the American Society of International Law programs
          in Washington D.C., USA. He is also a product of the International Law
          Institute, Washington, D.C., USA. Mr. Larbi was the SRC President of
          the Ghana School of Law for the 2001 – 2002 academic year and during
          his time, being a benevolent person, he personally registered the
          Ghana School of Law with his own funds to become a member of the
          International Law Students Association (ILSA) which allowed the school
          to participate for the first time in the history of the Ghana School
          of Law in the Phillip C. Jessup International Moot Court Competition
          in 2002. Today this competition has become expanded with many law
          schools in Ghana competing to represent Ghana at the august
          competition in Washington DC each year. Mr. Isaac M. Larbi has many
          write ups and publications many of which are available online and has
          an article titled “International Treaty Obligations v International
          War Crimes; Analyzing United States Article 98 Agreements of the
          International Criminal Court in the Context of International Legal
          Principles” published in the Law Student Journal tilted “Eyes On The
          ICC Journal, Vol. 1 No. 1, 177 (2004).” Amongst the many land mark
          cases he has handled in his private practice as a lawyer Mr. Larbi
          appeared before the Administrative Tribunal of the African Union,
          Addis Ababa, Ethiopia in 2016 and 2017 to represent his client from
          Cameroun against the African Peer Review Mechanism (APRM) of the
          African Union in which he obtained judgment for his client in 2017. As
          a competent lawyer one of the cases he did all the way to the Supreme
          Court of Ghana has been published in the Law Reports of Ghana to be
          used as an Authority to guide lawyers and judges in dong their cases.
          This case is reported in the Ghana Monthly Judgments, in a suit titled
          “Dennis Torgbenu and 2 Ors Vs. Torgbe Nakakpo Dugbaza VIII (2019) 137
          GMJ 202 SC.”
        </Text>
      </VStack>
      <SimpleGrid
        w="full"
        columns={[1, 2, 3]}
        spacing={6}
        spacingY={14}
        mb={10}
      >
        {personalPictures.map((picture, index) => (
          <Box
            alignSelf="center"
            w="xs"
            h="xs"
            rounded="full"
            overflow="hidden"
            key={index}
          >
            <Image
              w="full"
              h="full"
              objectFit="cover"
              src={picture}
              alt="Lawyer Larbi"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default About
