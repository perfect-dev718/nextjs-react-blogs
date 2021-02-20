import { Box, Text } from 'rebass';
import { SelectField, SelectOption } from 'shared';
import { useState } from 'react';

export const OrderingFor: React.FC = () => {
  const [value, setValue] = useState<number | string>(1);
  const options: SelectOption[] = [
    {
      label: 'Dog & Ducks',
      value: 1,
    },
  ];
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Text mr={3}>Ordering for:</Text>
      <SelectField
        id="orderFor"
        options={options}
        large
        defaultValue={value}
        sx={{ width: 200, backgroundColor: 'white', color: 'greyFont' }}
        onSelectChange={(e) => setValue(e.value)}
        excludeDefaultOption
        aria-label="Sort options"
      />
    </Box>
  );
};
