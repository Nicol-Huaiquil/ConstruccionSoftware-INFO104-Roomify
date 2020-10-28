import "../../public/style.css";

import { AppProps } from "next/app";
import Head from "next/head";

import { ChakraProvider, extendTheme } from "@chakra-ui/core";

const customTheme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aprendiendo Web Development INFO104</title>
      </Head>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
