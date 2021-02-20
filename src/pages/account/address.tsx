import { OnlyLoggedIn } from 'components/higher-order/only-logged-in';
import Head from 'next/head';
import { Box, Flex, Heading, Text } from 'rebass';
import { Breadcrumb, SideBar, SingleAddress } from 'shared';
import { useContext } from 'react';
import { AppContextComponent } from '../../lib/context';

const Address: React.FC = () => {
  const {
    state: { currentUser, outlet },
  } = useContext(AppContextComponent);

  const breadcrumbs = [
    { href: '/account', label: 'Account' as string, as: 'account' },
    { href: '', label: 'Address' as string, as: '' },
  ];

  return (
    <OnlyLoggedIn>
      <>
        <Head>
          <title>Address</title>
        </Head>

        <Box mb={4} variant="container">
          <Breadcrumb additional={breadcrumbs} />

          <Flex mt={4}>
            <SideBar />

            <Box flex={1} maxWidth={620}>
              <Heading
                color={['primary', 'primary', 'darkBrand']}
                fontSize={[3, 3, 4]}
                mb={[5, 5, 4]}
              >
                Billing & delivery address
              </Heading>

              <Flex
                px={3}
                py={[3, 3, 43]}
                backgroundColor="brandThree.11"
                color="ourBlack"
                fontSize={2}
                flexDirection={['column', 'column', 'row']}
              >
                <Box flex={1}>
                  <SingleAddress
                    title="Delivery Address"
                    address={outlet?.address || (currentUser?.billingAddresses || [])[0]}
                  />
                </Box>

                <Box flex={1} mt={[44, 44, 0]}>
                  <SingleAddress
                    title="Billing Address"
                    address={(currentUser?.billingAddresses || [])[0]}
                  />
                </Box>

                <Box mt={4} mb={3} sx={{ display: ['block', 'block', 'none'] }}>
                  <Text fontSize={1} lineHeight={1.55}>
                    If you would like to change you billing or delivery address, please contact: +44
                    123 345 345
                  </Text>
                </Box>
              </Flex>

              <Box
                mt={3}
                fontSize={3}
                color="darkBrand"
                sx={{ display: ['none', 'none', 'block'] }}
              >
                If you would like to change you billing or delivery address, please contact: +44 123
                345 345
              </Box>
            </Box>
          </Flex>
        </Box>
      </>
    </OnlyLoggedIn>
  );
};

export default Address;
