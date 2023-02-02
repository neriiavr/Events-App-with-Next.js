import MainLayout from '@/layout/main-layout';
import '../pages/styles/globals.css';
import '../pages/styles/general.sass';
import Head from 'next/head';

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
