import { AppContextComponent } from 'lib/context';
import { CartTable } from 'shared/components/cart/cart-table';
import { Paragraph } from 'shared/components/paragraph';
import Head from 'next/head';
import React, { useContext, useState } from 'react';
import { Box, Heading, Button, Flex, Text } from 'rebass';
import { Currency } from 'shared';
import Link from 'next/link';
import { FiX } from 'react-icons/fi';

const Cart: React.FC = () => {
  const {
    state: { cart },
  } = useContext(AppContextComponent);

  const [showText, setShowText] = useState(true);

  return (
    <>
      <Head>
        <title>Your Basket</title>
      </Head>
      <Box variant="container" sx={{ mt: 4 }}>
        <Heading sx={{ mb: 4 }} color="darkBrand" fontSize={[3, 3, 4]}>
          Drinks Basket
        </Heading>
        <Box
          sx={{
            mb: 4,
            justifyContent: 'space-between',
            alignItems: 'center',
            display: ['none', 'none', 'flex'],
          }}
        >
          <Box
            sx={{ fontWeight: 'bold', color: 'ourBlack', textTransform: 'uppercase', fontSize: 3 }}
          >
            <Currency value={cart?.totals.total as number} /> ({cart?.totalProducts || 0} Items)
          </Box>
          <Box sx={{}}>
            <Link href="/">
              <Button variant="secondary" sx={{ mr: 2, width: 223 }}>
                Continue Shopping
              </Button>
            </Link>
            <Button variant="primary" sx={{ width: 223 }}>
              Checkout
            </Button>
          </Box>
        </Box>
        {showText && (
          <Box p={3} mb={3} sx={{ backgroundColor: 'brandThree.11', color: 'ourBlack' }}>
            <Flex justifyContent="space-between">
              <Text fontSize={3} fontWeight="bold" sx={{ textTransform: 'uppercase' }} mb={3}>
                Basket updated
              </Text>
              <Button
                variant="clear"
                onClick={() => setShowText(false)}
                sx={{ background: 'transparent', color: 'ourBlack', border: 0, p: 0 }}
              >
                <FiX size={32} />
              </Button>
            </Flex>
            <Text>
              You updated your delivery date to <strong>Tuesday 27th September</strong> and the
              price of some KNDL items in your basket have been updated. Please review the changes
              below and checkout to proceed.
            </Text>
          </Box>
        )}
        {cart && cart?.products?.length ? (
          <CartTable cart={cart} />
        ) : (
          <Paragraph>There are no items in your basket.</Paragraph>
        )}
      </Box>
    </>
  );
};

export default Cart;
