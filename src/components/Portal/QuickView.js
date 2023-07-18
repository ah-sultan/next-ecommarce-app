import { useSelector } from "react-redux"
import Image from 'next/image';
import Currency from '@/components/Currency/Currency';
import Ratings from '@/components/Rating/Ratings';
import { addToCart } from '@/redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from "react-icons/ai";
import { hideQuickView } from "@/redux/slice/popupSlice";
import { useEffect } from "react";



function QuickView() {

    const dispatch = useDispatch()
    const addToCartItem = () => {
        dispatch(addToCart(data))
    }


    const data = useSelector((items) => items.popup.quickView.items)
    const visibilty = useSelector((items) => items.popup.quickView.visibilty)

    useEffect(() => {
        const body = document.body

        if (visibilty) {
            body.style.overflow = "hidden"
        } else {
            body.style.overflow = 'unset'
        }
    })
    return (
        <>
            <div className="flex justify-center items-center fixed w-full z-50 h-full left-0 right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.7)]" style={{ display: visibilty ? 'block' : 'none' }}>
                <div className="w-[800px] mx-auto p-10 bg-gray-700 relative">
                    <button className="absolute top-010 right-10 text-2xl" onClick={() => dispatch(hideQuickView())}>
                        <AiOutlineClose />
                    </button>
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
                                    <Ratings value={data?.rate} className="text-yellow-300 inline-block" />
                                </span>
                                <span className="text-gray-500 ml-2">{data.rating}</span>
                            </div>
                            <button onClick={addToCartItem} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default QuickView