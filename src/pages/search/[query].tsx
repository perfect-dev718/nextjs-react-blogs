import { DslProduct, useSearchProductsQuery } from '@generated/graphql';
import { CategoryPage } from 'components/pages/category-page';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CategorySortOptions, DefaultPagination } from 'shared';

const defaultVariables = {
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

const SearchResults: NextPage = () => {
  const router = useRouter();
  const { query } = router.query;

  const breadcrumbs = [{ href: '/search', label: 'Search Results' as string, as: 'search' }];

  const [variables, setVariables] = useState(defaultVariables);

  const { data: { dslProductSearch = null } = {}, loading } = useSearchProductsQuery({
    variables: {
      ...variables,
      searchQuery: (query as string) || '',
    },
  });

  const products = (dslProductSearch?.products || []) as DslProduct[];

  if (!query) {
    return null;
  }

  return (
    <CategoryPage
      products={products}
      totalItems={dslProductSearch?.totalCount || 0}
      filters={dslProductSearch?.filters || []}
      title={`Search results for: ${(query as string).replace('*', '')}`}
      loading={loading}
      breadcrumbs={breadcrumbs}
      emptyMessage={`Sorry we couldn't find any search results for ${query}. Try another search term, amend any filters or browse categories for an alternative product.`}
      onVariableChange={(variables: any) => setVariables(variables)}
      alwaysShowFilters={true}
      variables={variables}
    />
  );
};

export default SearchResults;
