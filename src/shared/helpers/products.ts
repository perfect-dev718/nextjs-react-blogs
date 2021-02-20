import { ProductStatus } from 'shared/models';
import { DslProduct, Product, ProductFeature, ProductImage } from '../generated/graphql';

/**
 * Extracts the value from a product feature. It's possible for a value to be
 * either a string inside the "value" prop or nested inside the "variants" prop.
 * This resolves the value for any given feature depending on where the value
 * resides.
 * @param f ProductFeature
 */
export const resolveFeatureValue = (f: ProductFeature): string => {
  if (f.value) {
    return f.value;
  }

  if (f.variants && Array.isArray(f.variants)) {
    return f.variants
      .reduce<string[]>((acc, cur) => (cur && cur.variant ? [...acc, cur.variant] : acc), [])
      .join(', ');
  }

  // TODO: Any more cases...?

  return '';
};

/**
 * Resolves the product status string into the Status enum.
 * @param s Product status string
 */
export const resolveProductStatus = (s: string): ProductStatus => {
  switch (s) {
    case 'D':
      return ProductStatus.DISABLED;
    case 'H':
      return ProductStatus.HIDDEN;
    default:
      return ProductStatus.ENABLED;
  }
};

/**
 * Determines if the supplied product is enabled. Can also be passed a null
 * value for use in checks where it's not always guaranteed to exist.
 * @param product Product to check
 */
export const isProductEnabled = (product?: DslProduct): boolean => {
  if (product) {
    if ('Active' === product.status.displayName) {
      return true;
    }
  }

  return false;
};

export const getProductImageSrc = (
  product: Product | null | undefined,
  imageType = 'panel',
  includeDefault = true,
): string | null => {
  if (!product) {
    return null;
  }

  if (product.productImages && product.productImages['main']) {
    const images = product.productImages['main'] as ProductImage[];

    if (images.length) {
      return (
        images.find((image) => {
          return image.type === imageType && image.imagePath;
        }) || images[0]
      ).imagePath;
    }
  }

  if (includeDefault) {
    return '/img/placeholders/awaiting-image.png';
  }

  return null;
};
