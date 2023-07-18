import CartCard from "@/components/CartCard/CartCard"
import Currency from "@/components/Currency/Currency"
import { selectedCartItems, totalItemPrice } from "@/redux/slice/cartSlice"
import { useSelector } from "react-redux"


function Cart() {
    const cartItems = useSelector(selectedCartItems)
    const totalPrice = useSelector(totalItemPrice)

    const subTotal = totalPrice
    const shippingCost = 12
    const total = totalPrice + shippingCost

    return (
        <>

            <section className="py-32 bg-gray-900 ">
                <div className="container mx-auto">
                    <h1 className="mb-10 text-center text-2xl font-bold text-white">Cart Items</h1>
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">
                            {
                                cartItems?.map((product, index) => {
                                    const { id, title, price, category, image, quantity } = product
                                    return (
                                        <CartCard key={index} id={id} title={title} price={price} category={category} image={image} quantity={quantity} />
                                    )
                                })
                            }
                        </div>
                        {/* <!-- Sub total --> */}
                        <div className="mt-6 h-full rounded-lg border bg-gray-800 p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-300">Subtotal</p>
                                <p className="text-gray-300">
                                    <Currency amount={subTotal} currency="USD" />
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-300">Shipping</p>
                                <p className="text-gray-300">
                                    <Currency amount={shippingCost} currency="USD" />
                                </p>
                            </div>
                            <hr className="my-4 border-gray-700" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold text-gray-100">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold text-gray-100">
                                        <Currency amount={total} currency="USD" />
                                    </p>
                                    <p className="text-sm text-gray-300">including VAT</p>
                                </div>
                            </div>
                            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default cart