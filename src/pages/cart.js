import CartCard from "@/components/CartCard/CartCard"
import { selectedCartItems } from "@/redux/slice/cartSlice"
import { useDispatch, useSelector } from "react-redux"


function cart() {
    const cartItems = useSelector(selectedCartItems)

  return (
    <>

    <section className="py-32 bg-gray-900 ">
    <div class="container mx-auto">
        <h1 class="mb-10 text-center text-2xl font-bold text-white">Cart Items</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg md:w-2/3">
        {
                cartItems?.map((product, index) => {
                    const {id, title, price, category,image} = product
                    return(
                        <CartCard key={index} id={id} title={title} price={price} category={category} image={image} />
                    )  
                })
            }
        </div>
        {/* <!-- Sub total --> */}
        <div class="mt-6 h-full rounded-lg border bg-gray-800 p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
            <p class="text-gray-300">Subtotal</p>
            <p class="text-gray-300">$129.99</p>
            </div>
            <div class="flex justify-between">
            <p class="text-gray-300">Shipping</p>
            <p class="text-gray-300">$4.99</p>
            </div>
            <hr class="my-4 border-gray-700" />
            <div class="flex justify-between">
            <p class="text-lg font-bold text-gray-100">Total</p>
            <div class="">
                <p class="mb-1 text-lg font-bold text-gray-100">$134.98 USD</p>
                <p class="text-sm text-gray-300">including VAT</p>
            </div>
            </div>
            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
        </div>
    </div>
    </section>

    </>
  )
}

export default cart