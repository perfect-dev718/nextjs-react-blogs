import { Input, Label } from '@rebass/forms';
import { OnlyLoggedOut } from 'components/higher-order/only-logged-out';
import { AuthLayout } from 'components/layouts/auth-layout';
import { AppContextComponent } from 'lib/context';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Heading, Text } from 'rebass';
import { LoadingButton, useResetPasswordMutation } from 'shared';

const NewPassword: React.FC = () => {
  const router = useRouter();
  const {
    state: { passwordToken },
    dispatch,
  } = useContext(AppContextComponent);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const [error, setError] = useState('');

  const [resetPassword, { loading }] = useResetPasswordMutation();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: { resetPasswordWithToken = false } = {} } = await resetPassword({
        variables: {
          input: {
            token: passwordToken,
            password: password,
            confirmPassword: confirmPassword,
          },
        },
      });

      if (resetPasswordWithToken) {
        router.push('/login');
      } else {
        throw new Error();
      }
    } catch {
      setError('There was an error updating your password.');
      setDisabled(true);
      setPassword('');
      setConfirmPassword('');
    }
  };

  useEffect(() => {
    if (password && confirmPassword) {
      if (password.length > 4 && password === confirmPassword) {
        setDisabled(false);
        return;
      }
    }

    setDisabled(true);
  }, [password, confirmPassword]);

  // This will remove the password token from context whenever this page is
  // unloaded (e.g. by navigating away)
  useEffect(() => {
    return () => {
      dispatch({ type: 'set-password-token', payload: '' });
    };
  }, []);

  return (
    <OnlyLoggedOut>
      <Head>
        <title>Password Recovery</title>
      </Head>

      <AuthLayout error={error}>
        <Box mb={4} variant="container">
          <Heading variant="login" mb={3}>
            Forgotten Password?
          </Heading>

          <Text variant="login" my={2} lineHeight="standard">
            Please enter a new password below and then re-enter the same password to confirm. Your
            new password must be at least 5 characters in length and contain letters and numbers.
          </Text>

          <Box my={4} as="form" onSubmit={onSubmit}>
            <Box mb={3}>
              <Label htmlFor="password">New Password</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </Box>

            <Box mb={3}>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              />
            </Box>

            <Flex justifyContent="flex-end">
              <LoadingButton loading={loading} type="submit" disabled={disabled}>
                Save
              </LoadingButton>
            </Flex>
          </Box>
        </Box>
      </AuthLayout>
    </OnlyLoggedOut>
  );
};

export default NewPassword;
