import { CartInputItemOption, ProductOption, ProductOptionVariant } from 'shared/generated/graphql';
import { Label, Select } from '@rebass/forms';
import { SelectUpdate } from 'shared/models';
import { useEffect, useState } from 'react';
import { Flex, FlexProps } from 'rebass';

interface Props extends FlexProps {
  options: ProductOption[];
  onOptionsChange(e: CartInputItemOption[]): void;
}

export const ProductOptions: React.FC<Props> = ({ options = [], onOptionsChange, ...props }) => {
  const [allOptions, setAllOptions] = useState<CartInputItemOption[]>([]);

  useEffect(() => onOptionsChange(allOptions), [allOptions]);

  if (options.length === 0) {
    return null;
  }

  const onChange = (e: SelectUpdate) => {
    const existingOption = allOptions.findIndex((x) => x.id === parseInt(e.id));

    if (existingOption > -1) {
      allOptions.splice(existingOption, 1);
    }

    setAllOptions([...allOptions, { id: parseInt(e.id), value: e.value as string }]);
  };

  return (
    <Flex {...props}>
      {options.map((x) => {
        switch (x.type) {
          case 'S':
            return <SelectOption key={x.id} option={x} onChange={onChange} />;

          default:
            return null;
        }
      })}
    </Flex>
  );
};

type FieldProps = {
  option: ProductOption;
  onChange(e: SelectUpdate): void;
};

const SelectOption: React.FC<FieldProps> = ({ option, onChange }) => {
  const selectOptions = (option.variants || []) as ProductOptionVariant[];
  const defaultOption = selectOptions.find((x) => x.selected) || selectOptions[0];

  return (
    <Flex alignItems="center">
      <Label
        htmlFor={option.id.toString()}
        mb={0}
        mr={[2, 2, 3]}
        width="auto"
        sx={{ fontWeight: 'normal' }}
      >
        {option.name}
      </Label>

      <Select
        id={option.id.toString()}
        defaultValue={defaultOption.id}
        onChange={(e) => onChange({ id: e.target.id, value: e.target.value })}
        sx={{ minWidth: 80 }}
      >
        {selectOptions.map((x) => (
          <option key={x.id} value={x.id}>
            {x.value}
          </option>
        ))}
      </Select>
    </Flex>
  );
};
