import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useEffect, useState } from 'react';
import Currency from '../Currency/Currency';


function ShopPriceFilter() {
    const defultValue = 100
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(defultValue)



    const onSliderChange = (value) => {
        setMinValue(value[0])
        setMaxValue(value[1])
        // dispatch(setPrice({
        //     minPrice: value[0],
        //     maxPrice: value[1]
        // }))
    }

    return (

        <>
            <div className="px-6 py-7 rounded-md border-gray-600 bg-slate-800 mb-10 last:mb-0">
                <h6 className="text-xl pb-2 border-b border-gray-600">Filtered By Price</h6>

                <div className="mt-7">
                    <div className='mb-3'>
                        <p className='flex gap-x-2'>
                            <span>
                                <Currency currency="USD" amount={minValue} />
                            </span>
                            <span>
                                -
                            </span>
                            <span>
                                <Currency currency="USD" amount={maxValue} />
                            </span>
                        </p>
                    </div>


                    <Slider
                        range
                        allowCross={false}
                        min={0}
                        max={100}
                        defaultValue={[0, defultValue]}
                        draggableTrack
                        onChange={onSliderChange}

                    />
                </div>
            </div>
        </>
    )
}

export default ShopPriceFilter