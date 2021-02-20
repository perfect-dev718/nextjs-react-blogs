import { AppContextComponent } from 'lib/context';
import { useContext, useState } from 'react';
import { Box, Button } from 'rebass';
import { LoadingSpinner } from 'shared/components/loading-spinner';
import { Modal } from 'shared/components/products/add-to-cart-modal';
import { QtyInput } from 'shared/components/products/qty-input';
import { CartInputItemOption, DslProduct, useUpdateCartMutation } from 'shared/generated/graphql';

interface Props {
  product: DslProduct;
  onError?: (message: string) => void;
  vertical?: boolean;
  itemOptions: CartInputItemOption[];
}

export const AddToCart: React.FC<Props> = ({ product, onError, vertical }) => {
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modelOpen, setModalOpen] = useState(false);

  const { dispatch } = useContext(AppContextComponent);

  const [updateCart] = useUpdateCartMutation();

  const addToCartClick = async () => {
    try {
      setLoading(true);
      const { data: { dslUpdateCart: cart = null } = {} } = await updateCart({
        variables: {
          products: [
            {
              productId: parseInt(product.id),
              qty: qty,
            },
          ],
        },
      });

      if (cart) {
        dispatch({ type: 'set-cart', payload: cart });
        setModalOpen(true);
      } else {
        throw new Error();
      }
    } catch {
      if (onError) {
        onError('There was an issue adding the item to your cart. Please try again.');
      }
    }
    setLoading(false);
  };

  const modalClose = () => setModalOpen(false);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: vertical ? 'column' : 'row' }}>
      <QtyInput value={qty} onChange={setQty} min={1} />

      <Button
        sx={vertical ? { mt: 3, fontSize: '14px' } : { ml: 3 }}
        variant={loading ? 'loading' : 'addToCart'}
        onClick={loading ? () => {} : addToCartClick}
        title={loading ? 'Loading' : 'Add to Basket'}
        minWidth={115}
      >
        {loading ? (
          <LoadingSpinner size={26} />
        ) : (
          <>
            <Box sx={{ display: ['none', 'block'] }}>ADD TO BASKET</Box>
            <Box sx={{ display: ['block', 'none'] }}>ADD</Box>
          </>
        )}
      </Button>

      <Modal
        open={modelOpen}
        title="ADDED TO YOUR BASKET"
        qty={qty}
        product={product}
        onClose={modalClose}
      />
    </Box>
  );
};
