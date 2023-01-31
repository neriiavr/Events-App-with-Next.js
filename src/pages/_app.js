import MainLayout from '@/layout/main-layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
  </Head>
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
  </>
  )
}
