// src/app/shop-directory/page.tsx
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { ShopService } from "@/lib/services/shopService";
import { ROUTES } from "@/lib/constants/routes";
import { getDictionary, Locale } from "../dictionaries";

export default async function ShopsDirectoryPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const shops = ShopService.getAllShops();

  return (
    <Box p={6}>
      <Heading mb={4}>{dict.shopDirectory.shopsDirectory}</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        {shops.map((shop) => (
          <Box
            key={shop.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            _hover={{ shadow: "md" }}
          >
            {/* Pass the shop id to generate the route */}
            <Link href={ROUTES.SHOP(lang, shop.id)}>
              <Heading size="md">{shop.name}</Heading>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
