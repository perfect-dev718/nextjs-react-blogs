import { ApolloError } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { Content, GetContentPageQuery } from 'shared/generated/graphql';
import getContent from 'shared/graphql/queries/content.graphql';

type ContentTuple = [Content | null, { loading: boolean; error: ApolloError | undefined }];

export function useContent(): ContentTuple {
  const router = useRouter();

  const { data: { content = null } = {}, loading, error } = useQuery<GetContentPageQuery>(
    getContent,
    {
      variables: {
        slug: router.asPath.replace('/', ''),
      },
    },
  );

  return [(content as unknown) as Content, { loading, error }];
}
