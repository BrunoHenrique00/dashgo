import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SideBarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'
import Head from 'next/head'

if(process.env.NODE_ENV === 'development'){
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Head>
          <title>DashGo</title>
        </Head>
        <Component {...pageProps}/>
      </SidebarDrawerProvider>
    </ChakraProvider>

  </QueryClientProvider>
  )
}

export default MyApp
