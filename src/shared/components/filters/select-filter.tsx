import { Checkbox, Label } from '@rebass/forms';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { FilterVariant } from '../../generated/graphql';

interface Props {
  variant: string;
  onValueChange(value: string, checked: boolean): void;
}

export const SelectFilterOption: React.FC<Props> = ({ variant, onValueChange }) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
  };

  const clearAll = () => setChecked(false);

  useEffect(() => onValueChange(variant, checked), [checked]);

  useEffect(() => {
    window.addEventListener('clear-filters', clearAll);
    return () => window.removeEventListener('clear-filters', clearAll);
  });

  return (
    <Label
      key={variant}
      sx={{
        fontWeight: 'normal',
        cursor: 'pointer',
        userSelect: 'none',
        alignItems: 'center',
      }}
    >
      <Checkbox checked={checked} onChange={onChange} />
      {variant}
    </Label>
  );
};
