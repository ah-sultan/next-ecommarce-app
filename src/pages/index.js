import AllProducts from "@/components/AllProducts/AllProducts"
import Hero from "@/components/Hero/Hero"

function Home({products}) {
  return (
    <>
    <Hero/>
    <AllProducts products={products}/>
    </>
  )
}

export default Home

export async function getServerSideProps(){

  const res = await fetch(`https://fakestoreapi.com/products`)
  const products = await res.json()
  return{
    props : {products}
  }
}