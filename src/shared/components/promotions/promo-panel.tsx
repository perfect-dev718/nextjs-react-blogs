import Link from 'next/link';
import React from 'react';
import { Button, Flex, FlexProps, Heading, Image, Text, Box } from 'rebass';
import { Promotion } from 'shared';

interface Props extends FlexProps {
  promotion: Promotion;
  isBig?: boolean;
  hideButtons?: boolean;
}

// PromoPanel is designed to be the container of each promotion that is
// displayed inside a list of promotions.
export const PromoPanel: React.FC<Props> = ({
  promotion,
  isBig = false,
  hideButtons = false,
  sx = {},
  children,
}) => {
  const imageSize = {
    width: isBig ? 240 : 145,
    height: isBig ? 230 : 135,
  };

  const imageSrc = promotion.imagePath
    ? `/img/promo/${promotion.imagePath}`
    : '/img/placeholders/default-product.png';

  return (
    <Flex sx={{ ...sx, border: 'standard', borderWidth: 4, py: 3, px: 4 }}>
      <Flex mr={isBig ? [5] : [4]}>
        {hideButtons ? (
          <Image src={imageSrc} {...imageSize} alt={promotion.name} />
        ) : (
          <Link href={`/promotions/${promotion.slug}`}>
            <Image src={imageSrc} {...imageSize} alt={promotion.name} sx={{ cursor: 'pointer' }} />
          </Link>
        )}
      </Flex>

      <Flex flexDirection="column" flex={1}>
        {hideButtons ? (
          <Heading variant="h4">{promotion.name}</Heading>
        ) : (
          <Link href={`/promotions/${promotion.slug}`}>
            <Heading variant="h4" sx={{ cursor: 'pointer' }}>
              {promotion.name}
            </Heading>
          </Link>
        )}

        <Text my={3} sx={{ fontSize: 1 }}>
          {children}
        </Text>

        <Box sx={{ textAlign: 'right' }}>
          {!hideButtons && (
            <Link href={{ pathname: '/promotions/[slug]' }} as={`/promotions/${promotion.slug}`}>
              <Button
                variant="primary"
                title={promotion.name}
                href={`/promotions/${promotion.slug}`}
                sx={{ px: 5, mt: 3 }}
              >
                SEE MORE
              </Button>
            </Link>
          )}
        </Box>
        {isBig && (
          <Box sx={{ textAlign: 'right', mt: 3 }}>
            <Text sx={{ color: 'brandTwo.0', cursor: 'pointer' }}>Terms & Conditions</Text>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};
