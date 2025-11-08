import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Button,
  Card,
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
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} marginLeft={4} >
      {product.image && (
        <Image
          src={product.image}
          alt={product.name}
          boxSize="150px"
          objectFit="cover"
          mx="auto"
        />
      )}
      <Stack mt={2} textAlign="center">
        <Heading size="md">{product.name}</Heading>
        <Heading size="md">{product.description}</Heading>
        <Text fontWeight="bold">${product.price.toFixed(2)}</Text>
      </Stack>
    </Box>
  );
}
