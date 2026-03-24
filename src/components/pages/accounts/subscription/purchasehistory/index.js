

import React from "react"
// import SidebarMenu from "../../subscriptionDetails"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SidebarMenu from "../../sidebar";
import images from "../../../../../themes/appImage";
import SidebarInner from "../..";
import OrderDetails from "../../../../../common/orderdetailsModel";




const PurchaseHistory = () => {

    const subList = [{
        date: 'August 7,2021',
        order: 'Order #36411',
        price: '$52.02 USD',
    },
    {
        date: 'August 8,2021',
        order: 'Order #36411',
        price: '$52.02 USD',
    },
    {
        date: 'August 9,2021',
        order: 'Order #36411',
        price: '$52.02 USD',
    },
    {
        date: 'August 10,2021',
        order: 'Order #36411',
        price: '$52.02 USD',
    },
    {
        date: 'August 10,2021',
        order: 'Order #36411',
        price: '$52.02 USD',
    },
    {
        date: 'August 10,2021',
        order: 'Order #36411',
        price: '$52.02 USD',
    },
    {
        date: 'August 10,2021',
        order: 'Order #36411',
        price: '$52.02 USD',
    },
    {
        date: 'August 10,2021',
        order: 'Order #36411',
        price: '$52.02 USD',
    },]


    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
                <div className="sideleft w-full md:w-1/4">
                    <SidebarInner />

                </div>
                <div className="w-full pt-[30px] md:pt-[0px] px-[10px] md:w-3/4 md:px-[0px]">
                    <div>
                        <div className="container mx-auto">
                            <h3 className="text-[22px] font-bold">Hello,TEST TEST</h3>
                            <p className="text-[#000] text-[15px] mb-[10px] mt-[10px]">Purchase history</p>
                            <div className="account-info mt-[20px] mb-[70px]">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] ">
                                    {subList.map((x) => {
                                        return (
                                            <div class="border border-[#ff69b1] p-[16px] flex justify-between items-center cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal12">
                                                <div class="rct_order__details ">
                                                    <strong className="rct_order__date text-[14px] text-[#000]">
                                                        {x.date}
                                                    </strong>
                                                    <p className="rct_order__number text-[14px] text-[#000]">{x.order}</p>
                                                </div>

                                                <p className='text-[14px] text-[#000]'>{x.price}</p>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                                <OrderDetails/>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PurchaseHistory