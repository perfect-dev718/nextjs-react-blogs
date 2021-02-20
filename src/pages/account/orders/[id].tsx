import { OnlyLoggedIn } from 'components/higher-order/only-logged-in';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Box, Heading } from 'rebass';
import {
  Breadcrumb,
  Order,
  OrderDetailPanel,
  OrderPayment,
  OrderTotal,
  useOrderDetailLazyQuery,
} from 'shared';

const OrderDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [
    getOrderDetail,
    { data: { order = null } = {}, loading, error },
  ] = useOrderDetailLazyQuery();

  const breadcrumbs = [
    { href: '/account', label: 'Account' as string, as: 'account' },
    { href: '/account/order-history', label: 'Order History' as string, as: 'order-history' },
    { href: '', label: `Order ${order?.id}` as string, as: '' },
  ];

  useEffect(() => {
    if (id) {
      getOrderDetail({ variables: { id: id.toString() } });
    }
  }, [id]);

  if (error) {
    router.push('/account/order-history');
  }

  return (
    <OnlyLoggedIn>
      <>
        <Head>
          <title>Order Detail: {order?.id}</title>
        </Head>

        <Box mb={4} variant="container">
          <Breadcrumb additional={breadcrumbs} />

          <Heading mb={4} id="heading">
            Order Detail: {order?.id}
          </Heading>

          {order && <OrderDetailPanel order={order as Order} />}
          {order && <OrderPayment order={order as Order} />}
          {order && <OrderTotal order={order as Order} />}
        </Box>
      </>
    </OnlyLoggedIn>
  );
};

export default OrderDetail;
