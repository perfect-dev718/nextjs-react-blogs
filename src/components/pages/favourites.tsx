import { useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from 'rebass';
import {
  ClearWishlistModal,
  DeleteWishlistModal,
  LoadingSpinner,
  NewWishlistModal,
  SelectField,
  SelectOption,
  useUpdateCartMutation,
  useWishlistDetailLazyQuery,
  useWishlistsLazyQuery,
  WishlistItem,
} from 'shared';

export const Favourites: React.FC = () => {
  const [
    getWishlists,
    { data: { wishlists = [] } = {}, loading: wishlistsLoading },
  ] = useWishlistsLazyQuery({ fetchPolicy: 'network-only' });
  const [
    wishlistDetail,
    { data: { wishlistDetail: wishlistData = null } = {}, loading: wishlistDetailLoading },
  ] = useWishlistDetailLazyQuery();

  const [updateCart] = useUpdateCartMutation();

  const [wishlistsToDisplay, setWishlistsToDisplay] = useState([]);
  const [currentWishlist, setCurrentWishlist] = useState(null);
  const [selectedWishlist, setSelectedWishlist] = useState(null);
  const [selectOptions, setSelectOptions] = useState<SelectOption[]>([]);
  const [showNewWishlist, setShowNewWishlist] = useState(false);
  const [showClearWishlist, setShowClearWishlist] = useState(false);
  const [showDeleteWishlist, setShowDeleteWishlist] = useState(false);
  const [wishListCart, setWishListCart] = useState([]);

  useEffect(() => getWishlists(), []);

  useEffect(() => {
    if (wishlists && wishlists.length) {
      wishlistDetail({
        variables: {
          id: wishlists[0].id,
        },
      });

      setWishlistsToDisplay([...wishlists]);
    }
  }, [wishlists]);

  useEffect(() => setCurrentWishlist(wishlistData), [wishlistData]);

  useEffect(() => {
    setSelectOptions(wishlistsToDisplay.map((x) => ({ label: x.name, value: x.id })));
  }, [wishlistsToDisplay]);

  useEffect(() => setSelectedWishlist(wishlistData?.id), [wishlistData]);

  useEffect(() => {
    if (selectedWishlist) {
      wishlistDetail({
        variables: {
          id: selectedWishlist,
        },
      });
    }
  }, [selectedWishlist]);

  useEffect(() => {
    if (currentWishlist) {
      setWishListCart(currentWishlist.items.map((item) => ({ productId: item, qty: 0 })));
    }
  }, [currentWishlist]);

  const onNewWishlist = () => {
    getWishlists();
  };

  const onPrintClick = () => {
    if (window) {
      window.print();
    }
  };

  const onDeleteWishlist = (id: string) => {
    const idx = wishlistsToDisplay.findIndex((x) => x.id === id);

    if (idx > -1) {
      wishlistsToDisplay.splice(idx, 1);
    }

    if (wishlistsToDisplay.length) {
      setSelectedWishlist(wishlistsToDisplay[0].id);
      setCurrentWishlist(wishlistsToDisplay[0]);
    } else {
      setSelectedWishlist('');
      setCurrentWishlist(null);
    }

    setWishlistsToDisplay([...wishlistsToDisplay]);
  };

  const onDeleteItemSuccess = (productId: number, wishlistId: string) => {
    if (currentWishlist && currentWishlist.id === wishlistId) {
      currentWishlist.items = currentWishlist.items?.filter((item) => item !== productId);
      setCurrentWishlist({ ...currentWishlist });
    }
  };

  const onUpdateQty = (productId: number, wishlistId: string, qty: number) => {
    setWishListCart([
      ...wishListCart.filter((item) => item.productId !== productId),
      { productId, qty },
    ]);
  };

  const onAddAllToBasket = async () => {
    if (currentWishlist) {
      await updateCart({
        variables: {
          products: wishListCart.filter((item) => item.qty),
        },
      });

      setWishListCart(currentWishlist.items.map((item) => ({ productId: item, qty: 0 })));
    }
  };

  const hasItems = Boolean(currentWishlist?.items && currentWishlist?.items.length);

  return (
    <>
      <Flex
        flexDirection={['column', 'column', 'column', 'row']}
        justifyContent="space-between"
        sx={{ borderBottom: 'standard' }}
        pb={[3, 3, 3, 4]}
      >
        <Flex
          alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
          flexDirection={['column', 'column', 'column', 'row']}
        >
          {wishlistsToDisplay.length ? (
            <Flex
              justifyContent={['space-between', 'space-between', 'space-between', 'center']}
              alignItems="center"
              width="100%"
            >
              <Text>Select list:</Text>
              <SelectField
                id="wishlist-select"
                options={selectOptions}
                defaultValue={selectedWishlist}
                onSelectChange={(e) => setSelectedWishlist(e.value)}
                excludeDefaultOption
                my={[2, 2, 2, 0]}
                ml={3}
                mr={[0, 0, 0, 3]}
                flex={1}
                minWidth={200}
              />
            </Flex>
          ) : null}
        </Flex>

        <Flex justifyContent="flex-end" flex="1" my={[2, 2, 2, 0]}>
          <Button
            onClick={() => setShowNewWishlist(true)}
            mr={2}
            sx={{ flexBasis: ['50%', '50%', '50%', '150px'] }}
            variant="secondary"
          >
            Create List
          </Button>

          <Button
            mr={[0, 0, 0, 2]}
            sx={{ flexBasis: ['50%', '50%', '50%', '150px'] }}
            variant="secondary"
            onClick={onPrintClick}
          >
            Print List
          </Button>
        </Flex>

        {hasItems && (
          <Flex alignItems="center">
            <Button
              sx={{ flexBasis: ['100%', '100%', '100%', '184px'] }}
              onClick={onAddAllToBasket}
            >
              Add All To Basket
            </Button>
          </Flex>
        )}
      </Flex>

      {!wishlistsToDisplay.length && (
        <Text mt={4}>
          You have not created any wishlists yet. Click the Create New List button above to create
          one.
        </Text>
      )}

      {Boolean(wishlistsLoading || wishlistDetailLoading) && (
        <Flex my={4} justifyContent="center">
          <LoadingSpinner size={64} />
        </Flex>
      )}

      {currentWishlist ? (
        <Box>
          {hasItems &&
            currentWishlist.items.map((x) => {
              const wishCart = wishListCart.find((item) => item.productId === x);
              return (
                <WishlistItem
                  productId={x}
                  key={x}
                  defaultQty={wishCart?.qty}
                  wishlistId={currentWishlist.id}
                  onDeleteItemSuccess={onDeleteItemSuccess}
                  onUpdateQty={onUpdateQty}
                />
              );
            })}

          {!hasItems && <Text my={4}>You have not added any items to this wishlist yet.</Text>}

          <Flex mt={[3, 3, 3, 4]}>
            {hasItems && (
              <Button
                mr={2}
                variant="secondary"
                onClick={() => setShowClearWishlist(true)}
                sx={{ flexBasis: ['50%', '50%', '50%', '150px'] }}
              >
                Clear List
              </Button>
            )}

            <Button
              variant="secondary"
              onClick={() => setShowDeleteWishlist(true)}
              sx={{ flexBasis: ['50%', '50%', '50%', '150px'] }}
            >
              Delete List
            </Button>
          </Flex>
        </Box>
      ) : null}

      <NewWishlistModal
        open={showNewWishlist}
        closeModalFn={() => setShowNewWishlist(false)}
        onSuccess={onNewWishlist}
      />

      <ClearWishlistModal
        open={showClearWishlist}
        closeModalFn={() => setShowClearWishlist(false)}
        wishlist={currentWishlist}
        onSuccess={() => setShowClearWishlist(false)}
      />

      <DeleteWishlistModal
        open={showDeleteWishlist}
        closeModalFn={() => setShowDeleteWishlist(false)}
        wishlist={currentWishlist}
        onSuccess={onDeleteWishlist}
      />
    </>
  );
};
