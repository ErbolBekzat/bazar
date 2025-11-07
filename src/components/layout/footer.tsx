import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box py={6} mt={12} textAlign="center">
      <Text fontSize="sm" >
        © {new Date().getFullYear()} Bazar. Helping local merchants go online.
      </Text>
      <Text fontSize="sm" >
        Contact: <a href="mailto:info@bazar.kg">info@bazar.kg</a>
      </Text>
    </Box>
  );
}
