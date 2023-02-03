import MainLayout from '@/layout/main-layout';
import '../pages/styles/globals.css';
import '../pages/styles/general.sass';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  console.log('text');
  return (
  <>
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
  </>
  )
}
