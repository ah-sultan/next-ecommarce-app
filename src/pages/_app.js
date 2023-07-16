import Layout from "@/components/Layout"
import { Inter } from 'next/font/google'
import { store } from "@/redux/store"
import { Provider } from "react-redux"
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <div className={inter.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
      </Provider>
    </>

  )
}