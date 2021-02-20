import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Text } from 'rebass';
import { Breadcrumb, BreadcrumbItem, LoadingSpinner, PromotionRepository } from 'shared';
import { Modal } from 'shared/components/modal';
import { PromoPanel } from 'shared/components/promotions/promo-panel';
import { PromotionProductPanel } from 'shared/components/promotions/promo-product-panel';
import { Promotion } from 'shared/generated/graphql';
import { initializeApollo } from 'lib/apollo-client';
import { fakePromotion } from 'fake';

interface Props {
  promotion: Promotion;
  error404: boolean;
}

const PromotionDetail: NextPage<Props> = ({ promotion, error404 }) => {
  const router = useRouter();

  const [termsModalOpen, setTermsModalOpen] = useState(false);

  if (error404) {
    return null;
  }

  if (router.isFallback) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
        <LoadingSpinner />
      </Box>
    );
  }

  const breadcrumb: BreadcrumbItem[] = [
    {
      label: 'Promotions',
      href: '/promotions',
      as: 'promotions',
    },
    {
      label: promotion.name,
      href: '',
      as: '',
    },
  ];

  const ProductGridStyle = {
    mb: 4,
    marginTop: 4,
    display: 'grid',
    columnGap: ['4px', 3],
    rowGap: ['4px', '20px'],
    justifyContent: 'center',
    gridTemplateColumns: [`repeat(1, minmax(266px))`, `repeat(auto-fit, minmax(250px, 262px))`],
  };

  return (
    <>
      <Head>
        <title>{promotion.name}</title>
      </Head>

      <Box variant="container">
        <Breadcrumb additional={breadcrumb} />

        <Heading variant="h4" sx={{ mt: 2, mb: 4 }} textAlign={['center', 'initial']}>
          PROMOTIONS
        </Heading>

        <PromoPanel
          promotion={promotion}
          isBig
          hideButtons
          sx={{ mt: 4, backgroundColor: 'brandThree.11' }}
        >
          {promotion.longDescription}
        </PromoPanel>

        {promotion.terms && (
          <Flex my={2} justifyContent="flex-end">
            <Button variant="textButton" onClick={() => setTermsModalOpen(true)}>
              Terms and Conditions
            </Button>
          </Flex>
        )}

        <Box sx={ProductGridStyle} mt={4} px={[5]}>
          {promotion.productsInPromotion?.length &&
            promotion.productsInPromotion.map((x) => (
              <PromotionProductPanel key={x} productId={x} />
            ))}
        </Box>
      </Box>

      <Modal open={termsModalOpen}>
        <Box p={4}>
          <Heading variant="h4" mb={3}>
            Terms and Conditions
          </Heading>

          <Text>{promotion.terms}</Text>

          <Flex mt={3} justifyContent="flex-end">
            <Button variant="primary" onClick={() => setTermsModalOpen(false)}>
              <Text variant="smallButtonText">Close</Text>
            </Button>
          </Flex>
        </Box>
      </Modal>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const apolloClient = initializeApollo();
  const slug = (context.params?.slug as string) || '';
  // TODO: remove fake code
  const promotions =
    (fakePromotion as any) || (await PromotionRepository.getPromotions(apolloClient));

  const promotion = promotions.find((o) => o.slug === slug);

  if (promotion) {
    return {
      revalidate: 60 * 1,
      props: {
        promotion,
      },
    };
  }

  return { revalidate: 60 * 1, props: { error404: true } };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default PromotionDetail;
