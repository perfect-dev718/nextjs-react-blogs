import HeartOutline from 'assets/icons/heart-outline.svg';
import React, { useState } from 'react';
import { ButtonProps } from 'rebass';
import { LoadingButton, DslProduct, useWishlistsLazyQuery } from 'shared';
import { AddToWishlistModal } from './add-to-wishlist-modal';

interface Props extends ButtonProps {
  product: DslProduct;
  size?: number;
}

export const AddToWishlistButton: React.FC<Props> = ({
  product,
  sx = {},
  size = 28,
  children,
  ...props
}) => {
  const [getWishlists, { data: { wishlists = [] } = {}, loading }] = useWishlistsLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [open, setOpen] = useState(false);
  const [onWishlist, setWishlist] = useState(product.onWishlist || false);

  const onClick = async () => {
    await getWishlists();
    setOpen(true);
  };

  const onSuccess = () => {
    setWishlist(true);
  };

  return (
    <>
      <LoadingButton
        loading={loading}
        variant="wishlist"
        sx={{
          ...(onWishlist && {
            '*': {
              stroke: 'secondary',
              fill: 'secondary',
            },
          }),
          ...sx,
        }}
        {...props}
        onClick={onClick}
        size={size}
      >
        {children || <HeartOutline width={size} height={size} />}
      </LoadingButton>

      <AddToWishlistModal
        wishlists={wishlists}
        product={product}
        open={!loading && open}
        onSuccess={onSuccess}
        closeModalFn={() => setOpen(false)}
      />
    </>
  );
};
