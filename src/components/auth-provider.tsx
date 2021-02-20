import { useRouter } from 'next/router';
import Url from 'url-parse';

export const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const url = new Url(router.asPath, true);
  const pathname = url.pathname;

  const publicRoutes = [
    '/account/login',
    '/account/new-password',
    '/account/recovery',
    '/password-recovery',
    '/cookie-policy',
  ];

  if (process.browser) {
    const currentUser = window.sessionStorage.getItem('isLoggedIn');

    if (!publicRoutes.includes(pathname) && !currentUser) {
      router.replace({
        pathname: '/account/login',
        query: {
          redirect: router.asPath,
          path: router.pathname,
        },
      });

      return null;
    }
  }

  return <>{children}</>;
};
