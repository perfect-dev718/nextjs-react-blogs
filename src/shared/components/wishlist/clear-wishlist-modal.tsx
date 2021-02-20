import React from 'react';
import { Box, Button, Flex, Heading, Text } from 'rebass';
import { StatusMessage, StatusType } from 'shared';
import { useDeleteItemFromWishlistMutation, Wishlist } from 'shared/generated/graphql';
import { LoadingButton } from '../loading-button';
import { Modal } from '../modal';

interface Props {
  open: boolean;
  wishlist: Wishlist | null;
  title?: string;
  closeModalFn(): void;
  onSuccess?(): void;
}

export const ClearWishlistModal: React.FC<Props> = ({
  open = false,
  wishlist,
  title = 'Clear Favourites',
  closeModalFn,
  onSuccess,
}) => {
  const [deleteItem, { loading, error }] = useDeleteItemFromWishlistMutation();

  const onDeleteClick = async () => {
    try {
      for (let i of wishlist.items) {
        await deleteItem({ variables: { id: wishlist.id, itemId: i } });
        onSuccess();
      }
    } catch {}
  };

  return (
    <Modal open={open} onBgClick={closeModalFn} p={3}>
      <Heading mb={4}>{title}</Heading>

      {error && (
        <StatusMessage type={StatusType.ERROR} mb={4}>
          There was an error clearing. Please try again.
        </StatusMessage>
      )}

      <Box mb={3}>
        <Text>Are you sure you wish to remove all items from this list?</Text>
      </Box>

      <Flex justifyContent="flex-end">
        <Button type="button" variant="secondary" mr={2} onClick={closeModalFn}>
          Cancel
        </Button>

        <LoadingButton loading={loading} onClick={onDeleteClick}>
          Clear
        </LoadingButton>
      </Flex>
    </Modal>
  );
};
