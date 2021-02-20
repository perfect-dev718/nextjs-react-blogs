import { Input } from '@rebass/forms';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Text } from 'rebass';
import { Filter } from '../../generated/graphql';
import { useDebounce } from '../../hooks/use-debounce';

interface Props {
  filter: Filter;
  onChange(min: number, max: number): void;
}

export const PriceFilter: React.FC<Props> = ({ filter, onChange }) => {
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  const [min, setMin] = useState(filter.min || 0);
  const [max, setMax] = useState(filter.max || 0);

  const debouncedMin = useDebounce(min, 700);
  const debouncedMax = useDebounce(max, 700);

  const clearAll = () => {
    if (minRef.current) {
      minRef.current.value = '';
    }
    if (maxRef.current) {
      maxRef.current.value = '';
    }
  };

  useEffect(() => onChange(debouncedMin, debouncedMax), [debouncedMin, debouncedMax]);

  useEffect(() => {
    window.addEventListener('clear-filters', clearAll);
    return () => window.removeEventListener('clear-filters', clearAll);
  });

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      £
      <Input
        sx={{ mx: 2 }}
        type="number"
        placeholder="from"
        onChange={(e) => setMin(parseInt(e.target.value) || filter.min || 0)}
        ref={minRef}
      />
      <Text sx={{ mr: 2 }}>-</Text>
      £
      <Input
        sx={{ mx: 2 }}
        type="number"
        placeholder="to"
        onChange={(e) => setMax(parseInt(e.currentTarget.value) || filter.max || 0)}
        ref={maxRef}
      />
    </Box>
  );
};
