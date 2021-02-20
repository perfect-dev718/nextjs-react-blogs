import React from 'react';
import { Flex } from 'rebass';
import { CategorySortOptions, DefaultPagination, SelectOption, SelectUpdate } from '../models';
import { SelectField } from './forms/select-field';

interface Props {
  onSortChange(e: SelectUpdate): void;
  onPerPageChange(e: SelectUpdate): void;
  providedSortOptions?: SelectOption[];
  providedPerPageOptions?: SelectOption[];
  totalItems?: number;
  sortDefault?: string | number;
  perPageDefault?: string | number;
}

export const GridOptions: React.FC<Props> = ({
  providedSortOptions = [],
  sortDefault = 0,
  totalItems = 0,
  onSortChange,
  providedPerPageOptions = [],
  perPageDefault = DefaultPagination.perPage,
  onPerPageChange,
}) => {
  const sortOptions: SelectOption[] = [
    ...CategorySortOptions.map((x, idx) => ({
      label: x.title,
      value: idx,
    })),
    ...providedSortOptions,
  ];

  const perPageOptions: SelectOption[] = [
    ...DefaultPagination.options
      .filter((o) => o <= totalItems)
      .map((x) => ({ label: `${x} per page`, value: x })),
    ...providedPerPageOptions,
  ];

  return (
    <Flex flexDirection={['column', 'column', 'row']}>
      <SelectField
        id="sortOptions"
        options={sortOptions}
        defaultValue={sortDefault}
        onSelectChange={onSortChange}
        excludeDefaultOption
        aria-label="Sort options"
      />
      <SelectField
        id="perPageOptions"
        options={perPageOptions}
        defaultValue={perPageDefault}
        sx={{
          ml: [3],
          display: ['none', 'none', 'block'],
        }}
        onSelectChange={onPerPageChange}
        excludeDefaultOption
        aria-label="Per page options"
        width={200}
      />
    </Flex>
  );
};
