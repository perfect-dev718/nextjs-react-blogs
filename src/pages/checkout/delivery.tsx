import { Box, Button } from 'rebass';
import { DeliveryDatePicker, CheckoutTab, CartSummary } from 'shared';
import Link from 'next/link';

const Delivery = () => {
  return (
    <Box variant="container">
      <CheckoutTab></CheckoutTab>
      <DeliveryDatePicker></DeliveryDatePicker>
      <Box sx={{ mt: [3, 3, 4] }}>
        <CartSummary />
        <Box sx={{ display: 'flex', maxWidth: 500, ml: 'auto', mt: 3, whiteSpace: 'nowrap' }}>
          <Link href="/cart">
            <Button variant="secondary" sx={{ flex: 1, mr: [1, 1, 2] }}>
              BACK TO BASKET
            </Button>
          </Link>
          <Link href="/checkout/empties">
            <Button variant="primary" sx={{ flex: 1 }}>
              CONTINUE
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Delivery;
