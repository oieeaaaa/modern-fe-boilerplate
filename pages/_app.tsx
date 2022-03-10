import { App } from 'interfaces/app'
import 'styles/main.scss'

function MyApp({ Component, pageProps }: App) {
  return <Component {...pageProps} />
}

export default MyApp
