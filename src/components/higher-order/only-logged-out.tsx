import { AppContextComponent } from 'lib/context';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

interface Props {
  redirectTo?: string;
  asPath?: string;
}

export const OnlyLoggedOut: React.FC<Props> = ({ redirectTo = '/', children, asPath }) => {
  const {
    state: { currentUser },
  } = useContext(AppContextComponent);

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.replace(redirectTo, asPath);
    }
  }, [currentUser]);

  return <>{children}</>;
};
