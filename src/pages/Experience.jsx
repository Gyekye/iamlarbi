import { Container, Heading, useColorModeValue, VStack } from "@chakra-ui/react"
import React from "react"
import { BiBriefcase } from "react-icons/all"
import pdf from '../assets/cv.pdf'
const Experience = () => {
  const bgColor = useColorModeValue("#94e8e7", "#00383f")
  const textColor = useColorModeValue("#000", "#ffffff")
  const iconColor = useColorModeValue("#fff", "#fff")
  const iconBg = useColorModeValue("rgb(230, 54, 5)", "rgb(230, 54, 5)")
  const experiences = [
    {
      date: "2002 - 2003",
      title: "Research Fellow",
      text: "War Crimes Research Office, American University, Washington College of Law, Washington, DC, USA",
      icon: <BiBriefcase />,
    },
    {
      date: "2003 - 2004",
      title: "International Judge Philip C.",
      text: "Jesus International Law Moot Court Competition, Washington, DC, USA",
      icon: <BiBriefcase />,
    },
    {
      date: "2003 - 2005",
      title: "Legal Researcher",
      text: "The Center for International Policy (CIP), Washington, DC, USA",
      icon: <BiBriefcase />,
    },
    {
      date: "2004 - 2008",
      title: "Legal Consultant",
      text: "African Community Council, Washington, DC, USA (Part time)",
      icon: <BiBriefcase />,
    },
    {
      date: "2005 - 2008",
      title: "Contract Attorney",
      text: "Update Legal, Washington, DC, USA (Part time)",
      icon: <BiBriefcase />,
    },
    {
      date: "2009 - 2010",
      title: "Associate Lawyer",
      text: "Yaw Barimah & Co, Afisem Chambers, Koforidua, Ghana",
      icon: <BiBriefcase />,
    },
    {
      date: "2009 - 2011",
      title: "Claw Lecturer",
      text: "Koforidua Technical University, Koforidua, Ghana",
      icon: <BiBriefcase />,
    },
    {
      date: "2010 - 2023",
      title: "Head of Chambers",
      text: "The Law office of Isaac M. Larbi Okore Chambers",
      icon: <BiBriefcase />,
    },
    {
      date: "2011 - 2023",
      title: "Legal Expert/Consultant",
      text: "Gerson Lehrman Group, New York, USA",
      icon: <BiBriefcase />,
    },
  ]
  
  return (
    <Container maxW="7xl">
      <VStack mb={10} w="full" minH='100vh'>
        <Heading>My Experiences</Heading>
        <object
          data={pdf}
          type="application/pdf"
          width="100%"
          height="100%"
          style={{
            minHeight:"98vh"
          }}
        >
          <p>
            Alternative text - include a link{" "}
            <a href="http://africau.edu/images/default/sample.pdf">
              to the PDF!
            </a>
          </p>
        </object>
      </VStack>
    </Container>
  )
}

export default Experience