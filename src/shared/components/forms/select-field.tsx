import { Label, Select } from '@rebass/forms';
import React from 'react';
import { Box, BoxProps } from 'rebass';
import { SelectOption, SelectUpdate } from '../../models';
import DownArrow from 'assets/icons/arrow-down.svg';

interface Props extends BoxProps {
  id: string;
  options: SelectOption[];
  excludeDefaultOption?: boolean;
  defaultValue?: string | number | undefined;
  onSelectChange(e: SelectUpdate): void;
  large?: boolean;
  sx?: object;
}

export const SelectField: React.FC<Props> = ({
  id,
  options = [],
  excludeDefaultOption = false,
  defaultValue,
  onSelectChange,
  large,
  sx,
  children,
  ...props
}) => {
  if (!excludeDefaultOption) {
    options = [{ value: '', label: 'Select' }, ...options];
  }

  const { ['aria-label']: ariaLabel, ...rest } = props;

  return (
    <Box sx={{ position: 'relative', '*': { stroke: 'brandOne.0' }, ...sx }} {...rest}>
      {children && <Label htmlFor={id}>{children}</Label>}
      <Select
        sx={{
          width: props.width || '100%',
          pr: 4,
          height: large ? 48 : undefined,
          '& ~ svg': { display: 'none' },
        }}
        id={id}
        defaultValue={defaultValue ? defaultValue : undefined}
        onChange={(e) => onSelectChange({ id: e.target.id, value: e.target.value })}
        aria-label={ariaLabel}
      >
        {options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.label}
          </option>
        ))}
      </Select>
      <DownArrow width="16" style={{ position: 'absolute', top: children ? 42 : 18, right: 12 }} />
    </Box>
  );
};
