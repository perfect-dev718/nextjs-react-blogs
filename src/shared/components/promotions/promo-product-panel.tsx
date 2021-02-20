import React from 'react';
import { Card, Flex } from 'rebass';
import { DslProduct, useProductByIdQuery } from 'shared';
import { ProductPanel } from '../product-panel';
import { PanelLoader } from '../panel-loader';

interface Props {
  productId: number;
}

export const PromotionProductPanel: React.FC<Props> = ({ productId }) => {
  const { data: { dslProductById } = {}, loading } = useProductByIdQuery({
    variables: {
      id: productId.toString(),
    },
    // No idea why the hell we have to set this to get images back 100% of the
    // time. Another fun little Apollo mystery!!
    fetchPolicy: 'no-cache',
  });

  if (dslProductById && !loading) {
    return <ProductPanel product={dslProductById as DslProduct} sx={{ border: 'standard' }} />;
  } else {
    return (
      <Card height="100%">
        <Flex justifyContent="center">
          <PanelLoader render={1} />
        </Flex>
      </Card>
    );
  }
};
