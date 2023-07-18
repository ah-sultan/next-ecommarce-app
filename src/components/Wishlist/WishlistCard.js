import Image from 'next/image';
import { FaHeart, FaTrash, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slice/cartSlice';
import { addFromWhislist } from '@/redux/slice/wishlistSlice';
import Currency from '../Currency/Currency';
import Ratings from '../Rating/Ratings';

function WishlistCard(props) {

    const { id, title, image, category, price, rating } = props
    const discountPrice = price - 10
    const dispatch = useDispatch()

    const addToCartItems = () => {
        dispatch(addToCart(id, title, image, category, price, rating))
    }

    const removeFromWhisList = () => {
        dispatch(addFromWhislist(id))
    }
    return (
        <div key={id} className="p-4 border border-gray-800 rounded-md">
            <div className='mb-3 w-full h-[350px] flex items-center justify-center bg-white overflow-hidden p-5'>
                <Image
                    src={image}
                    alt={title}
                    className="max-w-full h-auto w-auto"
                    width={300}
                    height={450}

                />
            </div>
            <div className="flex justify-between mb-2">
                <h2 className="text-lg font-semibold h-16">{title}</h2>
                <FaHeart className="text-red-500 cursor-pointer" />
            </div>
            <div>
                <Ratings value={rating.rate} className="text-yellow-300 inline-block" />
            </div>
            <p className="text-gray-600 mb-1 mt-2">{category}</p>
            <div className="flex justify-between items-center mb-2">
                <p className="text-gray-800 font-semibold line-through">
                    <Currency amount={price} currency="USD" />
                </p>
                <p className="text-red-500 font-semibold">
                    <Currency amount={discountPrice} currency="USD" />
                </p>
            </div>
            <div className="flex justify-between items-center">
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                    onClick={removeFromWhisList}
                >
                    Remove <FaTrash className="inline-block ml-1" />
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    onClick={addToCartItems}
                >
                    Add to Cart <FaShoppingCart className="inline-block ml-1" />
                </button>
            </div>
        </div>
    )
}

export default WishlistCard