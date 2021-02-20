import { Tabs } from '../tabs';
import { TabItem } from '../../models/tab';
import { Box } from 'rebass';
import { useEffect } from 'react';

export const CheckoutTab: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const items: TabItem[] = [
    {
      label: 'DELIVERY',
      href: '/checkout/delivery',
    },
    {
      label: 'EMPTIES',
      href: '/checkout/empties',
    },
    {
      label: 'REVIEW ORDER',
      href: '/checkout/review-order',
    },
    {
      label: 'ORDER COMPLETE',
      href: '/checkout/complete',
    },
  ];
  return (
    <Box sx={{ py: [3, 3, 4] }}>
      <Tabs items={items} />
    </Box>
  );
};
