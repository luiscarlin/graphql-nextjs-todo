import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../apollo-client";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
