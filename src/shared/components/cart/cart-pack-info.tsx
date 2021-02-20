import { Box, Text } from 'rebass';
import InfoIcon from 'assets/icons/info.svg';

export const CartPackInfo: React.FC = () => {
  return (
    <Box
      sx={{
        display: ['block', null, 'flex'],
        justifyContent: 'space-between',
        fontSize: 1,
        px: 3,
        borderTop: 'standard',
        borderBottom: 'standard',
        alignItems: 'center',
        py: 2,
        borderTopWidth: 1,
        borderBottomWidth: 1,
      }}
    >
      <Text sx={{ mr: 4, mb: [1, null, 0] }}>
        These items will be delivered by KNDL on: Tuesday 27th September.
      </Text>
      <Box sx={{ color: 'brandTwo.0', display: 'flex', alignItems: 'center' }}>
        <InfoIcon /> <Text sx={{ ml: 2 }}>Delivery can be amended in checkout</Text>
      </Box>
    </Box>
  );
};
