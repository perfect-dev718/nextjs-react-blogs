import React, { useEffect } from 'react';
import { Box, Flex, Text } from 'rebass';
import {
  LoadingSpinner,
  StatusMessage,
  StatusType,
  useRecentlyOrderedProductsLazyQuery,
  WishlistItem,
} from 'shared';

export const RecentlyOrdered = () => {
  const [
    getRecentlyOrderedProducts,
    { data: { dslRecentlyOrderedProducts: { products = [] } = {} } = {}, loading, error },
  ] = useRecentlyOrderedProductsLazyQuery();

  useEffect(
    () =>
      getRecentlyOrderedProducts({
        variables: {},
      }),
    [],
  );

  const hasItems = Boolean((products || []).length > 0);

  return (
    <>
      {error && (
        <StatusMessage type={StatusType.ERROR} mb={4}>
          {error}
        </StatusMessage>
      )}

      {loading && (
        <Flex my={4} justifyContent="center">
          <LoadingSpinner size={64} />
        </Flex>
      )}

      <Box>
        {hasItems &&
          products?.map((x, idx) => <WishlistItem productId={(x?.id || 0) as number} key={idx} />)}

        {!loading && !hasItems && <Text my={4}>You have no recently ordered products.</Text>}
      </Box>
    </>
  );
};
