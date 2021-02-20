import { ApolloClient, InMemoryCache } from '@apollo/client';

export interface ClientOptions {
  isSSR?: boolean;
  endpoint: string;
  apiKey?: string;
}

/**
 * This will create an instance of an Apollo client using the provided options.
 * @param options
 */
export function createApolloClient(options: ClientOptions) {
  const headers: Record<string, string> = {};

  if (options.isSSR) {
    headers['x-origin'] = 'nextjs';
  }

  if (options.apiKey) {
    headers['x-api-key'] = options.apiKey;
  }

  return new ApolloClient({
    ssrMode: options.isSSR || false,
    uri: options.endpoint,
    credentials: 'include',
    headers,
    cache: new InMemoryCache(),
  });
}
