import MinusIcon from 'assets/icons/minus.svg';
import PlusIcon from 'assets/icons/plus.svg';
import { Input } from '@rebass/forms';
import React, { useState } from 'react';
import { Box, Button } from 'rebass';

interface Props {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export const QtyInput: React.FC<Props> = ({ value, min = 0, max, onChange }) => {
  const [empty, setEmpty] = useState(false);
  const onValueChange = (value: number | string) => {
    if (value === '') {
      setEmpty(true);
      return;
    } else if (empty) {
      setEmpty(false);
    }
    const inputValue = parseInt(value as string);
    if (
      (typeof min === 'number' && inputValue < min) ||
      (typeof max === 'number' && inputValue > max)
    ) {
      return;
    }
    onChange(inputValue);
  };

  const onBlur = () => {
    setEmpty(false);
  };

  const stepStyle = {
    width: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    userSelect: 'none',
    cursor: 'pointer',
    p: 0,
  };

  return (
    <Box
      height={40}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 4,
      }}
    >
      <Button variant="qty" onClick={() => onValueChange(value - 1)} sx={stepStyle} width={40}>
        <MinusIcon />
      </Button>

      <Input
        width={40}
        sx={{
          textAlign: 'center',
          ':focus': { outline: 'none' },
          fontSize: 1,
          height: '100%',
          flex: '1 0',
          mx: 1,
        }}
        variant="qtyInput"
        type="number"
        value={empty ? '' : value}
        onChange={(e) => {
          onValueChange(e.target.value);
        }}
        onBlur={onBlur}
      />

      <Button width={40} variant="qty" sx={stepStyle} onClick={() => onValueChange(value + 1)}>
        <PlusIcon />
      </Button>
    </Box>
  );
};
