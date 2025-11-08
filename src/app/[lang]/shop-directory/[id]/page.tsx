import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "@/features/products/components/productCard";
import { ShopService } from "@/lib/services/shopService";
import { getDictionary, Locale } from "../../dictionaries";

interface ShopPageProps {
  params: Promise<{
    id: string;
    lang: Locale;
  }>;
}

export default async function ShopStorefront({ params }: ShopPageProps) {
  // Await params first
  const { id, lang } = await params;
  console.log("lang: " + lang);
  const dict = await getDictionary(lang);
  const shop = id ? ShopService.getShopById(id) : null;

  if (!shop)
    return (
      <Box p={6}>
        <Text>{dict.shopPage.shopNotFound}</Text>
      </Box>
    );

  return (
    <Box p={6}>
      <Heading mb={4}>{shop.name}</Heading>
      <Heading size="md" mb={2}>
        {dict.shopPage.products}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 5 }}>
        {shop.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
