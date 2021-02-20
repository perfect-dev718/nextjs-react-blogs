import { useCategoryProductsQuery } from '../generated/graphql';
import {
  CategorySortOptions,
  DefaultPagination,
  SortByOptions,
  SortDirectionOptions,
} from '../models';

export type CategoryProductsVariables = {
  id: number;
  filters: string;
  pagination: {
    page: number;
    perPage: number;
  };
  sortBy: SortByOptions;
  sortOrder: SortDirectionOptions;
};

export const defaultVariables: CategoryProductsVariables = {
  id: 0,
  filters: '',
  pagination: {
    page: DefaultPagination.page,
    perPage: DefaultPagination.perPage,
  },
  sortBy: CategorySortOptions[0].sortBy,
  sortOrder: CategorySortOptions[0].sortDirection,
};

/**
 * Queries and returns a filtered and paginated list of products for the given
 * category. Supply the category id and optionally a set of variables to perform
 * the query.
 * @param id
 * @param suppliedVariables
 */
export function useCategoryProducts(id: string | number, suppliedVariables: any = {}) {
  return useCategoryProductsQuery({
    variables: {
      ...defaultVariables,
      ...suppliedVariables,
      id,
    },
  });
}
