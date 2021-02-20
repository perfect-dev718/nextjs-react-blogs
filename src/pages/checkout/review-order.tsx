import { Box, Heading, Text, Button } from 'rebass';
import {
  CheckoutTab,
  CartSummary,
  Payment,
  OrderSummary,
  AddressReview,
  ReviewItems,
} from 'shared';
import { AppContextComponent } from 'lib/context';
import { Textarea } from '@rebass/forms';
import { useContext } from 'react';

const ReviewOrder: React.FC = () => {
  const {
    state: { cart, currentUser },
  } = useContext(AppContextComponent);
  return (
    <Box variant="container">
      <CheckoutTab />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ pr: [2, 2, 6] }}>
          <Heading mb={4}>order review & payment</Heading>
          <Text mb={4}>
            As you have an overdue payment, this must be settled before your order can be placed.
            Please make this payment to proceed.
          </Text>
          <OrderSummary cart={cart} />
          <Box sx={{ pl: 5 }}>
            <AddressReview user={currentUser} />
            <Heading sx={{ mt: 5, fontSize: 3, color: 'ourBlack' }}>Order notes</Heading>
            <Textarea
              rows={6}
              sx={{ maxWidth: 427, mt: 3 }}
              placeholder="You can add your your notes here. You can also let us know here if require any pump clips. "
            />
          </Box>
        </Box>
        <Box sx={{ width: 376, flexShrink: 0 }}>
          <Heading>payment details</Heading>
          <Payment cart={cart} user={currentUser} />
        </Box>
      </Box>
      <Box sx={{ pl: 5, mt: 5 }}>
        <ReviewItems items={cart?.products || []} />
        <Box mb={4} />
        <CartSummary onlyOrderTotal />
        <Box sx={{ textAlign: 'right', mt: 3 }}>
          <Button variant="primary" sx={{}}>
            PLACE ORDER
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewOrder;
