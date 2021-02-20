export type TextUpdate = BaseUpdate;
export type SelectUpdate = Omit<BaseUpdate, 'value'> & { value: string | number };

interface BaseUpdate {
  id: string;
  value: string;
}

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}
