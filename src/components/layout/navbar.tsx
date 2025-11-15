"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Button,
  useDisclosure,
  Menu,
  Portal,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ROUTES } from "@/lib/constants/routes";
import { useDict } from "@/context/dict-context";
import { ColorModeButton } from "@/components/ui/color-mode";


const LANGS = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "ky", label: "KG" },
];

export default function Navbar({ currentLang }: { currentLang: string }) {
  const { open: isOpen, onOpen, onClose } = useDisclosure();
  const dict = useDict();
  const pathname = usePathname();

  const currentLangLabel =
    LANGS.find((l) => l.code === currentLang)?.label ??
    currentLang.toUpperCase();

  // Function to get the path with a new language
  const getPathWithNewLang = (newLang: string) => {
    // Remove the current language from the pathname
    // e.g., "/ru/shop-directory/s1" -> "/shop-directory/s1"
    const pathWithoutLang = pathname.replace(`/${currentLang}`, "");
    // Add the new language
    return `/${newLang}${pathWithoutLang}`;
  };

  return (
    <Box px={{ base: 4, lg: 10 }}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack display={{ base: "none", md: "flex" }}>
          <Link href={`/${currentLang}`}>
            <Box w="100%" p="0" fontWeight="bold">
              Archa
            </Box>
          </Link>
          <Link href={ROUTES.SHOPS(currentLang)}>{dict.nav.shops}</Link>
        </HStack>

        <HStack display={{ base: "none", md: "flex" }}>
          <Link href={ROUTES.LOGIN(currentLang)}>
            <Button size="sm">{dict.nav.login}</Button>
          </Link>
          {/* Language Switcher */}
          <Menu.Root>
            <ColorModeButton />
            <Menu.Trigger asChild>
              <Button size="sm">{currentLangLabel}</Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  {LANGS.map((lang) => (
                    <Menu.Item key={lang.code} value={lang.code} asChild>
                      <Link href={getPathWithNewLang(lang.code)}>
                        {lang.label}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </HStack>

        <Box display={{ md: "none" }}>
          <Link href={`/${currentLang}`}>
            <Box w="100%" fontWeight="bold">
              Archa
            </Box>
          </Link>
        </Box>

        {/* Mobile Hamburger */}
        <IconButton
          size="md"
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </IconButton>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav">
            <Link href={ROUTES.SHOPS(currentLang)}>
              <Button w="full">{dict.nav.shops}</Button>
            </Link>
            <Link href={ROUTES.LOGIN(currentLang)}>
              <Button w="full" size="sm">
                {dict.nav.login}
              </Button>
            </Link>
            <ColorModeButton />
            {/* Mobile Language Switcher */}
            {LANGS.map((lang) => (
              <Link key={lang.code} href={getPathWithNewLang(lang.code)}>
                <Button w="full" size="sm">
                  {lang.label}
                </Button>
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
