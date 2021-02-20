import { DslCart, useUpdateCartMutation } from 'shared/generated/graphql';
import { AppContextComponent } from 'lib/context';
import { useContext } from 'react';
import { Box, Button } from 'rebass';

interface Props {
  cart: DslCart;
  onError(error: string): void;
}

export const EmptyCartButton: React.FC<Props> = ({ cart, onError }) => {
  const [updateCart] = useUpdateCartMutation();
  const { dispatch } = useContext(AppContextComponent);

  const products = (cart.products || []).map((x) => ({
    productId: x.productId,
    qty: 0,
  }));

  const onClick = async () => {
    try {
      await updateCart({ variables: { products } });
      dispatch({ type: 'set-cart', payload: null });
    } catch {
      onError('There was an issue emptying your basket. Please try again.');
    }
  };

  return (
    <Box>
      <Button variant="secondary" onClick={onClick} p={0} width="140px">
        Clear Basket
      </Button>
    </Box>
  );
};
