import { Box, Text } from 'rebass';
import { Address } from '@generated/graphql';

const addressHeadingStyle = {
  textTransform: 'uppercase',
  mb: 2,
  fontSize: [2, 2, 3],
  fontWeight: 'bold',
};

interface Props {
  title: string;
  address: Address;
}

export const SingleAddress: React.FC<Props> = ({ title, address }) => {
  return (
    <Box>
      <Text sx={addressHeadingStyle}>{title}</Text>
      <Text>{address?.lineOne || ''}</Text>
      <Text>{address?.lineTwo || ''}</Text>
      <Text>{address?.city || ''}</Text>
      <Text>{address?.county || ''}</Text>
      <Text>{address?.country || ''}</Text>
      <Text>{address?.postcode || ''}</Text>
    </Box>
  );
};
