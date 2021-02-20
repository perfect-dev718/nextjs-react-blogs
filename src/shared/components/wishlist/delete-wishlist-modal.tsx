import React, { useEffect } from 'react';
import { Box, Button, Flex, Heading, Text } from 'rebass';
import { StatusMessage, StatusType } from 'shared';
import { useDeleteWishlistMutation, Wishlist } from 'shared/generated/graphql';
import { LoadingButton } from '../loading-button';
import { Modal } from '../modal';

interface Props {
  open: boolean;
  wishlist: Wishlist | null;
  title?: string;
  closeModalFn(): void;
  onSuccess?(wishlistId: string): void;
}

export const DeleteWishlistModal: React.FC<Props> = ({
  open = false,
  wishlist,
  title = 'Delete Favourites',
  closeModalFn,
  onSuccess,
}) => {
  const [deleteWishlist, { data, loading, error }] = useDeleteWishlistMutation({
    variables: { id: wishlist?.id },
  });

  const onDeleteClick = async () => {
    try {
      await deleteWishlist();
      closeModalFn();
    } catch {}
  };

  useEffect(() => {
    if (data?.deleteWishlist && onSuccess) {
      onSuccess(wishlist.id);
    }
  }, [data]);

  return (
    <Modal open={open} onBgClick={closeModalFn} p={3}>
      <Heading mb={4}>{title}</Heading>

      {error && (
        <StatusMessage type={StatusType.ERROR} mb={4}>
          There was an error deleting. Please try again.
        </StatusMessage>
      )}

      <Box mb={3}>
        <Text>
          Are you sure you wish to delete the your list <strong>{wishlist?.name}</strong>?
        </Text>
      </Box>

      <Flex justifyContent="flex-end">
        <Button type="button" variant="secondary" mr={2} onClick={closeModalFn}>
          Cancel
        </Button>

        <LoadingButton loading={loading} onClick={onDeleteClick}>
          Delete
        </LoadingButton>
      </Flex>
    </Modal>
  );
};
