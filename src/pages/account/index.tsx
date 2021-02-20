import TiBeer from '@meronex/icons/ti/TiBeer';
import TiEject from '@meronex/icons/ti/TiEject';
import TiStar from '@meronex/icons/ti/TiStar';
import { OnlyLoggedIn } from 'components/higher-order/only-logged-in';
import { PanelLink } from 'components/ui/panel-link';
import { AppContextComponent, ContextActions } from 'lib/context';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Box, Flex, Heading } from 'rebass';
import { Breadcrumb, LogoutButton, SideBar } from 'shared';

const Index: React.FC = () => {
  const router = useRouter();
  const { dispatch } = useContext(AppContextComponent);

  const breadcrumbs = [{ href: '/account', label: 'Account' as string, as: 'account' }];

  const onLogout = () => {
    dispatch({ type: ContextActions.RESET });
    router.push('/');
  };

  return (
    <OnlyLoggedIn>
      <>
        <Head>
          <title>My Account</title>
        </Head>

        <Box mb={4} variant="container">
          <Breadcrumb additional={breadcrumbs} />

          <Flex mt={4}>
            <SideBar />

            <Box flex={1}>
              <Heading mb={3}>My Account</Heading>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 300px))',
                  gap: 2,
                }}
              >
                <PanelLink
                  href="/account/order-history"
                  icon={TiBeer}
                  subtitle="Track, return or buy things again"
                >
                  Your Orders
                </PanelLink>

                <PanelLink
                  href="/account/wishlists"
                  icon={TiStar}
                  subtitle="View and edit your saved items"
                >
                  Wishlists
                </PanelLink>

                <LogoutButton onLogoutComplete={onLogout}>
                  <PanelLink icon={TiEject} subtitle="Logout of your account">
                    Logout
                  </PanelLink>
                </LogoutButton>
              </Box>
            </Box>
          </Flex>
        </Box>
      </>
    </OnlyLoggedIn>
  );
};

export default Index;
