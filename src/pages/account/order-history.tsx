import { OnlyLoggedIn } from 'components/higher-order/only-logged-in';
import Head from 'next/head';
import { useState } from 'react';
import { Box, Flex, Heading, Text } from 'rebass';
import {
  Breadcrumb,
  DefaultPagination,
  OrderPanel,
  OrderPanelLoader,
  OrderSortOptions,
  Pagination,
  SelectField,
  SelectOption,
  SelectUpdate,
  SideBar,
  useOrdersQuery,
} from 'shared';

const OrderHistory: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState(OrderSortOptions[0]);
  const [paginationOptions, setPaginationOptions] = useState(DefaultPagination);

  const { data: { orders: { orders = [], params = {} } = {} } = {}, loading } = useOrdersQuery({
    variables: {
      filters: '',
      sortBy: selectedSort.sortBy,
      pagination: {
        perPage: paginationOptions.perPage,
        page: paginationOptions.page,
      },
    },
  });

  const totalItems = params?.totalItems || 0;

  const sortOptions: SelectOption[] = OrderSortOptions.map((x, idx) => ({
    label: x.title,
    value: idx,
  }));

  const onSortChange = (e: SelectUpdate) => setSelectedSort(OrderSortOptions[e.value as number]);
  const onPageChange = (e: number) => setPaginationOptions({ ...paginationOptions, page: e });

  const breadcrumbs = [
    { href: '/account', label: 'Account' as string, as: 'account' },
    { href: '', label: 'Order History' as string, as: '' },
  ];

  return (
    <OnlyLoggedIn>
      <>
        <Head>
          <title>Order History</title>
        </Head>

        <Box mb={4} variant="container">
          <Breadcrumb additional={breadcrumbs} />

          <Flex mt={4}>
            <SideBar />

            <Box flex={1} maxWidth={620}>
              <Heading mb={4} id="heading">
                Order History
              </Heading>

              {loading && (
                <Box mt={4}>
                  <OrderPanelLoader render={paginationOptions.perPage} />
                </Box>
              )}

              {Boolean(!loading && orders.length > 0) && (
                <SelectField
                  id="sortOptions"
                  options={sortOptions}
                  defaultValue={OrderSortOptions.findIndex((x) => x.title === selectedSort.title)}
                  sx={{ my: [2, 2, 0] }}
                  onSelectChange={onSortChange}
                  excludeDefaultOption
                  width={200}
                />
              )}

              <Box mt={2}>
                {!loading && orders.map((x) => <OrderPanel key={x?.id} order={x} />)}
              </Box>

              {!loading && orders.length === 0 ? (
                <Text mt={2}>You have not made any orders yet.</Text>
              ) : null}

              {Boolean(!loading && orders.length) && (
                <Pagination
                  itemsCountPerPage={paginationOptions.perPage}
                  defaultPage={paginationOptions.page}
                  totalItemsCount={totalItems}
                  onPageChange={onPageChange}
                />
              )}
            </Box>
          </Flex>
        </Box>
      </>
    </OnlyLoggedIn>
  );
};

export default OrderHistory;
