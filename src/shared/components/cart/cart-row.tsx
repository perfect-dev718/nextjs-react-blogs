import { useMutation } from '@apollo/react-hooks';
import CrossIcon from 'assets/icons/cross.svg';
import { useTheme } from 'emotion-theming';
import { AppContextComponent } from 'lib/context';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { Box, Flex, Image, Text } from 'rebass';
import {
  CartInputItemOption,
  DslCart,
  DslCartProduct,
  UpdateCartMutation,
} from 'shared/generated/graphql';
import updateCartMutation from 'shared/graphql/mutations/update-cart.graphql';
import { admiralTheme } from 'theme/admiral';
import { Currency } from '../currency';
import { LoadingSpinner } from '../loading-spinner';
import { QtyInput } from '../products/qty-input';

interface Props {
  item: DslCartProduct;
  onError(error: string): void;
  hideControls?: boolean;
  hideLinks?: boolean;
}

export const CartRow: React.FC<Props> = ({
  item,
  onError,
  hideControls = false,
  hideLinks = false,
}) => {
  const theme = useTheme<typeof admiralTheme>();
  const [updateCart, { loading }] = useMutation<UpdateCartMutation>(updateCartMutation);
  const { dispatch } = useContext(AppContextComponent);
  const [qty, setQty] = useState(item.qty);

  // const itemOptions = (item.product?.options as ProductOption[]) || [];
  const productId = item.productId;
  const shouldRenderLinks = Boolean(hideLinks || !item.product.seoSlug);

  const removeFromCart = async () => {
    try {
      const { data: { dslUpdateCart: cart = null } = {} } = await updateCart({
        variables: {
          products: [
            {
              productId,
              qty: 0,
            },
          ],
        },
      });

      setCart(cart as DslCart | null);
    } catch {
      onError('There was an issue removing the item from your basket. Please try again.');
    }
  };

  // const updateOptions = (e: CartInputItemOption[]) => {
  //   if (e.length) {
  //     performCartUpdate(e);
  //   }
  // };

  const onChangeQty = async (value: number) => {
    setQty(value);
    performCartUpdate();
  };

  const performCartUpdate = async (options?: CartInputItemOption[]) => {
    const variables: any = {
      products: [
        {
          productId,
          qty,
        },
      ],
    };

    if (options) {
      variables.options = options;
    }

    try {
      const { data: { dslUpdateCart: cart = null } = {} } = await updateCart({
        variables,
      });

      setCart(cart as DslCart | null);
    } catch {
      onError('There was an error updating the quantity. Please try again.');
    }
  };

  const setCart = (cart: DslCart | null) => {
    if (cart) {
      dispatch({ type: 'set-cart', payload: cart });
    } else {
      throw new Error();
    }
  };

  const cellStyles = {
    justifyContent: ['flex-start', 'flex-start', 'center'],
    display: 'flex',
    flexDirection: 'column',
  };

  const imagePath = item.product.mainImage?.thumbnailPath;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: theme.cart.gridTemplateColumns,
        gridTemplateRows: ['auto'],
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: 'borderColor',
        position: 'relative',
        py: [3, 3, 2],
      }}
    >
      {loading && (
        <Flex
          justifyContent="center"
          alignItems="center"
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <LoadingSpinner />
        </Flex>
      )}

      <>
        <Flex
          sx={{
            gridRow: 1,
            width: 72,
            height: 72,
            borderWidth: 2,
            borderColor: 'borderColor',
            borderStyle: 'solid',
            ...cellStyles,
          }}
        >
          <Image src={imagePath} />
        </Flex>

        <Box
          sx={{
            gridRow: 1,
            ...cellStyles,
            fontSize: [1, 1, 2],
            position: 'relative',
            pr: [4, 4, 0],
          }}
        >
          <Box sx={{ position: 'absolute', top: 0, right: 2, display: ['block', 'block', 'none'] }}>
            <CrossIcon onClick={removeFromCart} />
          </Box>

          {shouldRenderLinks ? (
            <Text mb={2} fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
              {item.product.name}
            </Text>
          ) : (
            <Link href={item.product?.seoSlug as string} as={item.product?.seoSlug as string}>
              <Text
                mb={2}
                fontWeight="bold"
                as="a"
                fontSize={[1, 1, 3]}
                sx={{ textTransform: 'uppercase' }}
              >
                {item.product.name}
              </Text>
            </Link>
          )}

          <Box
            sx={{
              color: 'brandTwo.0',
              fontSize: 3,
              fontWeight: 'bold',
              display: ['block', 'block', 'none'],
              alignItems: 'center',
              mt: [1, 1, 0],
            }}
          >
            <Currency value={item.product.price.total} />
          </Box>

          <Text color="brandTwo.0" sx={{ display: ['none', 'none', 'block'] }} fontSize={[1, 1, 2]}>
            Code: {item.product?.code}
          </Text>
        </Box>

        <Box
          sx={{
            ...cellStyles,
            gridColumn: [2, 2, 3],
            fontSize: 3,
            fontWeight: 'bold',
            color: 'brandTwo.0',
            display: ['none', 'none', 'flex'],
          }}
        >
          <Currency value={item.product.price.total} />
        </Box>

        <Box
          sx={{
            ...cellStyles,
            gridColumn: [2, 2, 4],
            fontSize: 3,
            fontWeight: 'bold',
            color: 'brandTwo.0',
            display: ['none', 'none', 'flex'],
          }}
        >
          <Currency value={item.qty * item.product.price.total} />
        </Box>

        <Box sx={{ ...cellStyles, gridColumn: [2, 2, 5], mt: [2, 2, 0] }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <QtyInput onChange={onChangeQty} value={qty} />
          </Box>
        </Box>

        {!hideControls && (
          <Box
            sx={{
              ...cellStyles,
              position: 'relative',
              gridColumn: [2, 2, 6],
              display: ['none', null, 'flex'],
              svg: {
                cursor: 'pointer',
              },
            }}
          >
            <CrossIcon onClick={removeFromCart} />
          </Box>
        )}
      </>
    </Box>
  );
};
