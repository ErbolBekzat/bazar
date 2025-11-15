import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Button,
  Card,
  HStack,
} from "@chakra-ui/react";

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Box overflow="hidden" p={4} marginLeft={0} w={350}>
      <Image
        src={product.image}
        alt={product.name}
        boxSize={350}
        objectFit="cover"
        mx="auto"
      />
      <HStack pt={4} justifyContent="space-between">
        <Heading size="md">{product.name}</Heading>
        <Text fontWeight="bold">{product.price.toFixed(2)} сом</Text>
      </HStack>
    </Box>
  );
}
