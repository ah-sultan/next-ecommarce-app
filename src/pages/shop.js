import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import ProductCard from "@/components/ProductCard/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { shopFilterHandler, shopFilteredValue, storeAllItems, storedAllItems } from "@/redux/slice/filterSlice"
import { useEffect, useState } from "react"
import ShopPriceFilter from "@/components/ShopFilterCard/ShopPriceFilter"
import ShopCategoryFilter from "@/components/ShopFilterCard/ShopFilterCard"
import { AiOutlineClose } from "react-icons/ai"
import Currency from "@/components/Currency/Currency"

function shop({ products }) {

    const [cetagory, setCetagory] = useState([])
    const [filteredItems, setFilteredItems] = useState([])

    const dispatch = useDispatch()
    const getStoredAllItems = useSelector(storedAllItems)
    const filteredValue = useSelector(shopFilteredValue)

    dispatch(storeAllItems(products))

    useEffect(() => {


        const getUniqueCetagory = [...new Set(getStoredAllItems.map((items) => items.category))];
        setCetagory(getUniqueCetagory)

        const getFilterItems = getStoredAllItems.filter((items) => {


            if (filteredValue.category && filteredValue.price) {

                return items.category === filteredValue.category && (items.price >= filteredValue.price?.minPrice && items.price <= filteredValue.price?.maxPrice)

            } else if (filteredValue.category) {

                return items.category === filteredValue.category

            } else if (filteredValue.price) {

                return items.price >= filteredValue.price?.minPrice && items.price <= filteredValue.price?.maxPrice

            } else {
                return items
            }
        }
        )
        setFilteredItems(getFilterItems)

    }, [filteredItems, cetagory, getStoredAllItems, filteredValue.category, filteredValue.price, products])

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

                            {(filteredValue.category || filteredValue.price) &&
                                <div className="mb-3  items-center gap-2 flex">
                                    {filteredValue.category &&
                                        <div className="bg-slate-800 px-4 py-3 rounded-3xl w-fit flex items-center leading-none">
                                            Cetagory: {filteredValue.category}
                                            <button
                                                className="flex items-center ml-2"
                                                onClick={() => dispatch(shopFilterHandler({
                                                    category: null,
                                                }))}
                                            >
                                                <AiOutlineClose />
                                            </button>
                                        </div>

                                    }

                                    {
                                        filteredValue.price && <div className="bg-slate-800 px-4 py-3 rounded-3xl w-fit flex items-center leading-none">
                                            Price: <div className="pl-1">
                                                <Currency amount={filteredValue.price?.minPrice} currency="USD" /> -
                                                <Currency amount={filteredValue.price?.maxPrice} currency="USD" />
                                            </div>
                                            <button
                                                className="flex items-center ml-2"
                                                onClick={() => dispatch(shopFilterHandler({
                                                    price: null,
                                                }))}
                                            >
                                                <AiOutlineClose />
                                            </button>
                                        </div>
                                    }


                                    <div>
                                        <button className="bg-slate-800 px-4 py-3 rounded-3xl w-fit flex items-center leading-none" onClick={() => dispatch(shopFilterHandler({
                                            category: null,
                                            price: null
                                        }))}>

                                            clear
                                        </button>
                                    </div>
                                </div>
                            }
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

export default shop

export async function getServerSideProps() {

    const res = await fetch(`https://fakestoreapi.com/products`)
    const products = await res.json()
    return {
        props: { products }
    }
}