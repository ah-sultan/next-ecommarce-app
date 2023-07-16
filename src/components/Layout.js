import Footer from '@/pages/sheared/Footer'
import Header from '@/pages/sheared/Header'

function Layout({children}) {
  return (
    <>
    <Header/>
    <main>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout