import { Currency, DslCart } from 'shared';
import { Box, Text } from 'rebass';

interface Props {
  cart: DslCart;
}

export const OrderSummary: React.FC<Props> = ({ cart }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'brandThree.11',
        py: 3,
        px: 5,
        fontWeight: 700,
        fontSize: 3,
        display: 'grid',
        gridTemplateColumns: '1fr',
        rowGap: 3,
      }}
    >
      <Text>Overdue Balance: £100</Text>
      <Text>Settlement plan overdue balance : £100</Text>
      <Text>
        Subtotal: <Currency value={cart?.totals.subtotal} />
      </Text>
      <Text>VAT: £100</Text>
      <Text>Payment Due: £100</Text>
    </Box>
  );
};
