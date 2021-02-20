import { Box, Text } from 'rebass';
import { Order } from 'shared';

interface Props {
  order: Order;
}

export const OrderPayment: React.FC<Props> = ({ order }) => {
  const addressArr: string[] = [
    `${order.billingFirstname} ${order.billingLastname}` || '',
    order.billingAddress || '',
    order.billingAddress2 || '',
    order.billingCity || '',
    order.billingCounty || '',
    order.billingPostcode || '',
  ].filter((x) => x);

  return (
    <Box
      mb={3}
      sx={{ backgroundColor: 'orderPanel', borderRadius: 'standard', border: 'standard', p: 4 }}
    >
      <Text fontWeight="bold" mb={2}>
        Payment Method
      </Text>
      <Text mb={3}>{order.payment.name}</Text>

      <Text fontWeight="bold" mb={2}>
        Billing Address
      </Text>
      <Text>{addressArr.join(', ')}</Text>
    </Box>
  );
};
