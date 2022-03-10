import { NextPage } from 'next'

export type App = {
  Component: new () => React.Component
  pageProps: NextPage
}
