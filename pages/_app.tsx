import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';

import "../styles/styles.css";
import customTheme from '../styles/globalTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
