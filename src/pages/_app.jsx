import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Analytics } from '@/components/Analytics'
import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export default function App({ Component, pageProps }) {
  let router = useRouter()
  let url = `https://www.dotenv.org${router.asPath}`
  let encodedUrl = encodeURIComponent(url)
  
  return (
    <>
      <Head>
        {router.pathname === '/' ? (
          <title>Dotenv</title>
        ) : (
          <title>{`${pageProps.title} | Dotenv`}</title>
        )}
        <meta name="description" content={pageProps.description} />
        <meta property="og:title" content={pageProps.title} />
        <meta property="og:description" content={pageProps.description} />
        <meta property="og:url" content={url} />
        {process.env.NODE_ENV === 'production' ? (
          <>
            <meta property="og:image" content={`https://api.urlbox.io/v1/Ep4Ip4nNnFMNUg9J/png?url=${encodedUrl}&width=800&height=600&fail_on_4xx=true&fail_on_5xx=true`} />
          </>
        ) : (
          <>
          </>
        )}

        <Analytics />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}
