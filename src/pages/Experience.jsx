import {
  chakra,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import React, { useState } from "react"
const Experience = () => {
  const bgColor = useColorModeValue("#94e8e7", "#00383f")
  const textColor = useColorModeValue("#000", "#ffffff")
  const iconColor = useColorModeValue("#fff", "#fff")
  const iconBg = useColorModeValue("rgb(230, 54, 5)", "rgb(230, 54, 5)")

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1)
  return (
    <Container maxW="7xl">
      <VStack mb={10} w="full" minH="100vh">
        <Heading>My Experiences</Heading>
        <Heading>
          Isaac M. Larbi,{" "}
          <chakra.span fontSize="sm" fontWeight="bold">
            Esq. LL.B.,B.L., LL.M.
          </chakra.span>
        </Heading>
        <Heading textDecoration="underline">CONTACT INFO:</Heading>
        <Heading size="md">
          THE LAW OFFICE OF ISAAC M. LARBI OKORE (EAGLE) CHAMBERS
        </Heading>
        <Text textAlign="center">
          P. O. Box KF 2792 <br /> Koforidua <br /> Office Tel/Fax: 034-202-0011{" "}
          <br />
          Cell: 026-681-3112, 027-180-0464
        </Text>
        <Text>
          Email: <Link href="info@imlarbilaw.com">info@imlarbilaw.com</Link>
          <Link href="info@imlarbilaw.com">info@imlarbilaw.com</Link>
        </Text>
        <Text>
          Website:<Link href="www.imlarbilaw.com">www.imlarbilaw.com</Link>
        </Text>
        <Heading textTransform="uppercase">Objective:</Heading>
        <Text className="text-center">
          With over twenty (20) years of legal experience as a Lawyer in
          addition to being a certified manager, coupled with a strong
          managerial background my wish is to stand to be elected as the
          President of the Eastern Region Bar and to put my experience,
          knowledge, skills, competence, and all resources available at my
          disposal to address the many bedeviling problems of the Eastern Bar
          and lawyers in general.
        </Text>
        <Heading textDecoration="underline" textTransform="uppercase">
          professional bar standing
        </Heading>
        <Heading size="md">.YEAR OF CALL TO THE GHANA BAR: 2002.</Heading>
        <Heading size="md">.STANDING AT THE GHANA BAR: 20 years.</Heading>
        <Heading textDecoration="underline" textTransform="uppercase">
          Legal Experience
        </Heading>
        <Heading size="md">
          Head of Chambers, The Law Office of Isaac M. Larbi, Okore Chambers,
        </Heading>
        <Text alignSelf="flex-start">Adweso, E/R., Ghana.</Text>
        <Text>
          Date: March 2010 till Date. <br /> • Specializing in Commercial Law,
          Property Law, Oil and Gas Law, Immigration Law and General Legal
          Practice. <br /> • Been involved in numerous land mark cases across
          the country and consults on areas such as Commercial Transactions,
          Trade and Investment, Mining, Oil and Gas Contracts, etc. <br /> •
          International Litigation and Representation of Clients including 2016
          and 2017Appearance before the Africa Union Administrative Tribunal,
          Addis Ababa, Ethiopia. • Barrister and Solicitor to the Supreme Court
          of Ghana.
        </Text>
        <Heading size="md">
          Legal Expert/Consultant, Gerson Lerhman Group, New York, USA.
        </Heading>
        <Text>
          Date 2011- till date <br /> • Oil & Gas, Energy, and Mining Consultant
          Undertakes legal consultations to international clients/investors.
          <br /> • Commercial and Business Transactions Consulting <br /> •
          General Law in Ghana.
        </Text>
      </VStack>
    </Container>
  )
}

export default Experience
