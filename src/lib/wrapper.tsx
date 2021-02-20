import { useCurrentUserWithCartLazyQuery, useRefreshMutation } from '@generated/graphql';
import Router, { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AppContextComponent } from './context';

export const ClientWrapper: React.FC = ({ children }) => {
  let baseRefreshTime = 0;
  if (process.browser) {
    baseRefreshTime = parseInt(window.localStorage.getItem('refresh') || '0');
  }

  const {
    state: { currentUser },
    dispatch,
  } = useContext(AppContextComponent);
  const checkInterval = 60 * 1000;
  const refreshInterval = 60 * 1000 * 4;
  const [refreshTime, setRefreshTime] = useState(baseRefreshTime || 0);
  const [refreshUserToken] = useRefreshMutation();
  const [getCurrentUser, { data = null, error: userError }] = useCurrentUserWithCartLazyQuery();
  const router = useRouter();
  let interval: any;

  useEffect(() => {
    const session = sessionStorage.getItem('isLoggedIn');

    if (session) {
      const { dslCurrentUser: { user = null } = {}, cart } = JSON.parse(session);

      dispatch({ type: 'set-user', payload: user || null });
      dispatch({ type: 'set-cart', payload: cart || null });
    }

    getCurrentUser();

    if (window) {
      const storedRefreshTime = window.localStorage.getItem('refresh') || '0';
      setRefreshTime(parseInt(storedRefreshTime) || 0);
      refreshToken();
    }
  }, []);

  useEffect(() => {
    if (data && data.dslCurrentUser.result) {
      dispatch({ type: 'set-user', payload: data?.dslCurrentUser?.user || null });
      dispatch({ type: 'set-outlet', payload: data?.dslCurrentUser?.outlet || null });
      dispatch({ type: 'set-cart', payload: data?.dslCart || null });
      // Only set loaded user data when actual request has been made
      dispatch({ type: 'set-loaded-user-data', payload: true });

      sessionStorage.setItem('isLoggedIn', JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    if (userError) {
      dispatch({ type: 'set-user', payload: null });
      dispatch({ type: 'set-outlet', payload: null });
      dispatch({ type: 'set-cart', payload: null });

      sessionStorage.removeItem('isLoggedIn');
    }
  }, [userError]);

  useEffect(() => {
    if (currentUser) {
      interval = window.setInterval(refreshToken, checkInterval);
    }

    return () => window.clearInterval(interval);
  }, [refreshTime, currentUser]);

  useEffect(() => {
    const setCurrentPage = () => {
      document.body.setAttribute('page', router.pathname);
    };

    setCurrentPage();

    Router.events.on('routeChangeComplete', setCurrentPage);

    return () => {
      Router.events.off('routeChangeComplete', setCurrentPage);
    };
  }, [router.pathname]);

  const refreshToken = async () => {
    if (refreshTime === 0 || new Date().valueOf() >= refreshTime) {
      try {
        const { data: { dslRefresh: result = false } = {} } = await refreshUserToken();

        if (result) {
          const ts = new Date().valueOf() + refreshInterval;
          setRefreshTime(ts);
          localStorage.setItem('refresh', ts.toString());
        } else {
          localStorage.removeItem('refresh');
        }
      } catch {
        // Do nothing
      }
    }
  };

  return <>{children}</>;
};
