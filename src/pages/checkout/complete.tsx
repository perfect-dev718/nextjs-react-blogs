import { Box, Text, Heading, Button } from 'rebass';
import { CheckoutTab } from 'shared';
import Link from 'next/link';

const Complete: React.FC = () => {
  return (
    <Box variant="container">
      <CheckoutTab></CheckoutTab>
      <Heading sx={{ mt: 4 }}>order complete</Heading>
      <Box
        sx={{
          backgroundColor: 'brandThree.11',
          px: 5,
          py: 4,
          maxWidth: 672,
          mt: 3,
          fontWeight: 700,
          fontSize: 3,
        }}
      >
        <Text mb={3}>Order Total: £400.99</Text>
        <Text>Order Number: 1234566</Text>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Text>Order Complete! We’ll send you an order confirmation email with the details</Text>
        <Link href="/">
          <Button variant="primary">continue shopping</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Complete;
