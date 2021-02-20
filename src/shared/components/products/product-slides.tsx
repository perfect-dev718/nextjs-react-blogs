import { useState } from 'react';
import { Box, Flex, Image } from 'rebass';
import { Modal } from 'shared/components/modal';
import { DslProductImage } from 'shared/generated/graphql';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Placeholder from '../../../assets/images/awaiting-image.svg';
import { AddToWishlistButton, DslProduct } from 'shared';

SwiperCore.use([Pagination]);

export interface Props {
  slides?: DslProductImage[];
  product: DslProduct;
}

const EmptyImage = () => (
  <Flex
    sx={{
      justifyContent: 'flex-start',
      mx: 'auto',
    }}
  >
    <Box>
      <Placeholder width="100%" height="100%" />
    </Box>
  </Flex>
);

export const ProductSlides: React.FC<Props> = ({ slides = [], product }) => {
  const [activeImage, setActiveImage] = useState<DslProductImage>();
  // Style
  const ProductPageImageStyle = {
    position: 'relative',
    width: '100%',
    gridRowStart: [2, 1],
    gridRowEnd: [2, 3],
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'hidden',
  };

  const closeModal = () => {
    setActiveImage(undefined);
  };

  return (
    <Flex className="c-product-slides" sx={ProductPageImageStyle}>
      <Modal onBgClick={closeModal} open={!!activeImage} onClose={closeModal}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
            height: '80vh',
            position: 'relative',
          }}
        >
          <Image src={activeImage?.fullSizePath} maxWidth="100%" maxHeight="100%" />
        </Box>
      </Modal>

      <AddToWishlistButton
        product={product}
        sx={{
          ml: 4,
          display: ['block', null, 'none'],
          position: 'absolute',
          top: 2,
          right: 2,
          zIndex: 100,
        }}
        size={35}
      />

      <Swiper
        slidesPerView={1}
        pagination={true}
        // Fix slider bug on mobile
        style={{ maxWidth: '100vw' }}
      >
        {slides.map((slide, index) => {
          if (slide) {
            return (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: [4, 4],
                    maxWidth: ['80vw', null, 600],
                    maxHeight: ['80vw', null, 600],
                    mx: 'auto',
                    border: 'standard',
                    position: 'relative',
                    p: [3, 2],
                  }}
                >
                  <Image
                    src={slide.fullSizePath}
                    maxWidth="100%"
                    maxHeight="100%"
                    onClick={() => {
                      setActiveImage(slide);
                    }}
                  />
                </Box>
              </SwiperSlide>
            );
          } else {
            return <EmptyImage key={index} />;
          }
        })}

        {slides.length === 0 && <EmptyImage />}
      </Swiper>
    </Flex>
  );
};

export default ProductSlides;
