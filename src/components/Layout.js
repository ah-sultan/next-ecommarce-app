import Footer from '@/components/sheared/Footer'
import Header from '@/components/sheared/Header'
import Portal from './Portal/portal'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Portal />
      <Footer />
    </>
  )
}

export default Layout