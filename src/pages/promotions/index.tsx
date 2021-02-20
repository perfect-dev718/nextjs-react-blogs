import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box, Button, Flex, Heading, Text } from 'rebass';
import {
  BreadcrumbItem,
  GetPromotionTypesQuery,
  PromotionByTypeQuery,
  Promotion,
  PromotionRepository,
} from 'shared';
import { Breadcrumb } from 'shared/components/breadcrumb';
import { PromoPanel } from 'shared/components/promotions/promo-panel';
import { Filter } from 'shared/components/filter';
import { useQuery } from '@apollo/react-hooks';
import getPromotionTypes from 'shared/graphql/queries/promotion-types.graphql';
import getPromotionsByType from 'shared/graphql/queries/promotion-by-type.graphql';
import { initializeApollo } from 'lib/apollo-client';
import { fakePromotionTypes, fakePromotion } from 'fake';
import Link from 'next/link';

interface Props {
  promotions: Promotion[];
}

const Index: NextPage<Props> = ({ promotions }) => {
  const [type, setType] = useState('');
  let { data: { promotionTypes } = {} } = useQuery<GetPromotionTypesQuery>(getPromotionTypes);
  // TODO: remove demo code
  promotionTypes = fakePromotionTypes as any;

  const { data: { getPromotionsByType: promotionsByTypes = [] } = {} } = useQuery<
    PromotionByTypeQuery
  >(getPromotionsByType, {
    variables: {
      type,
    },
  });

  const handleType = (value: string) => {
    if (type === value) {
      setType('');
    } else {
      setType(value);
    }
  };

  const handleClear = () => {
    setType('');
  };

  const breadcrumb: BreadcrumbItem[] = [
    {
      label: 'Promotions',
      href: '#',
      as: '#',
    },
  ];

  const selectedPromotions = !!type ? promotionsByTypes : promotions;

  const featuredPromotions = selectedPromotions.slice(0, 3);

  return (
    <>
      <Head>
        <title>Promotions</title>
      </Head>

      <Box variant="container">
        <Breadcrumb additional={breadcrumb} />

        <Heading variant="h4" sx={{ mt: 2, mb: 4 }} textAlign={['center', 'initial']}>
          PROMOTIONS
        </Heading>

        <Flex flexDirection={['column', 'row']}>
          <Box width={['100%', 250]} px={3} mr={[0, 5]}>
            <Box sx={{ borderBottom: 'standard', pb: 3, fontWeight: 700, fontSize: 2 }}>
              FILTER BY
            </Box>

            <Filter
              show={true}
              label="Type"
              items={(promotionTypes || []).map((type) => ({
                id: type.name,
                label: type.displayName,
              }))}
              value={[type]}
              onChange={handleType}
            />

            <Filter
              label="Category"
              items={[]}
              value={[]}
              onChange={(value: string) => {
                console.log(value);
              }}
            />

            <Box sx={{ textAlign: 'right' }}>
              <Button
                variant="textButton"
                sx={{ fontWeight: 400, mt: 3, fontSize: 1 }}
                onClick={handleClear}
              >
                <Text>Clear Filters x</Text>
              </Button>
            </Box>
          </Box>
          <Box flex={1}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
                gap: 4,
                mb: 4,
              }}
            >
              {featuredPromotions.map((promotion) => {
                return (
                  <Box
                    key={promotion.id}
                    sx={{
                      border: 'standard',
                      py: 4,
                      px: 3,
                      borderWidth: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          backgroundImage: `url(/img/promo/promotion.svg)`,
                          p: 3,
                          backgroundRepeat: 'no-repeat',
                          textTransform: 'uppercase',
                          fontWeight: 400,
                          fontSize: 5,
                          letterSpacing: -2,
                        }}
                      >
                        <Text as="span" sx={{ color: 'white' }}>
                          60%{' '}
                        </Text>
                        <Text as="span" sx={{ color: 'ourBlack' }}>
                          off white wine
                        </Text>
                      </Box>
                      <Text
                        sx={{
                          textTransform: 'uppercase',
                          textAlign: 'center',
                          fontWeight: 700,
                          mt: 4,
                          mb: 3,
                        }}
                      >
                        {promotion.name}
                      </Text>
                      <Text sx={{ textAlign: 'center', mb: 5, fontSize: 1 }}>
                        {promotion.shortDescription}
                      </Text>
                    </Box>
                    <Link key={promotion.id} href={`/promotions/${promotion.slug}`}>
                      <Button sx={{ width: '100%' }}>SEE MORE</Button>
                    </Link>
                  </Box>
                );
              })}
            </Box>
            <Flex flexDirection="column" overflowX="hidden">
              {Boolean(selectedPromotions && selectedPromotions.length) &&
                (selectedPromotions || []).map((x, idx) => (
                  <PromoPanel sx={{ my: 2 }} key={idx} promotion={x as Promotion}>
                    {x?.shortDescription}
                  </PromoPanel>
                ))}
            </Flex>

            {Boolean(!selectedPromotions || !selectedPromotions.length) && (
              <Text>There are currently no promotions.</Text>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  let promotions = await PromotionRepository.getPromotions(apolloClient);
  // TODO: remove fake code
  promotions = fakePromotion as any;
  return { props: { promotions }, revalidate: 60 * 1 };
}

export default Index;
