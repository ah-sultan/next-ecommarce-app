import { useDispatch } from "react-redux"
import { shopFilterHandler } from "@/redux/slice/filterSlice"

function ShopCategoryFilter(props) {
    const dispatch = useDispatch()

    return (
        <>

            <div className="px-6 py-7 rounded-md border-gray-600 bg-slate-800 mb-10 last:mb-0">
                <h6 className="text-xl pb-2 border-b border-gray-600">{props.title}</h6>

                <ul className="mt-7">
                    {
                        props?.data?.map((itemCategory, index) =>

                            <li className="mt-2 cursor-pointer" key={index} onClick={() => dispatch(shopFilterHandler({
                                category: itemCategory,
                            }))}>
                                {itemCategory}
                            </li>

                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default ShopCategoryFilter