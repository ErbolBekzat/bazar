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
    <Box overflow="hidden" p={0} w="100%">
      <Image
        src={product.image}
        alt={product.name}
        w="100%"
        h={{ base: "180px", sm: "180px", md: "220px", lg: "260px" }}
        objectFit="cover"
        rounded="md"
      />
      <Stack
        pt={3}
        direction={{ base: "column", lg: "row" }} // column on mobile, row on lg+
        justifyContent="space-between"
        align={{ base: "flex-start", lg: "center" }}
      >
        <Heading size={{ base: "sm", md: "md" }}>{product.name}</Heading>
        <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
          {product.price.toFixed(2)} сом
        </Text>
      </Stack>
    </Box>
  );
}


