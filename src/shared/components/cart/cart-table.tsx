import { useTheme } from 'emotion-theming';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Box, Button, Text } from 'rebass';
import { DslCart } from 'shared/generated/graphql';
import { useContent } from 'shared/hooks/use-content';
import { admiralTheme } from 'theme/admiral';
import { AppContextComponent } from 'lib/context';
import { BannerAd } from '../banner-ad';
import { ErrorMessage } from '../error-message';
import { CartRow } from './cart-row';
import { EmptyCartButton } from './empty-cart-button';
import { CartPackInfo } from './cart-pack-info';
import Link from 'next/link';
import { CartSummary } from './cart-summary';

interface Props {
  cart: DslCart;
  showTax?: boolean;
}

export const CartTable: React.FC<Props> = ({ cart }) => {
  const {
    state: { currentUser },
  } = useContext(AppContextComponent);
  const theme = useTheme<typeof admiralTheme>();
  const router = useRouter();
  const minValue = 150;
  const preventCheckout = (cart?.totals.subtotal / 100 || 0) < minValue;
  const [cartError, setCartError] = useState<string | null>(null);
  const items = cart.products || [];

  const [content] = useContent();

  const onError = (error: string) => setCartError(error);

  const onCheckoutClick = () => {
    if (currentUser) {
      router.push('/checkout/delivery');
    } else {
      window.sessionStorage.setItem('sign-in-redirect', 'checkout/delivery');
      router.push('/sign-in');
    }
  };

  return (
    <Box>
      {cartError && <ErrorMessage sx={{ mb: 4 }}>{cartError}</ErrorMessage>}

      <Box>
        <Box>
          <Box
            sx={{
              display: ['none', 'none', 'grid'],
              gridTemplateColumns: theme.cart.gridTemplateColumns,
              py: 3,
              borderBottomWidth: 2,
              borderBottomStyle: 'solid',
              borderBottomColor: 'brandOne.0',
              textTransform: 'uppercase',
            }}
          >
            <Text fontWeight="bold" />
            <Text fontWeight="bold">Item</Text>
            <Text fontWeight="bold">Unit Price</Text>
            <Text fontWeight="bold">Total</Text>
            <Text fontWeight="bold">Qty</Text>
            <Text />
          </Box>

          <Box mt={3}>
            {items.map((x, i) => {
              return (
                <Box key={x?.id}>
                  {i % 2 === 0 && <CartPackInfo />}
                  <CartRow item={x} onError={onError} />
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            display: ['block', 'block', 'flex'],
            justifyContent: 'space-between',
            pt: [3, 3, 4],
          }}
        >
          <EmptyCartButton cart={cart} onError={(e) => setCartError(e)} />
          <Box sx={{ fontSize: [1, 1, 2], mt: [1, 1, 0] }}>
            <Box
              sx={{
                alignSelf: 'start',
              }}
            >
              <CartSummary />

              {preventCheckout && (
                <Text mb={4} mt={3}>
                  You do not meet the minimum order requirement of <strong>£150.00</strong> to
                  checkout.
                </Text>
              )}

              <Box
                mt={[4, 3]}
                sx={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}
              >
                <Link href="/">
                  <Button
                    variant="secondary"
                    sx={{ mr: [1, 1, 2], p: 0, width: ['50%', '50%', 223] }}
                  >
                    Continue Shopping
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  px={[3, 5]}
                  sx={{ flex: 1, p: 0, width: ['50%', '50%', 223] }}
                  disabled={preventCheckout}
                  onClick={onCheckoutClick}
                >
                  Checkout
                </Button>
              </Box>

              {!currentUser && (
                <Text mt={4} fontSize={1}>
                  *If you have specific pricing for your account, your order will be updated when
                  you log in.
                </Text>
              )}
            </Box>

            {content?.media?.length ? (
              <BannerAd src={content.media[0]?.details?.sizes?.full?.url} mt={3} />
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
