import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App