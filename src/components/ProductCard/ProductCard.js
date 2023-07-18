import Image from "next/image"
import { AiFillStar, AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import Link from "next/link"

// Redux 
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/redux/slice/cartSlice"
import { addToWhislist, wishlistSelectedItem, } from "@/redux/slice/wishlistSlice"
import { showQuickView } from "@/redux/slice/popupSlice"
import Currency from "../Currency/Currency"
import Ratings from "../Rating/Ratings"

function ProductCard(props) {
    const { id, title, price, description, category, image, rating } = props
    const dispatch = useDispatch()

    const product = { id, title, price, description, category, image, rating }
    const addToCardItemBtn = () => {

        dispatch(addToCart(product))
    }

    const addToWhislistItem = () => {
        dispatch(addToWhislist(product))
    }

    const showQuickViewHandle = () => {
        const product = { id, title, price, description, category, image, rate: rating.rate, count: rating.count }
        dispatch(showQuickView(product))
    }

    const activeWishlist = useSelector(wishlistSelectedItem)

    const data = activeWishlist.find((items) => items.id === id)

    return (
        <>
            <div className="rounded-lg p-7 bg-gray-800">
                <div className="h-[350px] flex justify-center items-center bg-white overflow-hidden p-4 relative">
                    <Image src={image} alt={title} width={300} height={400} className="max-w-full" />
                    <span className="absolute left-0 top-4 bg-rose-700 p-1 text-white">{category}</span>
                </div>
                <div className="mt-8">
                    <Link href={{
                        pathname: '/id',
                        query: { id, title, price, description, category, image, rating: rating.rate }
                    }}>
                        <h3 className="text-xxl line-clamp-1">{title}</h3>
                    </Link>
                    <div className="flex justify-between items-center my-3">
                        <p>
                            <span><Currency amount={price} currency="USD" /></span>
                        </p>
                        <div className="flex items-center gap-2">
                            <div>
                                <span>{rating.count}</span>
                                <span>(reviews)</span>
                            </div>
                            <div className="flex">
                                <Ratings value={rating?.rate} className="text-yellow-300" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex gap-1">
                        <button onClick={showQuickViewHandle} className="bg-blue-700 flex items-center justify-center gap-3 rounded-sm h-12 w-12">
                            <AiOutlineSearch />
                        </button>
                        <button onClick={addToCardItemBtn} className="bg-blue-900 p-3 flex items-center justify-center gap-3 rounded-sm h-12 flex-1"> <AiOutlineShoppingCart /> Add To Card</button>
                        <button onClick={addToWhislistItem} className="bg-blue-700 p-3 flex items-center justify-center gap-3 rounded-sm h-12 w-12">
                            {
                                data ? <AiFillHeart /> : <AiOutlineHeart />
                            }
                        </button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductCard