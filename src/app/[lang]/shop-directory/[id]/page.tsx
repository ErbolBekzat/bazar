import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "@/features/products/components/productCard";
import { ShopService } from "@/lib/services/shopService";
import { getDictionary } from "../../dictionaries";

interface ShopPageProps {
  params: Promise<{
    id: string;
    lang: string;
  }>;
}


export default async function ShopStorefront({ params }: ShopPageProps) {
  // Await params first
  const { id, lang } = await params;
  const dict = await getDictionary(lang);
  const shop = id ? ShopService.getShopById(id) : null;

  if (!shop)
    return (
      <Box p={6}>
        <Text>{dict.shopPage.shopNotFound}</Text>
      </Box>
    );

  return (
    <Box px={4}>
      <Heading mb={4}>
        {shop.name} 
      </Heading>
      <Heading size="md" mb={2}>
        {dict.shopPage.products}
      </Heading>
      <SimpleGrid gap={4} columns={{ base: 1, xs: 2, sm: 3, md: 4, lg: 4, xl: 5, "2x1": 7 }}>
        {shop.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}