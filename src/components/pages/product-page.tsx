import { ProductDetail } from 'components/product/product-detail';
import { AppContextComponent } from 'lib/context';
import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import { Box, Flex, Heading, Text } from 'rebass';
import {
  AddToCart,
  AddToWishlistButton,
  Breadcrumb,
  Currency,
  DslProduct,
  DslProductImage,
  productRepository,
} from 'shared';
import ProductSlides from 'shared/components/products/product-slides';

interface Props {
  data: {
    product: DslProduct;
  };
}

export const ProductPage: React.FC<Props> = ({ data }) => {
  const {
    state: { categories },
  } = useContext(AppContextComponent);
  const userProduct = { price: 0 };

  // Slideshow images / zoom
  const slides = [...(data.product.additionalImages || [])];
  if (data.product.mainImage) {
    slides.unshift(data.product.mainImage);
  }

  useEffect(() => {
    productRepository.addRecentProduct(data.product);
  }, []);

  return (
    <>
      <Head>
        <title>{data.product.name}</title>
      </Head>

      <Box my={3} variant="largeContainer">
        <Breadcrumb categories={categories} />
      </Box>

      <Box
        variant="container"
        mt={4}
        sx={{
          display: 'grid',
          gridGap: [2, 2, 3, 4],
          gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
          justifyItems: ['center', 'center', 'normal'],
        }}
      >
        <Box sx={{ p: 2, gridRow: 1, mb: [2, 2, 0] }}>
          <ProductSlides slides={slides as DslProductImage[]} product={data.product} />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridRow: [2, 2, 1],
            alignContent: 'start',
            px: [2, null, 3, 4],
          }}
        >
          <Heading
            fontSize={[3, 4, 5]}
            lineHeight={1.2}
            as="h1"
            sx={{ textTransform: ['unset', 'uppercase'] }}
            mt={[2, 2, 0]}
            mb={[2, 3]}
          >
            {data.product.name}
          </Heading>

          <Text
            fontSize={2}
            lineHeight={[1.2, 1.3]}
            mt={3}
            sx={{
              p: {
                m: 0,
              },
            }}
            dangerouslySetInnerHTML={{ __html: data.product.shortDescription as string }}
          />
          <Text sx={{ mt: [3, 4], mb: [1, 0], fontSize: 3 }} color="brandThree.12">
            Code: {data.product.code}
          </Text>

          {/* <ContentContainer content={data.product.description || ''} /> */}

          {/* <ProductHighlights
            my={3}
            alignItems="center"
            flexWrap="wrap"
            features={data.product.features as ProductFeature[]}
          /> */}

          <Heading mb={2} mt={[3, 4]} fontSize={[4, 4, 5]} lineHeight={1.2} color="brandTwo.0">
            <Currency value={userProduct?.price || data.product.price.total} />
          </Heading>

          {/* <ProductOptions
            my={3}
            options={data.product.options as ProductOption[]}
            onOptionsChange={(e) => setItemOptions(e)}
          /> */}

          <Flex alignItems="center" justifyContent={['center', 'center', 'flex-start']} my={3}>
            <AddToCart product={data.product} itemOptions={[]} />

            <AddToWishlistButton
              product={data.product}
              sx={{ ml: 4, display: ['none', 'block'] }}
              size={35}
            />
          </Flex>

          <ProductDetail product={data.product} mt={2} />
        </Box>
      </Box>
    </>
  );
};
