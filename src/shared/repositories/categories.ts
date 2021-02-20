import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Client } from 'lib/apollo-client';
import { CategoryFromPathQuery, DslCategory, GetCategoriesQuery } from '../generated/graphql';
import getCategories from '../graphql/queries/categories.graphql';
import getCategoryFromPath from '../graphql/queries/category-from-path.graphql';

export interface CategoryRepository {
  getCategoryFromPath(
    client: ApolloClient<NormalizedCacheObject>,
    path: string,
    page?: number,
    perPage?: number,
  ): Promise<DslCategory | null>;
  getCategories(client: Client): Promise<DslCategory[]>;
}

export const categoryRepository: CategoryRepository = {
  async getCategoryFromPath(
    client: ApolloClient<NormalizedCacheObject>,
    path: string,
  ): Promise<DslCategory | null> {
    try {
      const { data: { dslCategoryByPath = null } = {} } = await client.query<CategoryFromPathQuery>(
        {
          query: getCategoryFromPath,
          variables: {
            path,
          },
        },
      );

      return dslCategoryByPath as DslCategory | null;
    } catch (ex) {
      // console.error(ex.networkError.result);
      return null;
    }
  },
  async getCategories(client: ApolloClient<NormalizedCacheObject>): Promise<DslCategory[]> {
    const { data: { dslCategories = [] } = {} } = await client.query<GetCategoriesQuery>({
      query: getCategories,
    });

    return dslCategories as DslCategory[];
  },
};
