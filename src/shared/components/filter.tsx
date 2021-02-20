import React, { useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { motion } from 'framer-motion';
import { Checkbox, Label } from '@rebass/forms';

import Minus from 'assets/icons/minus.svg';
import Plus from 'assets/icons/plus.svg';
import { Expandable } from './expandable';

const filterTitle = {
  letterSpacing: '0.01em',
};

interface Props {
  show?: boolean;
  label: string;
  items: { id: string | number; label: string }[];
  value: (number | string)[];
  onChange(values: number | string): void;
}

export const Filter: React.FC<Props> = ({ show, label, items, value, onChange }) => {
  const [opened, toggleOpened] = useState(show || false);

  const handleChange = (item: string | number) => {
    onChange(item);
  };

  return (
    <Box sx={{ borderBottom: 'standard' }}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        sx={{ cursor: 'pointer', py: 3 }}
        onClick={() => toggleOpened(!opened)}
      >
        <Text sx={filterTitle}>{label}</Text>
        <Box sx={{ color: 'brandTwo.0', display: 'flex' }}>{opened ? <Minus /> : <Plus />}</Box>
      </Flex>
      <Expandable isOpen={opened}>
        <Flex flexDirection="column" sx={{ pb: 3 }}>
          {items.map((item) => (
            <Box key={item.id} height={24}>
              <Label sx={{ userSelect: 'none', alignItems: 'center' }}>
                <Checkbox
                  defaultChecked={value.includes(item.id)}
                  onChange={() => handleChange(item.id)}
                ></Checkbox>
                <Text sx={{ fontWeight: 400 }}>{item.label}</Text>
              </Label>
            </Box>
          ))}
        </Flex>
      </Expandable>
    </Box>
  );
};
