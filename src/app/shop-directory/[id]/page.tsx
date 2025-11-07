import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "@/features/products/components/productCard";
import { ShopService } from "@/lib/services/shopService";

interface ShopPageProps {
  params: {
    id: string;
  };
}

export default async function ShopStorefront({ params }: ShopPageProps) {
  const { id } = await params;
  const shop = id ? ShopService.getShopById(id) : null;

  if (!shop) return <Box p={6}>Shop not found</Box>;

  return (
    <Box p={6}>
      <Heading mb={4}>{shop.name}</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        {shop.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
