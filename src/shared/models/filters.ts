export enum ProductFilterType {
  SELECT = 'S',
  PRICE = 'P',
}

export type FilterToApply = {
  [key: string]: string;
};
