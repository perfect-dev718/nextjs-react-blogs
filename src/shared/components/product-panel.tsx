import Link from 'next/link';
import React from 'react';
import { Box, BoxProps, Card, Flex, Image, Text } from 'rebass';
import { AddToCart } from 'shared/components/products/add-to-cart';
import { DslProduct } from '../generated/graphql';
import { AddToWishlistButton } from './wishlist/add-to-wishlist-button';
import { Currency } from 'shared';

interface Props extends BoxProps {
  product: DslProduct;
}

const ProductLink: React.FC<Props> = ({ product, children }) => {
  return (
    <Link href={{ pathname: '/[...pathname]' }} as={`/${product.seoSlug}`}>
      <a title={product.name as string}>
        <Box sx={{ textAlign: 'center' }}>{children}</Box>
      </a>
    </Link>
  );
};

export const ProductPanel: React.FC<Props> = ({ product, ...props }) => {
  return (
    <Box>
      <Card
        p={[3, 4]}
        sx={{
          transition: 'all 0.4s ease',
          ':hover': { boxShadow: '15px 15px 30px #e6e6e6, -15px -15px 30px #ffffff' },
          position: 'relative',
          ...(props.sx || {}),
        }}
      >
        <Flex
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
          height="100%"
          overflow="hidden"
          mt={3}
        >
          <ProductLink product={product}>
            <Image
              src={product?.mainImage?.thumbnailPath || '/img/placeholder.png'}
              height={[113, 150]}
              width={[113, 150]}
              sx={{ display: 'block' }}
              alt={product.name as string}
              title={product.name as string}
            />
          </ProductLink>

          <Flex alignItems="center" flexDirection="column" sx={{ marginTop: 'auto' }}>
            <ProductLink product={product}>
              <Text
                mb={[0, 2]}
                mt={[3, 4]}
                fontSize={[0, 2]}
                lineHeight={1.2}
                fontWeight="bold"
                textAlign="center"
                color="primary"
                sx={{
                  textTransform: 'uppercase',
                  height: [42, 57],
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {product.name}
              </Text>

              <Text py={2} fontWeight="bold" color="secondary" fontSize={[2, 3]}>
                <Currency value={product.price.total} />
              </Text>
            </ProductLink>

            <Box py={2}>
              <AddToCart product={product} itemOptions={[]} vertical />
            </Box>
          </Flex>
        </Flex>
        <Box sx={{ position: 'absolute', display: 'inline-block', right: 2, top: 2 }}>
          <AddToWishlistButton product={product} />
        </Box>
      </Card>
    </Box>
  );
};
