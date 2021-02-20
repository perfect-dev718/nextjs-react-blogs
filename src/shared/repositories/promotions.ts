import { GetPromotionsQuery, Promotion } from '@generated/graphql';
import getPromotionsQuery from 'shared/graphql/queries/promotions.graphql';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export interface IPromotionsRepository {
  getPromotions(): Promise<Promotion[]>;
}

export const PromotionRepository = {
  async getPromotions(client: ApolloClient<NormalizedCacheObject>): Promise<Promotion[]> {
    const { data: { promotions = [] } = {} } = await client.query<GetPromotionsQuery>({
      query: getPromotionsQuery,
    });

    return (promotions || []) as Promotion[];
  },
};
