import { AppContextComponent } from 'lib/context';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { Box, Button, Flex, Heading, Text } from 'rebass';
import { DslProduct } from 'shared/generated/graphql';
import { Currency } from '../currency';
// import { CartRow } from '../cart/cart-row';

interface Props {
  open: boolean;
  title: string;
  qty?: number;
  product?: DslProduct;
  onClose(): void;
}

export const Modal: React.FC<Props> = ({ open, title, onClose }) => {
  const {
    state: { cart },
  } = useContext(AppContextComponent);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = '';
    }
  }, [open]);

  useEffect(() => {
    return () => {
      document.documentElement.style.overflowY = '';
    };
  });

  // const item = {
  //   id: product?.id,
  //   name: product?.name,
  //   type: '',
  //   productId: product?.id,
  //   amount: qty,
  //   price: product?.price,
  //   product,
  // };

  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.8)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: open ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Box
        mt={[6, 6, 7]}
        sx={{ background: '#fff', minWidth: ['100vw', '100vw', '80vw', '60vw'], p: [3, 3, 4] }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          sx={{
            borderBottomWidth: 2,
            borderBottomStyle: 'solid',
            borderColor: 'borderColor',
            pb: 2,
          }}
        >
          <Heading>{title}</Heading>

          <Button
            sx={{
              background: 'transparent',
              color: '#CECECE',
              p: 2,
              display: ['none', 'none', 'block'],
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            <FiX size={28} />
          </Button>
        </Flex>

        {/*
        // TODO: Convert between dslproduct and cart
        <CartRow item={item as CartItem} onError={() => {}} hideControls />
        */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: [3, 3, 4],
            flexWrap: 'wrap',
            pr: [0, 0, '43px'],
          }}
        >
          <Text
            color="brandThreeFont"
            sx={{ width: ['100%', '100%', 'auto'], mb: [3, 3, 0] }}
            textAlign="right"
          >
            ({cart?.totalProducts || 0} Items in your basket)
          </Text>
          <Text sx={{ mx: 4 }} fontWeight="bold">
            SUBTOTAL:
          </Text>
          <Text fontWeight="bold">
            <Currency value={cart?.totals.total} />
          </Text>
        </Box>
        <Flex
          mt={4}
          justifyContent={['center', 'center', 'flex-end']}
          flexDirection={['row', 'row', 'row']}
        >
          <Button variant="clear" mr={2} onClick={onClose}>
            Continue Shopping
          </Button>

          <Link href="/cart">
            <Button variant="addToCart">VIEW BASKET</Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};
