import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://143.198.164.113/v1/graphql",
  cache: new InMemoryCache(),
});

export default client;
