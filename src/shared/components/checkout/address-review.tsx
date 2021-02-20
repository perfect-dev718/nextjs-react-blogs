import { DslUser } from 'shared';
import { Box, Text } from 'rebass';

interface Props {
  user: DslUser;
}

export const AddressReview: React.FC<Props> = ({ user }) => {
  const headerStyle = {
    mb: 3,
    fontSize: 3,
    fontWeight: 700,
  };

  const renderAddress = (addresses) => {
    if (!addresses || addresses.length === 0) {
      return null;
    }
    const addressArr: string[] = [
      addresses[0].lineOne || '',
      addresses[0].lineTwo || '',
      addresses[0].city || '',
      addresses[0].county || '',
      addresses[0].country || '',
      addresses[0].postcode || '',
    ].filter((x) => x);

    return addressArr.map((arr) => {
      return <Text key={arr}>{arr}</Text>;
    });
  };
  return (
    <Box
      sx={{ display: 'grid', gridTemplateColumns: '1fr  1fr', gap: 4, mt: 4, color: 'ourBlack' }}
    >
      <Box>
        <Text sx={headerStyle}>Delivery Address</Text>
        {renderAddress(user?.shippingAddresses)}
      </Box>
      <Box>
        <Text sx={headerStyle}>Billing Address</Text>
        {renderAddress(user?.billingAddresses)}
      </Box>
    </Box>
  );
};
