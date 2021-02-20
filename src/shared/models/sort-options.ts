export type SortByOptions = 'popularity' | 'price' | 'product' | 'timestamp' | 'total';
export type SortDirectionOptions = 'asc' | 'desc';

export interface ISortOptions {
  sortBy: SortByOptions;
  sortDirection: SortDirectionOptions;
  title: string;
}

export const CategorySortOptions: ISortOptions[] = [
  {
    sortBy: 'popularity',
    sortDirection: 'desc',
    title: 'Sort By',
  },
  {
    sortBy: 'timestamp',
    sortDirection: 'desc',
    title: 'Newest Items First',
  },
  {
    sortBy: 'product',
    sortDirection: 'asc',
    title: 'Sort Alphabetically: A to Z',
  },
  {
    sortBy: 'product',
    sortDirection: 'desc',
    title: 'Sort Alphabetically: Z to A',
  },
  {
    sortBy: 'price',
    sortDirection: 'asc',
    title: 'Sort by Price: Low to High',
  },
  {
    sortBy: 'price',
    sortDirection: 'desc',
    title: 'Sort by Price: High to Low',
  },
];

export const OrderSortOptions: ISortOptions[] = [
  {
    sortBy: 'timestamp',
    sortDirection: 'desc',
    title: 'Newest Orders First',
  },
  {
    sortBy: 'total',
    sortDirection: 'desc',
    title: 'Sort by Order Total',
  },
];
