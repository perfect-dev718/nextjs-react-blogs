import { useState, useEffect } from 'react';
import {
  DslCategory,
  DslProduct,
  useCategoryProductsQuery,
  CategorySortOptions,
  DefaultPagination,
} from 'shared';
import { useRouter } from 'next/router';
import Url from 'url-parse';
import { CategoryPage } from './category-page';

interface Props {
  data: DslCategory;
}

const defaultVariables = {
  id: 0,
  filters: [],
  pagination: {
    page: DefaultPagination.page,
    perPage: DefaultPagination.perPage,
  },
  sort: {
    by: CategorySortOptions[0].sortBy,
    direction: CategorySortOptions[0].sortDirection,
  },
};

export const CategoryWrapper: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const url = new Url(router.asPath, true);
  const [variables, setVariables] = useState({
    ...defaultVariables,
    id: data.id,
  });

  const {
    data: { dslCategoryProducts: { totalCount = 0, products = [], filters = [] } = {} } = {},
    loading,
  } = useCategoryProductsQuery({
    variables: {
      ...variables,
    },
    fetchPolicy: 'network-only',
  });

  useEffect(
    () =>
      setVariables({
        id: data.id,
        filters: [],
        pagination: {
          page: DefaultPagination.page,
          perPage: DefaultPagination.perPage,
        },
        sort: {
          by: CategorySortOptions[0].sortBy,
          direction: CategorySortOptions[0].sortDirection,
        },
      }),
    [data.id],
  );

  useEffect(() => {
    setVariables({
      id: data.id,
      filters: [],
      pagination: {
        page: DefaultPagination.page,
        perPage: DefaultPagination.perPage,
      },
      sort: {
        by: CategorySortOptions[0].sortBy,
        direction: CategorySortOptions[0].sortDirection,
      },
    });
  }, [router.asPath]);

  const title = url.query.filters && url.query.filters_label ? url.query.filters_label : data.name;

  return (
    <CategoryPage
      products={((products as unknown) as DslProduct[]) || []}
      totalItems={totalCount}
      filters={filters || []}
      title={title}
      loading={loading}
      emptyMessage="There are no products available for this category."
      onVariableChange={(variables) => setVariables({ ...variables })}
      variables={variables}
    />
  );
};
