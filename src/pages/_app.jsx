import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

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
  let title = router.pathname === '/' ? 'Dotenv' : `${pageProps.title} | Dotenv`
  let url = `https://www.dotenv.org${router.asPath}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageProps.description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageProps.description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dotenvx" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={pageProps.description} />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}
