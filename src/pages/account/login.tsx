import { Input, Label } from '@rebass/forms';
import { OnlyLoggedOut } from 'components/higher-order/only-logged-out';
import { AuthLayout } from 'components/layouts/auth-layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Link } from 'rebass';
import { DslCart, DslUser, LoadingButton, useLoginMutation } from 'shared';
import { clearLogin, completeLogin } from 'shared/helpers/account';
import { AppContextComponent } from '../../lib/context';

const Login: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [login, { data, loading }] = useLoginMutation({ onError: () => setPassword('') });
  const router = useRouter();
  const isRedirect = router.query.redirect;

  const { dispatch } = useContext(AppContextComponent);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ variables: { email, password } });
  };

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  useEffect(() => {
    if (data) {
      if (data?.dslLogin?.result) {
        completeLogin(dispatch, data.dslLogin.user as DslUser, data.dslLogin.dslCart as DslCart);
        router.push('/');
      } else {
        clearLogin(dispatch);
        setError('Unable to login. Please check your credentials and try again.');
        setPassword('');
      }
    } else {
      clearLogin(dispatch);
      setError('');
    }
  }, [data]);

  // Styles

  const FormStyle = {
    width: '100%',
    my: 4,
    color: ['white', null, null, 'brandOne.0'],
  };

  const loginButtonDesktop = {
    display: ['none', 'none', 'none', 'initial'],
  };

  const loginButtonMobile = {
    display: [null, null, null, 'none'],
  };

  const ForgottenStyles = {
    color: ['brandThree.0', null, null, 'brandOne.0'],
    fontWeight: 'bold',
    my: [3, 4],
  };

  return (
    <OnlyLoggedOut
      redirectTo={isRedirect ? (router.query.path as string) : '/'}
      asPath={router.query.redirect as string}
    >
      <Head>
        <title>Log In</title>
      </Head>

      <AuthLayout error={error}>
        <Box as="form" onSubmit={onSubmit} sx={FormStyle} variant="authForm">
          <Box mb={3}>
            <Label htmlFor="email" mb={3}>
              Email Address
            </Label>
            <Input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </Box>

          <Box>
            <Label htmlFor="password" mt={[3, 4]} mb={3}>
              Password
            </Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </Box>

          <Flex justifyContent="flex-end">
            <Link href="/account/recovery" sx={ForgottenStyles}>
              Forgotten your password?
            </Link>
          </Flex>

          <LoadingButton
            variant="secondary"
            width="100%"
            loading={loading}
            disabled={disabled}
            iconAlign="center"
            sx={loginButtonMobile}
          >
            Login
          </LoadingButton>

          <LoadingButton
            width="100%"
            loading={loading}
            disabled={disabled}
            iconAlign="center"
            sx={loginButtonDesktop}
          >
            Login
          </LoadingButton>
        </Box>
      </AuthLayout>
    </OnlyLoggedOut>
  );
};

export default Login;
