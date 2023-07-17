import Image from "next/image";
import { useDispatch } from "react-redux";
import { increementQuantity, decreementQuantity, removeCartItem } from "@/redux/slice/cartSlice";
import Currency from "../Currency/Currency";
import { AiFillDelete } from "react-icons/ai";

function CartCard(props) {
  const { id, title, price, quantity, category, image, } = props
  const dispatch = useDispatch()

  const increementItemsQuantity = () => {
    dispatch(increementQuantity(id))
  }

  const decreementItemsQuantity = () => {
    dispatch(decreementQuantity(id))
  }

  const removeItemFormCart = () => {
    dispatch(removeCartItem(id))
  }
  return (
    <div class="justify-between mb-6 rounded-lg bg-gray-800 p-6 shadow-md sm:flex sm:justify-start">
      <div class="flex">
        <div className="w-3/12 h-[170px] bg-white flex justify-center items-center overflow-hidden p-3">
          <Image src={image} alt={title} width={250} height={300} className="max-w-full" />
        </div>
        <div class="mt-5 sm:mt-0 w-9/12 pl-5 pr-7">
          <h2 class="text-lg font-bold text-gray-100">{title}</h2>
          <p class="mt-1 text-xs text-gray-300">{category}</p>
        </div>
      </div>
      <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
        <div class="flex items-center border-gray-700">
          <span onClick={decreementItemsQuantity} class="cursor-pointer rounded-l bg-gray-700 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
          <span class="h-8 w-8 border bg-gray-800 text-white text-center text-xs outline-none flex items-center justify-center">{quantity}</span>
          <span onClick={increementItemsQuantity} class="cursor-pointer rounded-r bg-gray-700 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
        </div>
        <div class="flex items-center space-x-4">
          <p class="text-sm text-gray-100">
            <Currency amount={price} currency="USD" />
          </p>
          <button onClick={removeItemFormCart}>
            <AiFillDelete />
          </button>

        </div>
      </div>
    </div>
  );
};

export default CartCard;
