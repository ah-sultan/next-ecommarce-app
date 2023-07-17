import Layout from "@/components/Layout"
import { SessionProvider } from "next-auth/react"
import { Inter } from 'next/font/google'
import { store } from "@/redux/store"
import { Provider } from "react-redux"
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <div className={inter.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </Provider>
      </SessionProvider>
    </>

  )
}