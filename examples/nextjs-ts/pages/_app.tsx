import 'tailwindcss/tailwind.css'
import * as React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }: any) {
  return (
    <React.StrictMode>
      <Head>
        <title>NextJS testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
