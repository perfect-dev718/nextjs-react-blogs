import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { DslProduct, ProductByPathQuery } from '../generated/graphql';
import getProductDetailQuery from '../graphql/queries/product-detail-by-path.graphql';

export interface ProductRepository {
  getProductDetail(
    client: ApolloClient<NormalizedCacheObject>,
    id: string,
  ): Promise<DslProduct | null>;
  getRecentProducts(): DslProduct[];
  addRecentProduct(product: DslProduct): DslProduct;
}

export const productRepository: ProductRepository = {
  getProductDetail: async function (
    client: ApolloClient<NormalizedCacheObject>,
    path: string,
  ): Promise<DslProduct | null> {
    try {
      const { data: { dslProductByPath = null } = {} } = await client.query<ProductByPathQuery>({
        query: getProductDetailQuery,
        variables: {
          path,
        },
      });

      return dslProductByPath as DslProduct | null;
    } catch {
      return null;
    }
  },

  addRecentProduct(product: DslProduct): DslProduct {
    const data = window.localStorage.getItem('recentProducts');

    let recentProducts: DslProduct[] = JSON.parse(data || '[]');
    recentProducts = recentProducts.filter((recentProduct) => recentProduct.id !== product.id);
    recentProducts.push(product);
    recentProducts = recentProducts.slice(-4);

    window.localStorage.setItem('recentProducts', JSON.stringify(recentProducts));

    return product;
  },

  getRecentProducts(): DslProduct[] {
    const data = window.localStorage.getItem('recentProducts');

    const recentProducts = JSON.parse(data || '[]');

    return recentProducts.slice(-4).reverse() as DslProduct[];
  },
};
