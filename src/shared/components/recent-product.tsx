import { DslProduct } from 'shared';
import { Box, Flex, Image, Text } from 'rebass';

interface Props {
  recentProducts: DslProduct[];
}

export const RecentProduct: React.FC<Props> = ({ recentProducts = [] }) => {
  return (
    <Box>
      <Text
        fontWeight="bold"
        sx={{ textTransform: 'uppercase', borderBottom: 'standard' }}
        pb={3}
        mb={2}
      >
        Recently Viewed
      </Text>
      {recentProducts.map((recentProduct) => (
        <Flex key={recentProduct.id} py={3} sx={{ borderBox: 'content' }}>
          <Image
            src={recentProduct.mainImage?.thumbnailPath || '/img/placeholder.png'}
            minWidth={52}
            height={52}
            p={1}
            sx={{ border: 'standard' }}
          />
          <Text fontSize={1} ml={3} sx={{ textTransform: 'uppercase' }}>
            {recentProduct.name}
          </Text>
        </Flex>
      ))}
    </Box>
  );
};
