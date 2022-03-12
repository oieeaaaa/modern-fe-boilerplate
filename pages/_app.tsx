import { NextPage } from 'next'
import 'styles/main.scss'

export type App = {
  Component: new () => React.Component
  pageProps: NextPage
}

function MyApp({ Component, pageProps }: App) {
  return <Component {...pageProps} />
}

export default MyApp
