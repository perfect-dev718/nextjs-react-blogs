import { Input, Label } from '@rebass/forms';
import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading } from 'rebass';
import { StatusMessage, StatusType, useNewWishlistMutation } from 'shared';
import { Wishlist } from 'shared/generated/graphql';
import { LoadingButton } from '../loading-button';
import { Modal } from '../modal';

interface Props {
  open: boolean;
  title?: string;
  closeModalFn(): void;
  onSuccess?(newWishlist: Wishlist): void;
}

export const NewWishlistModal: React.FC<Props> = ({
  open = false,
  title = 'New Favourites List',
  closeModalFn,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(true);

  const [newWishlist, { data, loading, error }] = useNewWishlistMutation();

  useEffect(() => {
    if (name) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name]);

  useEffect(() => {
    if (data && data.newWishlist && onSuccess) {
      onSuccess(data.newWishlist);
    }
  }, [data]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await newWishlist({ variables: { name } });
      closeModalFn();
    } catch {
    } finally {
      setName('');
    }
  };

  return (
    <Modal open={open} onBgClick={closeModalFn} p={3}>
      <Heading mb={4}>{title}</Heading>

      {error && (
        <StatusMessage type={StatusType.ERROR} mb={4}>
          There was an error saving. Please try again.
        </StatusMessage>
      )}

      <Box as="form" onSubmit={onSubmit}>
        <Box mb={3}>
          <Label htmlFor="email">Name</Label>
          <Input
            type="text"
            id="wishlist-name"
            placeholder="Enter a name for your new favourites list"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Box>

        <Flex justifyContent="flex-end">
          <Button type="button" variant="secondary" mr={2} onClick={closeModalFn}>
            Cancel
          </Button>

          <LoadingButton loading={loading} disabled={disabled}>
            Create
          </LoadingButton>
        </Flex>
      </Box>
    </Modal>
  );
};
