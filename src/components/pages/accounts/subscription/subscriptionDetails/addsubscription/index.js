

import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SidebarInner from "../../..";
import images from "../../../../../../themes/appImage";





const AddSubscription = () => {

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
               <div className="w-full mb-[90px] pt-[30px] md:pt-[0px] px-[10px] md:w-3/4 md:px-[0px]">
                    <div>
                        <div className="container mx-auto">
                         <h3 className="text-[17px] text-[#000] pb-2"><Link to = '/subscriptiondetails'>Subscriptions</Link> &gt; Add a product</h3>
                       
                              <h3 className="text-[17px] text-[#000] pb-2">Add a product</h3>
                              <div className="relative">
                              <input type='text' placeholder="Search for a product to add" className="shadow-[0_0px_3px_0px_rgba(0,0,0,0.2)] w-full py-[12px] px-[12px] pl-[43px]" />
                              <svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-[12px] left-[12px]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
                              </div>

                            <div className="account-info mt-[40px] mb-[40px]">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] ">
                                    {subList.map((x) => {
                                        return (
                                            <Link to ='/subscriptionproductdetials'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AddSubscription