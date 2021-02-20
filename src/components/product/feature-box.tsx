import { Box, BoxProps, Flex, Heading, Text } from 'rebass';
import { DslProductFeature } from 'shared';

interface Props extends BoxProps {
  title: string;
  features: DslProductFeature[];
}

export const FeatureBox: React.FC<Props> = ({ title, features = [], ...props }) => {
  const featuresToDisplay = features.filter((x) => x.featured === true);

  return (
    <Box sx={{ ...props.sx, backgroundColor: 'grey', p: 4, borderRadius: 'standard' }}>
      <Heading as="h3" fontSize={3}>
        {title}
      </Heading>

      {featuresToDisplay.map((f, idx) => (
        <Flex
          justifyContent="space-between"
          sx={{ py: 3, borderBottom: idx < featuresToDisplay.length - 1 ? '1px solid #ddd' : '' }}
          key={idx}
        >
          <Text fontWeight="bold">{f.name}</Text>
          <Text>{f.value}</Text>
        </Flex>
      ))}
    </Box>
  );
};
