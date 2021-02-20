import { Text } from 'rebass';

interface Props {
  value?: number | null;
  parse?: boolean;
  strike?: boolean;
  color?: string;
}

export const Currency: React.FC<Props> = ({ value, parse, strike = false, color }) => {
  const toDisplay = (value / 100).toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: parse ? 0 : 2,
  });

  return (
    <Text as="span" color={color} sx={{ textDecoration: strike ? 'line-through' : 'initial' }}>
      {toDisplay}
    </Text>
  );
};
