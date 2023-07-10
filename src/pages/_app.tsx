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
          <meta charSet='utf-8' />
          <meta content="tingtt's portfolio." name='description' />
          <meta property='og:title' content="tingtt's portfolio" />
          <meta property='og:description' content="tingtt's portfolio." />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://tingtt.jp/' />
          <meta property='og:image' content='/prof_icon.webp' />
          <meta property='og:site_name' content="tingtt's portfolio" />
          <meta property='og:locale' content='ja_JP' />
        </Head>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  )
}
