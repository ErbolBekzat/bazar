"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ROUTES } from "@/lib/constants/routes";

export default function Navbar() {
  const { open: isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href={ROUTES.HOME}>
          <Box w="100%" p="4" fontWeight="bold">
            Bazar
          </Box>
        </Link>

        {/* Desktop Menu */}
        <HStack display={{ base: "none", md: "flex" }}>
          <Link href={ROUTES.SHOPS}>
            <Button >Shops</Button>
          </Link>
          <Link href={ROUTES.LOGIN}>
            <Button size="sm" >
              Login
            </Button>
          </Link>
        </HStack>

        {/* Mobile Hamburger Button */}
        <IconButton
          
          size="md"
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </IconButton>
      </Flex>

      {/* Mobile Dropdown */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav">
            <Link href={ROUTES.SHOPS}>
              <Button >Shops</Button>
            </Link>
            <Link href={ROUTES.LOGIN}>
              <Button size="sm" color="black">
                Login
              </Button>
            </Link>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
