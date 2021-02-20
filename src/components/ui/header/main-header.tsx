import { DeliveryTimer } from 'components/ui/delivery-timer';
import { HeaderButtons } from 'components/ui/header-buttons';
import { Logo } from 'components/ui/logo';
import { add, set } from 'date-fns';
import { AppContextComponent } from 'lib/context';
import Link from 'next/link';
import { useContext } from 'react';
import { Box, Flex, Text } from 'rebass';
import { useGetCategoriesQuery, Search, formatNavItems, DslCategory } from 'shared';
import { Navigation } from '../navigation/navigation';
import { OrderingFor } from './ordering-for';

export const MainHeader = () => {
  // TODO: change this to a fixed point in time
  const expiry = set(add(new Date(), { days: 1 }), { hours: 16, minutes: 0, seconds: 0 });

  const {
    state: { currentUser },
  } = useContext(AppContextComponent);

  const { data: { dslCategories = [] } = {} } = useGetCategoriesQuery();
  const navigationItems = formatNavItems(dslCategories as DslCategory[]);

  const common = {
    textTransform: 'uppercase',
    userSelect: 'none',
    cursor: 'pointer',
    fontSize: 15,
    transition: '0.2s all',
  };

  const accountStyles = {
    ...common,
    py: 2,
    px: 3,
    ':hover': {
      backgroundColor: 'brandOne.1',
    },
  };

  return (
    <Box as="header">
      <Box
        sx={{
          backgroundColor: 'brandOne.0',
          color: 'brandOneFont',
          display: ['none', null, 'block'],
        }}
      >
        <Box
          variant="container"
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 64,
            py: 2,
          }}
        >
          {currentUser ? (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
              <OrderingFor />
              <Flex sx={accountStyles} alignItems="center">
                <Link href="/account">
                  <Text mr={1}>My account</Text>
                </Link>
              </Flex>
            </Box>
          ) : (
            <Flex sx={accountStyles} alignItems="center">
              <Link href="/account/login">
                <Text as="a">Log In</Text>
              </Link>
            </Flex>
          )}
        </Box>
      </Box>

      <Flex
        sx={{
          minHeight: 120,
          py: [3, 3, 0],
          borderBottom: ['standard', 'standard', 'none'],
        }}
        alignItems="center"
        variant="container"
        flexWrap={['wrap', 'wrap', 'nowrap']}
      >
        <Box
          order={[1, 1, 'initial']}
          sx={{ display: 'block', flexBasis: ['50%', '50%', 'initial'] }}
        >
          <Link href="/">
            <a title="Admiral Taverns">
              <Logo width={[160, 160, 180]} />
            </a>
          </Link>
        </Box>

        <Search
          placeholder="Search by name or product code"
          mt={[3, 3, 0]}
          ml={[0, 0, 5]}
          mr={0}
          width={['100%', '100%', 'auto']}
          order={[3, 3, 'initial']}
          flex={['1 1 100%', '0 1 100%', '1']}
          sx={currentUser ? {} : { height: 0, overflow: 'hidden' }}
        />

        <DeliveryTimer expiry={expiry} ml={4} display={['none', 'none', 'none', 'flex']} />

        <HeaderButtons
          ml={[0, 0, 4]}
          justifyContent="flex-end"
          sx={{
            minWidth: 'initial', // why is this need...?!?!
            flexBasis: ['50%', '50%', 'initial'],
            order: [2, 2, 'initial'],
          }}
        />
      </Flex>
      <Navigation
        navigationItems={[
          {
            id: 'FOOD & DRINK',
            title: 'FOOD & DRINK',
            url: '/mps/foods-drinks',
            pathname: '/mps/[...pathname]',
            slug: '',
            subItems: navigationItems,
          },
          {
            id: 'LEGISLATION',
            title: 'LEGISLATION',
            url: '/mps/legislation',
            pathname: '/mps/[...pathname]',
            slug: '',
            subItems: [],
          },
          {
            id: 'Pub essentials',
            title: 'Pub essentials',
            url: '/mps/pub-essentials',
            pathname: '/mps/[...pathname]',
            slug: '',
            subItems: [],
          },
          {
            id: 'Welcome Pack',
            title: 'Welcome Pack',
            url: '/mps/welcome-pack',
            pathname: '/mps/[...pathname]',
            slug: '',
            subItems: [],
          },
          {
            id: 'promotions',
            title: 'Promotions',
            url: '/promotions',
            pathname: '/promotions',
            slug: '',
            subItems: [],
          },
        ]}
      />
    </Box>
  );
};
