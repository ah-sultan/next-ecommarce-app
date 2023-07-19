import AllProducts from "@/components/AllProducts/AllProducts"
import Hero from "@/components/Hero/Hero"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { storeAllItems } from "@/redux/slice/filterSlice"

function Home({products}) {
const dispatch = useDispatch()

  useEffect(() => {
      dispatch(storeAllItems(products))  
  })

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