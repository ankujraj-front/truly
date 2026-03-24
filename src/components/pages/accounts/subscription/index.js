

import React from "react"
import SidebarMenu from "../sidebar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../../../themes/appImage";
import { Link } from "react-router-dom";
import SidebarInner from "..";
import OrderDetails from "../../../../common/orderdetailsModel";



const Subscriptions = () => {

    const subList = [{
        date: 'August 7, 2021',
        order: 'Order #367793',
        price: '$52.02 USD'
    },
    ]


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
                            <p className="text-[#000] text-[15px] py-[20px]">There are no upcoming orders to display</p>
                           <Link to ='/addsubscription'> <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff]">Add a Product</button></Link>

                            <div className="account-info mt-[40px] mb-[30px]">
                                <p className='text-[20px] text-[#000] mb-3'>Your most recent order</p>
                                <div className="grid grid-cols-1 gap-[12px] ">
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

                            </div>
                            <Link to='/purchasehistory'>
                                <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] mb-12 bg-[#fff]">See all Order History</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <OrderDetails />
        </div>

    )
}
export default Subscriptions