import Footer from '@/components/sheared/Footer'
import Header from '@/components/sheared/Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout