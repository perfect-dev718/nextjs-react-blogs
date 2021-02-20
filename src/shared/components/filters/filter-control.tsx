// @ts-ignore
import FiChevronDown from '@meronex/icons/fi/FiChevronDown';
import React, { useEffect, useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { DslFilter, ProductFilter } from '../../generated/graphql';
import { Expandable } from '../expandable';
import { SelectFilterOption } from './select-filter';

interface Props {
  filter: DslFilter;
  onFilterChange(id: number, selected: ProductFilter[]): void;
}

export const FilterControl: React.FC<Props> = ({ filter, onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ProductFilter[]>([]);

  const toggle = () => {
    setOpen(!open);
  };

  const onChange = (value: string, checked: boolean) => {
    if (checked) {
      setSelected([...selected, { id: filter.id, value: value }]);
    } else {
      const idx = selected.findIndex((x) => x.value === value);
      if (idx > -1) {
        selected.splice(idx, 1);
        setSelected([...selected]);
      }
    }
  };

  // TODO: Pricing filters
  // const onPriceChange = (suppliedMin: number, suppliedMax: number) => {
  //   let min = Math.abs(suppliedMin);
  //   let max = Math.abs(suppliedMax);
  //
  //   const defaultMin = filter.min || 0;
  //   const defaultMax = filter.max || 0;
  //
  //   if (min < defaultMin || min > defaultMax) {
  //     min = defaultMin || 0;
  //   }
  //
  //   if (max > defaultMax || max < defaultMin) {
  //     max = defaultMax || 0;
  //   }
  //
  //   if (min === filter.min && max === filter.max) {
  //     setVariantIds([]);
  //   } else {
  //     setVariantIds([min, max]);
  //   }
  // };

  useEffect(() => {
    onFilterChange(parseInt(filter.id), selected);
  }, [selected]);

  return (
    <Box
      key={filter.id}
      sx={{
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'borderColor',
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          py: 3,
          px: 2,
        }}
        onClick={toggle}
      >
        <Text sx={{ userSelect: 'none' }}>{filter.name}</Text>
        <Box
          sx={{
            transform: `rotate(${open ? -180 : 0}deg)`,
            transition: 'transform 0.25s',
          }}
        >
          <FiChevronDown />
        </Box>
      </Flex>

      <Expandable isOpen={open}>
        <Box sx={{ px: 2, pt: 2, pb: 3 }}>
          {filter.options?.map((x, idx) => (
            <SelectFilterOption key={idx} variant={x} onValueChange={onChange} />
          ))}

          {/* {filter.fieldType === ProductFilterType.PRICE && (
              <PriceFilter filter={filter} onChange={onPriceChange} />
            )} */}
        </Box>
      </Expandable>
    </Box>
  );
};
