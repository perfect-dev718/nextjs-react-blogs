import { AppContextComponent } from 'lib/context';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

interface Props {
  token: string;
}

const PasswordRecovery: NextPage<Props> = ({ token = '' }) => {
  const router = useRouter();
  const { dispatch } = useContext(AppContextComponent);

  useEffect(() => {
    if (router) {
      dispatch({ type: 'set-password-token', payload: token });
      router.push('/account/new-password');
    }
  }, [router]);

  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ query: { token = '' } = {} }) => {
  return { props: { token } };
};

export default PasswordRecovery;
