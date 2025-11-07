// src/pages/page.tsx
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { ShopService } from "@/lib/services/shopService"; // fetch mock shops
import { ROUTES } from "@/lib/constants/routes";

export default function HomePage() {
  const shops = ShopService.getAllShops(); // mock data array

  return (
    <Box>
      {/* Hero / Landing Section */}
      <Box textAlign="center" py={16} px={4} >
        <Heading size="2xl" mb={4} >
          Discover Local Stores in Kyrgyzstan
        </Heading>
        <Text fontSize="lg" mb={6} >
          Bazar helps small and mid-level merchants showcase their products
          online easily.
        </Text>
        <Flex justify="center" gap={4} flexWrap="wrap">
          <Link href={ROUTES.SHOPS}>
            <Button size="lg">
              Explore Stores
            </Button>
          </Link>
          <Link href={ROUTES.SHOPS}>
            <Button size="lg" variant="outline">
              Add My Store
            </Button>
          </Link>
        </Flex>
      </Box>

      {/* Featured Shops */}
      <Box p={6}>
        <Heading size="lg" mb={4}>
          Featured Shops
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          columnGap="6"
          rowGap="6"
        >
          {shops.slice(0, 6).map((shop) => (
            <Box
              key={shop.id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              _hover={{ shadow: "md" }}
            >
              <Heading size="md" mb={2}>
                {shop.name}
              </Heading>
              <Text fontSize="sm" mb={2}>
                {shop.description}
              </Text>
              <Link href={ROUTES.SHOP(shop.id)}>
                <Button size="sm" colorScheme="teal">
                  Visit Shop
                </Button>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
