import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4o7pks312b001xm3ytz7g37/master',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});