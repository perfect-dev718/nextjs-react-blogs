import HeartIcon from 'assets/icons/heart-outline.svg';
import BasketIcon from 'assets/icons/basket.svg';
import Link from 'next/link';
import { Box, Flex, FlexProps, Text } from 'rebass';
import { AppContextComponent } from 'lib/context';
import { useContext } from 'react';
import { Currency } from '../../shared';

export const HeaderButtons: React.FC<FlexProps> = (props) => {
  const {
    state: { cart },
  } = useContext(AppContextComponent);

  const styles = {
    cursor: 'pointer',
    borderRadius: 'standard',
    transition: 'all 0.2s',
    ':hover': {
      textDecoration: 'underline',
      color: 'brandTwo.0',
    },
  };

  return (
    <Flex alignItems="center" {...props}>
      <Box mr={3} sx={styles}>
        <Link href="/account/wishlists">
          <a title="Wishlists">
            <HeartIcon />
          </a>
        </Link>
      </Box>

      <Link href="/cart">
        <Flex sx={styles}>
          <BasketIcon />
          <Box
            sx={{
              display: ['none', 'flex'],
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              ml: 2,
            }}
          >
            <Text mb={1}>
              <Currency value={cart?.totals.total} />
            </Text>
            <Text fontSize={12}>{cart?.totalProducts || 0} items</Text>
          </Box>
        </Flex>
      </Link>
    </Flex>
  );
};
