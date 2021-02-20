import { AppContextComponent } from 'lib/context';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import { Box, Heading, Text } from 'rebass';
import {
  Breadcrumb,
  BreadcrumbItem,
  CategorySortOptions,
  DefaultPagination,
  GridOptions,
  Pagination,
  ProductFilter,
  ProductGrid,
  productRepository,
  RecentProduct,
  SelectUpdate,
} from 'shared';
import {
  DslFilter,
  DslProduct,
  ProductFilter as ProductFilterType,
} from 'shared/generated/graphql';

interface Props {
  products: DslProduct[];
  totalItems: number;
  title: string;
  loading?: boolean;
  filters: DslFilter[];
  breadcrumbs?: BreadcrumbItem[];
  emptyMessage: string;
  alwaysShowFilters?: boolean;
  onVariableChange(variables: any): void;
  metaDescription?: string;
  variables: any;
}

export const CategoryPage: React.FC<Props> = ({
  products = [],
  totalItems,
  title,
  loading = false,
  filters = [],
  emptyMessage,
  alwaysShowFilters = false,
  onVariableChange,
  metaDescription = '',
  variables = {},
}) => {
  const [selectedFilters, setFilters] = useState<ProductFilterType[]>([]);
  const [selectedSort, setSelectedSort] = useState(CategorySortOptions[0]);
  const [paginationOptions, setPaginationOptions] = useState(DefaultPagination);
  const [recentProducts, setRecentProducts] = useState<DslProduct[]>([]);

  const {
    state: { categories },
  } = useContext(AppContextComponent);

  const onSortChange = (e: SelectUpdate) => setSelectedSort(CategorySortOptions[e.value as number]);

  const onPerPageChange = (e: SelectUpdate) =>
    setPaginationOptions({ ...paginationOptions, page: 1, perPage: e.value as number });

  const onPageChange = (e: number) => setPaginationOptions({ ...paginationOptions, page: e });

  const onFilterChange = (selected: ProductFilterType[]) => {
    setPaginationOptions(DefaultPagination);
    setFilters(selected);
  };

  useEffect(() => setRecentProducts(productRepository.getRecentProducts()), []);

  useEffect(() => {
    onVariableChange({
      ...variables,
      filters: selectedFilters,
      pagination: {
        page: paginationOptions.page,
        perPage: paginationOptions.perPage,
      },
      sortBy: selectedSort.sortBy,
      sortOrder: selectedSort.sortDirection,
    });
  }, [selectedFilters, selectedSort, paginationOptions]);

  const CategoryPagination = () => {
    return products.length ? (
      <Pagination
        itemsCountPerPage={paginationOptions.perPage}
        defaultPage={paginationOptions.page}
        totalItemsCount={totalItems}
        onPageChange={onPageChange}
        hideFirstLastPages={true}
        align="flex-end"
      />
    ) : null;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription || title} />
      </Head>

      <Box variant="largeContainer">
        <Box my={3}>
          <Breadcrumb categories={categories} />
        </Box>

        <Box
          variant="container"
          sx={{
            mt: 2,
            display: 'grid',
            gridGap: 4,
            px: [2, 3],
            gridTemplateColumns: ['1fr', '1fr', '250px repeat(auto-fit, minmax(250px, 1fr))'],
          }}
        >
          {(alwaysShowFilters || totalItems) && filters.length ? (
            <Box sx={{ gridRow: 1, mt: [0, 0, 5] }}>
              <Text sx={{ mt: [2, 2, 2], mb: 3, textTransform: 'uppercase' }} fontWeight="bold">
                Filter By
              </Text>

              <ProductFilter filters={filters} onFilterChange={onFilterChange} />
            </Box>
          ) : (
            <Box sx={{ gridRow: 1 }} />
          )}

          <Box sx={{ gridRow: [2, 2, '1 / span 3'] }}>
            <Box mt={[0, 0, 2]} mb={3}>
              <Heading
                as="h1"
                fontSize={26}
                id="heading"
                sx={{ textTransform: 'uppercase' }}
                mb={4}
              >
                {title}
              </Heading>

              {!loading && products.length === 0 ? null : (
                <Box
                  my={3}
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <GridOptions
                    onSortChange={onSortChange}
                    onPerPageChange={onPerPageChange}
                    perPageDefault={paginationOptions.perPage}
                    totalItems={totalItems}
                  />
                  <Box sx={{ display: ['none', null, null, null, 'block'] }}>
                    <CategoryPagination />
                  </Box>
                </Box>
              )}

              {!loading && products.length === 0 ? (
                <Text sx={{ gridColumn: '1 / span 4', lineHeight: 1.6 }}>{emptyMessage}</Text>
              ) : null}
            </Box>

            <ProductGrid
              loading={loading}
              products={products}
              perPage={12}
              panelStyles={{ border: 'standard' }}
            />

            <CategoryPagination />
          </Box>

          {Boolean((recentProducts || []).length) && (
            <Box sx={{ gridRow: [3, 3, 2] }} mt={[0, 0, 5]}>
              <RecentProduct recentProducts={recentProducts} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
