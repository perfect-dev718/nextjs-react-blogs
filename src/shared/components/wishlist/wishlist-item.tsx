import FiX from '@meronex/icons/fi/FiX';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Image, Text } from 'rebass';
import { LoadingButton, QtyInput, useUpdateCartMutation, WishlistLoader } from 'shared';
import {
  DslProduct,
  useDeleteItemFromWishlistMutation,
  useProductByIdQuery,
} from 'shared/generated/graphql';
import { isProductEnabled } from 'shared/helpers/products';
import { Currency } from '../currency';

interface Props {
  productId: number;
  wishlistId?: string;
  defaultQty?: number;
  onDeleteItemSuccess?(productId: number, wishlistId: string): void;
  onUpdateQty?(productId: number, wishlistId: string, qty: number): void;
}

export const WishlistItem: React.FC<Props> = ({
  productId,
  wishlistId,
  defaultQty = 0,
  onDeleteItemSuccess,
  onUpdateQty,
}) => {
  const { data: { dslProductById } = {}, loading } = useProductByIdQuery({
    variables: { id: productId.toString() },
  });

  const [deleteItem, { loading: deleteLoading }] = useDeleteItemFromWishlistMutation({
    variables: {
      itemId: productId,
      id: wishlistId,
    },
  });

  const [updateCart] = useUpdateCartMutation();

  const [qty, setQty] = useState(defaultQty);

  useEffect(() => {
    setQty(defaultQty);
  }, [defaultQty]);

  const handleQty = (e: number) => {
    setQty(e);
    onUpdateQty && onUpdateQty(productId, wishlistId, e);
  };

  const onDeleteClick = async () => {
    try {
      await deleteItem();
      onDeleteItemSuccess && onDeleteItemSuccess(productId, wishlistId);
      // eslint-disable-next-line no-empty
    } catch {}
  };

  const onAddToBasket = async () => {
    try {
      await updateCart({
        variables: {
          products: [
            {
              productId,
              qty,
            },
          ],
        },
      });
      setQty(0);
      onUpdateQty && onUpdateQty(productId, wishlistId, 0);
      // eslint-disable-next-line no-empty
    } catch {}
  };

  if (!isProductEnabled(dslProductById as DslProduct)) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        borderBottom: 'standard',
        py: 3,
        px: 2,
      }}
    >
      {loading ? (
        <WishlistLoader />
      ) : (
        <>
          <Flex justifyContent="center" alignItems="flex-start" mr={3}>
            <Box width={68} height={68} p={[1, 1, 1, 2]} sx={{ border: 'standard' }}>
              <Image
                src={dslProductById.mainImage?.thumbnailPath || '/img/placeholder.png'}
                maxHeight="100%"
                alt="Wishlist item"
              />
            </Box>
          </Flex>
          <Flex
            flex="1"
            ml={[0, 0, 0, 4]}
            flexDirection={['column', 'column', 'column', 'row']}
            sx={{ position: 'relative' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              flex="1"
              pr={[
                onDeleteItemSuccess ? 4 : 0,
                onDeleteItemSuccess ? 4 : 0,
                onDeleteItemSuccess ? 4 : 0,
                0,
              ]}
            >
              <Link href={{ pathname: '/[...pathname]' }} as={`/${dslProductById.seoSlug}`}>
                <Text
                  fontWeight="bold"
                  fontSize={[0, 0, 0, 2]}
                  mb={2}
                  sx={{
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    ':hover': { textDecoration: 'underline' },
                  }}
                >
                  {dslProductById?.name}
                </Text>
              </Link>
              {dslProductById?.code && (
                <Text color="secondary" sx={{ display: ['none', 'none', 'none', 'block'] }}>
                  Code: {dslProductById?.code}
                </Text>
              )}
            </Flex>

            <Box
              sx={{
                display: 'grid',
                gap: [2, 2, 2, 3, 52],
                gridAutoFlow: ['row', 'row', 'row', 'column'],
              }}
            >
              <Flex justifyContent="flex-start" alignItems="center" width="90px">
                <Text color="brandTwo.0" fontWeight="bold">
                  <Currency value={dslProductById?.price.total} />
                </Text>
              </Flex>

              <Flex alignItems="center">
                <QtyInput value={qty} min={0} onChange={handleQty} />

                <Button ml={[3, 3, 3, 3, 52]} width={[115, 115, 115, 165]} onClick={onAddToBasket}>
                  <Text sx={{ display: ['none', 'none', 'none', 'block'] }}>Add to basket</Text>
                  <Text sx={{ display: ['block', 'block', 'block', 'none'] }}>Add</Text>
                </Button>
              </Flex>

              {onDeleteItemSuccess && (
                <LoadingButton
                  loading={deleteLoading}
                  iconAlign="center"
                  variant="clear"
                  sx={{
                    position: ['absolute', 'absolute', 'absolute', 'static'],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 0,
                    border: 0,
                    top: 0,
                    right: 0,
                  }}
                  onClick={onDeleteClick}
                >
                  <FiX size={18} color="#DDDDDD" />
                </LoadingButton>
              )}
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
};
