import Image from "next/image"
import {AiFillStar, AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'

// Redux 
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/slice/cartSlice"
import Currency from "../Currency/Currency"

function ProductCard(props) {
    const {id, title, price, description, category,image, rating} = props
    const rate = Math.ceil(rating.rate)

    const dispatch = useDispatch()


    const addToCardItemBtn = () => {
        const product = {id, title, price, description, category,image, rating}
        dispatch(addToCart(product))
    }

    

  return (
    <>
    <div className="rounded-lg p-7 bg-gray-800">
        <div className="h-[350px] flex justify-center items-center bg-white overflow-hidden p-4 relative">
            <Image src={image} alt={title} width={300} height={400} className="max-w-full"/>
            <span className="absolute left-0 top-4 bg-rose-700 p-1 text-white">{category}</span>
        </div>
        <div className="mt-8">
            <h3 className="text-xxl line-clamp-1">{title}</h3>
            <div className="flex justify-between items-center my-3">
                <p>
                <span><Currency amount={price} currency="USD"/></span>
                </p>
                <div className="flex items-center gap-1">
                    <div>
                    <span>{rating.count}</span>
                    </div>
                    <div className="flex jus">
                        {
                            Array(rate).fill().map((_,index) => <AiFillStar key={index} className="text-yellow-300"/>)
                        }
                    </div>
                </div>
            </div>

            <div className="mt-5 flex gap-1">
                <button onClick={addToCardItemBtn} className="bg-blue-700 p-3 flex items-center justify-center gap-3 rounded-sm h-12 w-full"> <AiOutlineShoppingCart/> Add To Card</button>
                <button className="bg-blue-700 p-3 flex items-center justify-center gap-3 rounded-sm h-12 w-12">
                    <AiOutlineHeart/>
                </button>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default ProductCard