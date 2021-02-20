import { useRouter } from 'next/router';
import Url from 'url-parse';
import DefaultLayout from './default';

export const Layout: React.FC = ({ children }) => {
  const { asPath } = useRouter();
  const url = new Url(asPath, true);
  const pathname = url.pathname;

  const paths = [
    '/account/login',
    '/account/recovery',
    '/account/new-password',
    '/password-recovery',
  ];

  if (paths.includes(pathname)) {
    return <>{children}</>;
  }

  return <DefaultLayout>{children}</DefaultLayout>;
};
