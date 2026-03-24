import React, { useState } from 'react';
import { Slider, Switch } from 'antd';


const SiderRange = () => {

    return (
        <div>
            <Slider range />
            <div className='price_target flex justify-between'>
                <p>$ 0</p>
                <p>$ 100.00</p>
            </div>
        </div>
    )

}
export default SiderRange