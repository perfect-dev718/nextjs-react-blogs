import { OnlyLoggedIn } from 'components/higher-order/only-logged-in';
import Head from 'next/head';
import { Box, Flex, Heading } from 'rebass';
import {
  Breadcrumb,
  EditUserDetails,
  EditUserPassword,
  SideBar,
  StatusMessage,
  StatusType,
} from 'shared';
import React, { useState } from 'react';

const AccountDetails: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const breadcrumbs = [
    { href: '/account', label: 'Account' as string, as: 'account' },
    { href: '', label: 'Account Details' as string, as: '' },
  ];

  return (
    <OnlyLoggedIn>
      <>
        <Head>
          <title>Account Details</title>
        </Head>

        <Box mb={4} variant="container">
          <Breadcrumb additional={breadcrumbs} />

          <Flex mt={4}>
            <SideBar />

            <Box flex={1}>
              <Heading
                color={['primary', 'primary', 'darkBrand']}
                fontSize={[3, 3, 4]}
                mb={[3, 3, 4]}
              >
                Account Details
              </Heading>

              {errorMessage && (
                <StatusMessage type={StatusType.ERROR} mb={4}>
                  {errorMessage}
                </StatusMessage>
              )}

              {successMessage && (
                <StatusMessage type={StatusType.SUCCESS} mb={4}>
                  {successMessage}
                </StatusMessage>
              )}

              <Flex flexDirection={['column', 'column', 'row']}>
                <Box flex="1" mr={[0, 0, 4]}>
                  <Heading color="secondary" fontSize={[2, 2, 4]}>
                    Personal details
                  </Heading>
                  <EditUserDetails onError={setErrorMessage} onSuccess={setSuccessMessage} />
                </Box>

                <Box flex="1">
                  <Heading color="secondary" fontSize={[2, 2, 4]} mb={[3, 3, 4]}>
                    Password
                  </Heading>
                  <EditUserPassword onError={setErrorMessage} onSuccess={setSuccessMessage} />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </>
    </OnlyLoggedIn>
  );
};

export default AccountDetails;
