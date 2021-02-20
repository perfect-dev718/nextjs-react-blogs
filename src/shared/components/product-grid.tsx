import React from 'react';
import { Box, BoxProps, SxStyleProp, Text } from 'rebass';
import { DslProduct } from '../generated/graphql';
import { DefaultPagination } from '../models';
import { PanelLoader } from './panel-loader';
import { ProductPanel } from './product-panel';

interface Props extends BoxProps {
  loading?: boolean;
  products: DslProduct[];
  perPage?: number;
  panelStyles?: SxStyleProp;
}

export const ProductGrid: React.FC<Props> = ({
  loading = false,
  products = [],
  perPage = DefaultPagination.perPage,
  panelStyles = {},
  children,
  ...props
}) => {
  return (
    <Box
      sx={{
        mb: 4,
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: [
          '1fr 1fr',
          `repeat(auto-fit, ${products.length < 3 ? '250px' : 'minmax(250px, 1fr)'})`,
        ],
      }}
      {...props}
    >
      {loading && <PanelLoader render={perPage} />}

      {!loading && products.length
        ? products.map((product) => (
            <ProductPanel product={product} key={product.id} sx={panelStyles} />
          ))
        : null}

      {!loading && products.length === 0 ? (
        <Text sx={{ gridColumn: '1 / span 4', lineHeight: 1.6 }}>{children}</Text>
      ) : null}
    </Box>
  );
};
