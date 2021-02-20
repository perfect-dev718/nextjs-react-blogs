import { format } from 'date-fns';
import { Box, Flex, Text } from 'rebass';
import { Order, resolveOrderStatus } from 'shared';

interface Props {
  order: Order;
}

export const OrderDetailPanel: React.FC<Props> = ({ order }) => {
  const deliveryDate = format(new Date(parseInt(order.timestamp) * 1000), 'do MMM yyyy');
  const orderDate = format(new Date(parseInt(order.timestamp) * 1000), 'do MMM yyyy');

  const addressArr: string[] = [
    `${order.shippingFirstname} ${order.shippingLastname}` || '',
    order.shippingAddress || '',
    order.shippingAddress2 || '',
    order.shippingCity || '',
    order.shippingCounty || '',
    order.shippingPostcode || '',
  ].filter((x) => x);

  return (
    <Box
      mb={3}
      sx={{ backgroundColor: 'orderPanel', borderRadius: 'standard', border: 'standard', p: 4 }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          rowGap: 3,
          mb: 4,
        }}
      >
        <Flex flexDirection="column">
          <Text fontWeight="bold" mb={2}>
            Order Number
          </Text>
          <Text>{order.id}</Text>
        </Flex>

        <Flex flexDirection="column">
          <Text fontWeight="bold" mb={2}>
            Date Ordered
          </Text>
          <Text>{orderDate}</Text>
        </Flex>

        <Flex flexDirection="column">
          <Text fontWeight="bold" mb={2}>
            Status
          </Text>
          <Text>{resolveOrderStatus(order.status)}</Text>
        </Flex>

        <Flex flexDirection="column">
          <Text fontWeight="bold" mb={2}>
            Amount Paid
          </Text>
          <Text>£{order.total.toFixed(2)}</Text>
        </Flex>
      </Box>

      <Text fontWeight="bold" fontSize={3} color="brandTwo.0" mb={3}>
        To be delivered on: {deliveryDate}
      </Text>

      <Text fontWeight="bold" mb={2}>
        Delivery Address
      </Text>
      <Text>{addressArr.join(', ')}</Text>
    </Box>
  );
};
