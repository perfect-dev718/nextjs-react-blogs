import { Box, Heading, Text, Button } from 'rebass';
import { CheckoutTab, CartSummary, Product, EmptiesRow } from 'shared';
import Link from 'next/link';

const Empties: React.FC = () => {
  let products: Product[] = [
    {
      id: '1',
      name: 'Bulmers Original PET, 330ml x 24',
      sku: 'ADM1234',
      productImages: {
        main: [
          {
            imagePath: '/img/demo-product.png',
          },
        ],
      },
    },
  ] as Product[];
  products = [...products, ...products];
  products = [...products, ...products];
  products = [...products, ...products];

  return (
    <Box variant="container">
      <CheckoutTab />
      <Heading sx={{ pb: [4, 0] }}>Empties return</Heading>
      <Text
        sx={{ textAlign: 'center', mt: 3, color: 'ourBlack', mb: 5, display: ['none', 'block'] }}
      >
        Select your empty returns below and add them to your order
      </Text>
      <Box variant="smallContainer" sx={{ mb: 5 }}>
        {products.map((product) => {
          return <EmptiesRow key={product.id} product={product} />;
        })}
      </Box>
      <Box sx={{ mt: [3, 3, 4] }}>
        <CartSummary />
        <Box
          sx={{
            display: 'flex',
            maxWidth: 500,
            ml: 'auto',
            mt: 3,
            whiteSpace: 'nowrap',
            fontSize: [1, 2],
          }}
        >
          <Link href="/">
            <Button variant="secondary" sx={{ flex: 1, mr: [1, 1, 2] }}>
              CONTINUE SHOPPING
            </Button>
          </Link>
          <Button variant="primary" sx={{ flex: 1 }}>
            ADD ITEMS
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Empties;
