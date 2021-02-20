import { Box, Flex, Text } from 'rebass';
import { Order } from 'shared';

interface Props {
  order: Order;
}

export const OrderTotal: React.FC<Props> = ({ order }) => {
  const panelStyles = {
    backgroundColor: 'orderPanel',
    borderRadius: 'standard',
    border: 'standard',
    mb: 4,
    p: 4,
    userSelect: 'none',
  };

  return (
    <Box sx={panelStyles}>
      <Flex mb={3}>
        <Text fontWeight="bold" sx={{ minWidth: 200 }}>
          Total (ex VAT)
        </Text>

        <Text>£{order.total.toFixed(2)}</Text>
      </Flex>

      <Flex mb={3}>
        <Text fontWeight="bold" sx={{ minWidth: 200 }}>
          Delivery
        </Text>

        <Text>£{order.shippingCost.toFixed(2)}</Text>
      </Flex>

      <Flex mb={3}>
        <Text fontWeight="bold" sx={{ minWidth: 200 }}>
          VAT
        </Text>

        <Text>£0.00</Text>
      </Flex>

      <Flex sx={{ fontWeight: 'bold' }}>
        <Text sx={{ minWidth: 200 }}>Total (inc VAT)</Text>

        <Text>£{order.total.toFixed(2)}</Text>
      </Flex>
    </Box>
  );
};
