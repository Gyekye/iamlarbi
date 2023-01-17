import {
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import { BiMoon, BiSun, CgMenu } from "react-icons/all"
import { NavLink, useNavigate } from "react-router-dom"
const Navigation = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Experience",
      url: "/experience",
    },
    {
      title: "Awards & Certificates",
      url: "/awards-certificates",
    },
    {
      title: "Gallery",
      url: "/gallery",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ]
  let activeStyle = {
    fontWeight: "bold",
  }
  const navigate = useNavigate()
  const { toggleColorMode } = useColorMode()
  const themeIcon = useColorModeValue(<BiMoon size={22} />, <BiSun size={22} />)
  return (
    <HStack py="3" px={[3, 6, 8]} shadow="sm" as="nav" mb={10}>
      <Link href="/">EAGLE CHAMBERS</Link>
      <Spacer />
      <HStack spacing={[4, 5, 7, 10]}>
        <HStack spacing={[4, 5, 7, 10]} display={["none", "none", "block"]}>
          {links.map((item, idx) => (
            <Link
              as={NavLink}
              key={idx}
              to={item.url}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {item.title}
            </Link>
          ))}
        </HStack>
        <IconButton
          icon={themeIcon}
          isRound
          variant="ghost"
          onClick={toggleColorMode}
        />
        <Show breakpoint="(max-width: 767px)">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Menu"
              icon={<CgMenu />}
              variant="outline"
              rounded="md"
            />
            <MenuList>
              {links.map((item, index) => (
                <MenuItem key={index} onClick={() => navigate(item.url)}>
                  {item.title}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Show>
      </HStack>
    </HStack>
  )
}

export default Navigation
