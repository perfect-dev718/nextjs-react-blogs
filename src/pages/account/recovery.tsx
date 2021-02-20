import { Input, Label } from '@rebass/forms';
import { OnlyLoggedOut } from 'components/higher-order/only-logged-out';
import { AuthLayout } from 'components/layouts/auth-layout';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, Text } from 'rebass';
import { LoadingButton, useRequestPasswordRecoveryMutation } from 'shared';

const Forgotten: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [resetError, setResetError] = useState('');

  const [requestRecovery, { data, loading }] = useRequestPasswordRecoveryMutation();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');

    if (email) {
      try {
        await requestRecovery({
          variables: {
            email: email,
          },
        });
      } catch (error) {
        setResetError('There was an error making the request');
      }
    }
  };

  useEffect(() => setDisabled(Boolean(!email)), [email]);

  return (
    <OnlyLoggedOut>
      <Head>
        <title>Password Recovery</title>
      </Head>

      <AuthLayout error={resetError} hideMobileWelcomeText>
        <Box my={4} variant="authForm">
          <Heading variant="login" mb={3} lineHeight={1.2}>
            Forgotten Password?
          </Heading>

          <Text my={2} variant="login" lineHeight={1.2} fontSize={2}>
            {data?.dslPasswordRecovery
              ? `Your request has been submitted and if you're an existing customer you will receive an email from us shortly. If you don't receive an email soon, please try again.`
              : `Please enter your email address below and we'll email you a link where you can reset
              your password.`}
          </Text>
          {data?.dslPasswordRecovery && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="/account/login">
                <Button
                  variant="textButton"
                  type="button"
                  sx={{ color: ['brandThree.0', 'brandOne.0'], mt: 3 }}
                >
                  Back To Login
                </Button>
              </Link>
            </Box>
          )}
          {!data?.dslPasswordRecovery && (
            <Box my={4} as="form" onSubmit={onSubmit}>
              <Box mb={3}>
                <Label htmlFor="email" mb={3} color={['white', null, null, 'inherit']}>
                  Email Address
                </Label>
                <Input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </Box>

              <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
                <LoadingButton
                  loading={loading}
                  type="submit"
                  disabled={disabled}
                  px={5}
                  variant="secondary"
                  sx={{ display: ['block', 'block', 'block', 'none'], mb: 3, width: '100%' }}
                >
                  Continue
                </LoadingButton>
                <Link href="/account/login">
                  <Button
                    variant="textButton"
                    type="button"
                    sx={{ color: ['brandThree.0', null, null, 'brandOne.0'] }}
                  >
                    Back To Login
                  </Button>
                </Link>
                <LoadingButton
                  loading={loading}
                  type="submit"
                  disabled={disabled}
                  px={5}
                  sx={{ display: ['none', null, null, 'block'] }}
                >
                  Continue
                </LoadingButton>
              </Flex>
            </Box>
          )}
        </Box>
      </AuthLayout>
    </OnlyLoggedOut>
  );
};

export default Forgotten;
