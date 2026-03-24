

import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import images from "../../../../../themes/appImage";
import SidebarInner from "../..";




const SubscriptionsDetails = () => {

    const subList = [{
        date: 'Mini Gold Spoon + Satin Pouch 10.00% Off',
        order: 'Cancelled',
        price: '$52.02 USD',
        img1: images.img1
    },
    {
        date: 'Mini Gold Spoon + Satin Pouch 10.00% Off',
        order: 'Cancelled',
        price: '$52.02 USD',
        img1: images.img1
    },
    {
        date: 'Mini Gold Spoon + Satin Pouch 10.00% Off',
        order: 'Cancelled',
        price: '$52.02 USD',
        img1: images.img1
    },
    {
        date: 'Mini Gold Spoon + Satin Pouch 10.00% Off',
        order: 'Cancelled',
        price: '$52.02 USD',
        img1: images.img1
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
                            <h3 className="text-[22px] mb-[20px] font-bold">Hello,TEST TEST</h3>
                            <Link to = '/addsubscription'><button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff]">Add Product</button></Link>
                            <p className="text-[#000] text-[15px] font-bold py-[20px] pb-[5px]">Active subscriptions</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] ">
                                    {subList.map((x) => {
                                        return (
                                           <Link to = '/viewsubscriptionproductdetials'>
                                            <div>
                                                <p className="text-[15px] text-[#808f99] mb-[3px]">1025 Granville Avenue Los Angeles, California 90014 | Visa ••••3132
                                                </p>
                                                <div class="border border-[#ff69b1] p-[16px] flex justify-between items-center">
                                                    <img className='w-[50px]' src={x.img1} />
                                                    <div class="rct_order__details ">
                                                        <strong className="rct_order__date text-[14px] text-[#000]">
                                                            {x.date}
                                                        </strong>
                                                        <p className="rct_order__number mt-[4px] text-[11px] uppercase bg-[#ff779f] flex px-[4px] py-[3px] w-fit rounded-[30px] text-[#fff]">{x.order}</p>
                                                    </div>

                                                    <p className='text-[14px] text-[#000]'>{x.price}</p>
                                                </div>
                                            </div>
                                            </Link>
                                        )
                                    })
                                    }
                                </div>

                            <div className="account-info mt-[30px] mb-[40px]">
                            <p className="text-[#000] text-[15px] font-bold pt-[0px] py-[20px] pb-[5px]">InActive subscriptions</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] ">
                                    {subList.map((x) => {
                                        return (
                                            <div>
                                                <p className="text-[15px] text-[#808f99] mb-[3px]">1025 Granville Avenue Los Angeles, California 90014 | Visa ••••3132
                                                </p>
                                                <div class="border border-[#ff69b1] p-[16px] flex justify-between items-center">
                                                    <img className='w-[50px]' src={x.img1} />
                                                    <div class="rct_order__details ">
                                                        <strong className="rct_order__date text-[14px] text-[#000]">
                                                            {x.date}
                                                        </strong>
                                                        <p className="rct_order__number mt-[4px] text-[11px] uppercase bg-[#ff779f] flex px-[4px] py-[3px] w-fit rounded-[30px] text-[#fff]">{x.order}</p>
                                                    </div>

                                                    <p className='text-[14px] text-[#000]'>{x.price}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                    }
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SubscriptionsDetails