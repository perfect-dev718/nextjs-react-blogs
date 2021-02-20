import { OnlyLoggedIn } from 'components/higher-order/only-logged-in';
import Head from 'next/head';
import React, { useState } from 'react';
import { Box, Flex, Heading, Text } from 'rebass';
import { Breadcrumb } from 'shared';
import { Favourites } from '../../components/pages/favourites';
import { RecentlyOrdered } from '../../components/pages/recentlyOrdered';

const Wishlists: React.FC = () => {
  const [tab, setTab] = useState('wishlists');

  const breadcrumbs = [
    { href: '/account', label: 'Account' as string, as: 'account' },
    { href: '', label: 'My Favourites' as string, as: '' },
  ];

  const tabStyle = {
    mb: 3,
    justifyContent: ['space-between', 'flex-start'],
  };

  return (
    <OnlyLoggedIn>
      <>
        <Head>
          <title>My Favourites</title>
        </Head>

        <Box mb={4} variant="container">
          <Breadcrumb additional={breadcrumbs} />

          <Heading mb={[3, 3, 3, 4]}>My Favourites</Heading>

          <Flex sx={tabStyle}>
            <Box sx={{ cursor: 'pointer' }} onClick={() => setTab('wishlists')} mr={[30, 68]}>
              <Text className={tab === 'wishlists' ? 'active' : ''} variant="tabText">
                Favourites
              </Text>
            </Box>
            <Box sx={{ cursor: 'pointer' }} onClick={() => setTab('recentlyOrdered')}>
              <Text className={tab === 'recentlyOrdered' ? 'active' : ''} variant="tabText">
                Recently Ordered
              </Text>
            </Box>
          </Flex>

          {tab === 'wishlists' && <Favourites />}
          {tab === 'recentlyOrdered' && <RecentlyOrdered />}
        </Box>
      </>
    </OnlyLoggedIn>
  );
};

export default Wishlists;
