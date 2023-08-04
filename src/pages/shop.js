import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import ProductCard from "@/components/ProductCard/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { shopFilteredValue, storeAllItems, storedAllItems } from "@/redux/slice/filterSlice"
import { useEffect, useState } from "react"
import ShopPriceFilter from "@/components/ShopFilterCard/ShopPriceFilter"
import ShopCategoryFilter from "@/components/ShopFilterCard/ShopFilterCard"

function Shop({ products }) {

    const [cetagory, setCetagory] = useState([])
    const [filteredItems, setFilteredItems] = useState([])

    const dispatch = useDispatch()
    const getStoredAllItems = useSelector(storedAllItems)
    const filteredValue = useSelector(shopFilteredValue)


    useEffect(() => {
        dispatch(storeAllItems(products))

        const getUniqueCetagory = [...new Set(getStoredAllItems.map((items) => items.category))];
        setCetagory(getUniqueCetagory)

        const getFilterItems = getStoredAllItems.filter((items) => items.category === filteredValue.category || getStoredAllItems)
        setFilteredItems(getFilterItems)

    }, [filteredItems, cetagory, getStoredAllItems])

    return (
        <>
            <Breadcrumb pages="home" title="shop" />
            <section className="py-20 ">
                <div className="container">
                    <div className="flex">
                        <div className="w-3/12">
                            <ShopCategoryFilter title="Serched By Category" data={cetagory} />
                            <ShopPriceFilter />

                        </div>
                        <div className="w-9/12 pl-10">
                            <div className="grid grid-cols-3 gap-x-6 gap-y-10">
                                {
                                    filteredItems?.map((product, index) => {
                                        const { id, title, price, description, category, image, rating } = product
                                        return (
                                            <ProductCard key={index} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop

export async function getServerSideProps() {

    const res = await fetch(`https://fakestoreapi.com/products`)
    const products = await res.json()
    return {
        props: { products }
    }
}