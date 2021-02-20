import { DslCartProduct } from '@generated/graphql';
import ArrowDownIcon from 'assets/icons/arrow-down.svg';
import React, { useState } from 'react';
import { Box, BoxProps, Flex, Text } from 'rebass';
import { CartRow } from '../cart/cart-row';

interface Props extends BoxProps {
  items: DslCartProduct[];
}

export const ReviewItems: React.FC<Props> = ({ items = [] }) => {
  const [open, setOpen] = useState(false);

  const panelStyles = {
    backgroundColor: 'lighterGrey',
    lineHeight: 1.6,
    userSelect: 'none',
  };

  const toggle = () => setOpen(!open);

  return (
    <Box sx={panelStyles}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        sx={{ cursor: 'pointer', border: 'standard', px: 3, py: 2 }}
        onClick={toggle}
      >
        <Text sx={{ textTransform: 'uppercase', fontSize: [2, 3], fontWeight: [500, 600] }}>
          review order
        </Text>

        <Box sx={{ transform: open ? 'rotate(180deg)' : null }}>
          <ArrowDownIcon />
        </Box>
      </Flex>

      <Box
        sx={{
          display: open ? 'block' : 'none',
          background: '#fff',
          overflow: 'auto',
        }}
      >
        {items.map((x) => (
          <CartRow key={x.id} item={x} onError={() => {}} hideLinks />
        ))}
      </Box>
    </Box>
  );
};
