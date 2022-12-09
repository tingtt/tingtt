import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className='min-h-screen'>
        <Head>
          <title>{`tingtt's portfolio`}</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  )
}
