import React, { useEffect, useState } from 'react';
import { Box, Button, Card } from 'rebass';
import { DslFilter, ProductFilter as ProductFilterType } from '../../generated/graphql';
import { FilterControl } from './filter-control';

interface Props {
  filters: DslFilter[];
  onFilterChange(selected: ProductFilterType[]): void;
}

export const ProductFilter: React.FC<Props> = ({ filters, onFilterChange }) => {
  const [filtersToApply, setFiltersToApply] = useState<ProductFilterType[]>([]);

  useEffect(() => onFilterChange(filtersToApply), [filtersToApply]);

  const onFilterControlChange = (id: number, filters: ProductFilterType[] = []) => {
    if (filters.length) {
      setFiltersToApply([...filtersToApply, ...filters]);
    } else {
      const filtered = filtersToApply.filter((x) => parseInt(x.id) !== id);
      setFiltersToApply([...filtered]);
    }
  };

  const clearAll = () => {
    setFiltersToApply([]);
    window.dispatchEvent(new Event('clear-filters'));
  };

  return (
    <Card width={['auto', 'auto', 250]}>
      {filters.map((x) => (
        <FilterControl key={x.id} filter={x} onFilterChange={onFilterControlChange} />
      ))}

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button variant="clear" onClick={clearAll}>
          Clear all
        </Button>
      </Box>
    </Card>
  );
};
