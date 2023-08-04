import React from 'react'

function ShopFilterCard(props) {
    return (
        <>

            <div className="px-6 py-7 rounded-md border-gray-600 bg-slate-800 mb-10 last:mb-0">
                <h6 className="text-xl pb-2 border-b border-gray-600">{props.title}</h6>

                <ul className="mt-7">
                    {
                        props?.data?.map((category, index) =>

                            <li className="mt-2" key={index}>
                                {category}
                            </li>

                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default ShopFilterCard