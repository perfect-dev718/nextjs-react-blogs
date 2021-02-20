import { Box, Text } from 'rebass';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LogoutButton } from './logout-button';
import React, { useContext } from 'react';
import { AppContextComponent, ContextActions } from '../../lib/context';

export const SideBar = () => {
  const router = useRouter();
  const { dispatch } = useContext(AppContextComponent);

  const items = [
    {
      title: 'Account Details',
      link: '/account/details',
    },
    {
      title: 'Order History',
      link: '/account/order-history',
    },
    {
      title: 'Address',
      link: '/account/address',
    },
    {
      title: 'Help',
      link: '/account/help',
    },
  ];

  const onLogout = () => {
    dispatch({ type: ContextActions.RESET });
    router.push('/');
  };

  return (
    <aside>
      <Box width={156} sx={{ display: ['none', 'none', 'block'], mr: [0, 0, 4] }}>
        {items.map((item) => (
          <Box sx={{ borderBottom: 'standard', cursor: 'pointer' }} key={item.title} mb={3}>
            <Link href={item.link}>
              <Box p={2} my={1}>
                <Text
                  fontSize={2}
                  lineHeight={1.2}
                  fontWeight="bold"
                  color={item.link === router.route ? 'secondary' : 'primary'}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {item.title}
                </Text>
              </Box>
            </Link>
          </Box>
        ))}
        <Box sx={{ borderBottom: 'standard', cursor: 'pointer' }} mb={3}>
          <Box p={2} my={1}>
            <LogoutButton onLogoutComplete={onLogout}>
              <Text
                fontSize={2}
                lineHeight={1.2}
                fontWeight="bold"
                color="primary"
                sx={{ textTransform: 'uppercase' }}
              >
                Logout
              </Text>
            </LogoutButton>
          </Box>
        </Box>
      </Box>
    </aside>
  );
};
