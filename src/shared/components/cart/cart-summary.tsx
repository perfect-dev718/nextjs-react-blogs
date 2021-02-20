import { AppContextComponent } from 'lib/context';
import { useContext } from 'react';
import { Box, Text } from 'rebass';
import { Currency } from '../currency';

interface Props {
  onlyOrderTotal?: boolean;
}

export const CartSummary: React.FC<Props> = ({ onlyOrderTotal }) => {
  const {
    state: { cart },
  } = useContext(AppContextComponent);
  return (
    <Box fontSize={[1, 1, 3]}>
      <Text sx={{ color: 'brandThree.12', textAlign: 'right', fontSize: [1, 1, 3], mb: [1, 1, 2] }}>
        ({cart?.totalProducts || 0} Items in your basket)
      </Text>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['100px 70px', '100px 70px', '180px 100px'],
          justifyContent: 'end',
          textAlign: 'right',
          gap: [1, 1, 3],
          fontWeight: 'bold',
        }}
      >
        {!onlyOrderTotal && (
          <>
            <Text>TOTAL (ex VAT):</Text>
            <Text>
              <Currency value={cart?.totals.subtotal} />
            </Text>

            <Text>VAT:</Text>
            <Text>
              <Currency value={cart?.totals.tax} />
            </Text>
          </>
        )}

        <Text>ORDER TOTAL:</Text>
        <Text>
          <Currency value={cart?.totals.total} />
        </Text>
      </Box>
    </Box>
  );
};
