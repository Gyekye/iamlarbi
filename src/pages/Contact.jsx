import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import React, { useState } from "react"
const Contact = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fullName, email, message)
  }

  return (
    <Container maxW="7xl">
      <VStack>
        <Heading mb={5}>Let's get in touch</Heading>
        <VStack as="form" maxW="md" w="full" onSubmit={handleSubmit}>
          <FormControl w="full">
            <FormLabel>Full name</FormLabel>
            <Input
              w="full"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              isRequired
            />
            <FormHelperText>We'll never share your name</FormHelperText>
          </FormControl>
          <FormControl w="full">
            <FormLabel>Email address</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              w="full"
              type="email"
              isRequired
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl w="full" pb={10}>
            <FormLabel>Message</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              resize="none"
              w="full"
              type="text"
              isRequired
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <Button type="submit" w="full">
            Send Message
          </Button>
        </VStack>
      </VStack>
    </Container>
  )
}

export default Contact
