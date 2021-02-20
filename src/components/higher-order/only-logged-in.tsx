import { AppContextComponent } from 'lib/context';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

interface Props {
  redirectTo?: string;
}

export const OnlyLoggedIn: React.FC<Props> = ({ redirectTo = '/account/login', children }) => {
  const {
    state: { currentUser },
  } = useContext(AppContextComponent);

  const router = useRouter();

  useEffect(() => {
    const noUser = () => {
      if (!currentUser) {
        router.replace(redirectTo);
      }
    };

    const timeout = setTimeout(noUser, 400);

    return () => clearTimeout(timeout);
  }, [currentUser]);

  if (!currentUser) {
    return null;
  }

  return <>{children}</>;
};
