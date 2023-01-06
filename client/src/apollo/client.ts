import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

export const cache = new InMemoryCache({});

export const client = new ApolloClient({
  link: from([httpLink]),
  cache,
});
