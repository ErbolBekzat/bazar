"use client";
import { Box, Text } from "@chakra-ui/react";
import { useDict } from "@/context/dict-context";

export default function Footer() {
  const dict = useDict();

  return (
    <Box py={6} mt={12} textAlign="center">
      <Text fontSize="sm">{dict.footer.copyright}</Text>
      <Text fontSize="sm">
        {dict.footer.contact}: <a href="mailto:info@bazar.kg">info@bazar.kg</a>
      </Text>
    </Box>
  );
}
