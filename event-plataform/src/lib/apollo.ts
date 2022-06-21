import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4o7pks312b001xm3ytz7g37/master',
    cache: new InMemoryCache()
})