import { Checkbox, Input, Label } from '@rebass/forms';
import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, Text } from 'rebass';
import { SelectOption, StatusMessage, StatusType } from 'shared';
import {
  DslProduct,
  useAddItemToWishlistMutation,
  useNewWishlistMutation,
  Wishlist,
} from 'shared/generated/graphql';
import { LoadingButton } from '../loading-button';
import { Modal } from '../modal';

interface Props {
  open: boolean;
  title?: string;
  wishlists: Wishlist[];
  product: DslProduct;
  closeModalFn(): void;
  onSuccess(): void;
}

export const AddToWishlistModal: React.FC<Props> = ({
  open = false,
  title = 'Add to Favourites List',
  wishlists = [],
  product,
  closeModalFn,
  onSuccess,
}) => {
  const [addToWishlist, { loading, error }] = useAddItemToWishlistMutation();
  const [createWishlist, { loading: createLoading, error: createError }] = useNewWishlistMutation();

  const [mode, setMode] = useState('add');
  const [wishlistOptions, setWishlistOptions] = useState<SelectOption[]>([]);
  const [selectedWishlists, setSelectedWishlists] = useState([]);
  const [wishlistName, setWishlistName] = useState('');

  useEffect(() => {
    setWishlistOptions([
      ...(wishlists || []).map((x) => ({
        label: x.name,
        value: x.id,
        disabled: !!x.items?.includes(parseInt(product.id)),
      })),
    ]);
  }, [wishlists]);

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = selectedWishlists;
    const idx = selected.findIndex((x) => x === e.target.value);

    if (idx > -1) {
      selected.splice(idx, 1);
    }

    if (e.target.checked) {
      selected.push(e.target.value);
    }

    setSelectedWishlists([...selected]);
  };

  const onCreateClick = () => setMode('create');
  const onExistingClick = () => setMode('add');

  const onAddClick = async () => {
    try {
      let added = false;
      if (mode === 'add') {
        for (let i = 0; i < selectedWishlists.length; i++) {
          await addToWishlist({
            variables: {
              id: selectedWishlists[i],
              productId: parseInt(product.id),
            },
          });
          added = true;
        }
      } else {
        const { data } = await createWishlist({ variables: { name: wishlistName } });

        if (data) {
          await addToWishlist({
            variables: {
              id: data.newWishlist.id,
              productId: parseInt(product.id),
            },
          });
          added = true;
        }
      }
      if (added) {
        onSuccess();
      }
      closeModalFn();
      // eslint-disable-next-line no-empty
    } catch {}
  };

  useEffect(() => {
    if (!open) {
      setMode('add');
      setWishlistName('');
    }
  }, [open]);

  return (
    <Modal open={open} onBgClick={closeModalFn} p={3}>
      <Heading mb={4}>{title}</Heading>

      {Boolean(createError || error) && (
        <StatusMessage type={StatusType.ERROR} mb={4}>
          There was an error adding this item. Please try again.
        </StatusMessage>
      )}

      {mode === 'add' ? (
        <>
          <Box mb={3}>
            <Text>Add {product.name} to an existing list?</Text>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: 2,
              mb: 3,
              borderTop: 'standard',
              borderBottom: 'standard',
              py: 3,
            }}
          >
            {wishlistOptions.map((x, idx) => (
              <Label
                key={idx}
                onClick={
                  x.disabled
                    ? () => {
                        alert('this product has already been added to the list');
                      }
                    : undefined
                }
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'normal',
                  mb: 0,
                  color: x.disabled ? 'greyFont' : null,
                }}
              >
                <Checkbox
                  value={x.value}
                  defaultChecked={x.disabled}
                  disabled={x.disabled}
                  onChange={onCheckboxChange}
                />
                {x.label}
              </Label>
            ))}
          </Box>
        </>
      ) : (
        <Box my={3}>
          <Label htmlFor="email">New list name</Label>
          <Input
            type="text"
            id="wishlist-name"
            placeholder="Give your new list a name"
            value={wishlistName}
            onChange={(e) => setWishlistName(e.currentTarget.value)}
          />
        </Box>
      )}

      <Flex justifyContent="flex-end" flexDirection={['column-reverse', 'row']}>
        {mode === 'add' ? (
          <Button
            type="button"
            variant="textButton"
            mb={[2, 0]}
            mr={[0, 2]}
            onClick={onCreateClick}
            sx={{ textTransform: 'uppercase' }}
          >
            Create new list
          </Button>
        ) : (
          <Button
            type="button"
            variant="textButton"
            mb={[2, 0]}
            mr={[0, 2]}
            onClick={onExistingClick}
          >
            Add to existing list
          </Button>
        )}

        <Button type="button" variant="secondary" mb={[2, 0]} mr={[0, 2]} onClick={closeModalFn}>
          Cancel
        </Button>

        <LoadingButton
          loading={Boolean(createLoading || loading)}
          disabled={mode === 'add' ? selectedWishlists.length === 0 : wishlistName === ''}
          onClick={onAddClick}
        >
          Add
        </LoadingButton>
      </Flex>
    </Modal>
  );
};
