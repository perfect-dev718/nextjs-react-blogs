import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { Box, Button, Flex, Text } from 'rebass';
import { OrderStub, resolveOrderStatus } from 'shared';

interface Props {
  order: OrderStub;
}

export const OrderPanel: React.FC<Props> = ({ order }) => {
  const deliveryDate = format(new Date(parseInt(order.timestamp) * 1000), 'do MMM yyyy');
  const orderDate = format(new Date(parseInt(order.timestamp) * 1000), 'do MMM yyyy');

  return (
    <Box
      mb={3}
      sx={{ backgroundColor: 'orderPanel', borderRadius: 'standard', border: 'standard', p: 4 }}
    >
      <Text fontWeight="bold" fontSize={3} color="brandTwo.0" mb={3}>
        To be delivered on: {deliveryDate}
      </Text>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
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
            Number of items
          </Text>
          <Text>{order.totalProducts}</Text>
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

      <Flex>
        <Link href={`/account/orders/${order.id}`}>
          <Button mr={2}>View Order</Button>
        </Link>
      </Flex>
    </Box>
  );
};
