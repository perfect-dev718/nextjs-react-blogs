import React, { MouseEvent } from 'react';
import { useLogoutMutation } from 'shared/generated/graphql';
import { clearLogin } from 'shared/helpers/account';

interface Props {
  onLogoutComplete?(): void;
}

export const LogoutButton: React.FC<Props> = ({ onLogoutComplete, children }) => {
  const [logout, { client }] = useLogoutMutation();

  const onLogoutClick = async (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    e.preventDefault();

    await logout();
    client.resetStore();
    clearLogin();

    if (window) {
      window.sessionStorage.removeItem('isLoggedIn');
    }

    if (onLogoutComplete) {
      onLogoutComplete();
    }
  };

  return <span onClick={onLogoutClick}>{children}</span>;
};
