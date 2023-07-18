import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Currency from '@/components/Currency/Currency';
import Ratings from '@/components/Rating/Ratings';
import { addToCart } from '@/redux/slice/cartSlice';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
    const [data, setData] = useState({})
    const router = useRouter()

    useEffect(() => {
        setData(router.query)
    }, [router.query])

    const dispatch = useDispatch()
    const addToCartItem = () => {
        dispatch(addToCart(data))
    }
    return (
        <div className="w-[1000px] mx-auto py-8 px-8">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <Image src={data.image} alt={data.title} width={400} height={600} />
                </div>
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
                    <p className="text-gray-600 mb-4">{data.description}</p>
                    <div className="flex items-center mb-4">
                        <Currency amount={data.price} currency="USD" />
                        <span className="text-gray-500 ml-1">In Stock</span>
                    </div>
                    <div className="flex items-center mb-4">
                        {/* Product Rating */}
                        <span className="text-xl flex">
                            <Ratings value={3.5} className="text-yellow-300 inline-block" />
                        </span>
                        <span className="text-gray-500 ml-2">{data.rating}</span>
                    </div>
                    <button onClick={addToCartItem} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
