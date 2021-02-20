import { Product, getProductImageSrc, QtyInput } from 'shared';
import { Box, Image, Text } from 'rebass';
import { useState } from 'react';

interface Props {
  product: Product;
}

export const EmptiesRow: React.FC<Props> = ({ product }) => {
  const [qty, setQty] = useState(0);

  return (
    <Box
      sx={{
        borderBottom: ['none', 'standard'],
        borderTop: ['standard', 'none'],
        py: 3,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Box sx={{ width: 72, height: 72, border: 'standard', p: 1 }}>
        <Image src={getProductImageSrc(product)} />
      </Box>
      <Box sx={{ flex: 1, px: [2, 2, 4] }}>
        <Text sx={{ textTransform: 'uppercase', fontWeight: 700, fontSize: [1, 1, 2] }}>
          {product.name}
        </Text>
        <Text color="brandTwo.0" mt={2}>
          Code: {product.sku}
        </Text>
      </Box>
      <Box sx={{ width: ['100%', 'auto'], display: 'flex', justifyContent: 'flex-end' }}>
        <QtyInput value={qty} onChange={setQty} />
      </Box>
    </Box>
  );
};
