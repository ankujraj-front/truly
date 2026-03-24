

import React, { useState } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import images from "../../../../../../themes/appImage";
import SidebarInner from "../../..";
import { DatePicker, Space } from 'antd';




const SubscriptionsProductDetails = () => {
    const [item, setItems] = useState(0)

    const handleIncrement = () => {
        setItems(item + 1)
    }
    const handledecrement = () => {
        if (item > 0) {
            setItems(item - 1)
        }
    }

    return (

        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
               <div className="sideleft w-full md:w-1/4">
                  <SidebarInner />

               </div>
               <div className="w-full pt-[30px] md:pt-[0px] px-[10px] md:w-3/4 md:px-[0px]">


                    <div className="account-info mt-[0px]  md:mt-[40px] mb-[30px]">
                    <p class="text-left text-[16px] text-[#000] pb-[22px]"><Link to="/subscriptiondetails">Subscriptions</Link> &gt; <Link to = "/addsubscription">Add a product </Link> &gt; Product detail</p>
                        <div className="text-center flex justify-center flex-row">
                            <div>
                                <img src={images.img4} className='w-[200px] h-[200px]' />
                                <p className="text-[17px] text-[#000] mt-2 ">Defrost Summer Bod</p>
                            </div>
                        </div>

                        <div className="mb-3">
                            <p className="text-[14px] text-[#000] mb-2">Quantity</p>
                            <div className="point_task flex gap-[20px]">
                                <div className="target w-[90px] border-2 border-[#ddd] relative">
                                    <button type="button" class="qty_minus absolute right-[0] w-[40px] border-b-[1px] border-[#ddd]" data-id="" data-qty="0" onClick={() => handleIncrement()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[25px] mx-auto">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                        </svg>

                                    </button>
                                    <input type="text" className="w-[45px] h-[50px] border-r-[2px] text-center" value={item} aria-label="quantity" pattern="[0-9]*" name="quantity" id="Quantity" />
                                    <button type="button" class="qty_minus absolute right-[0] bottom-[0] w-[40px] " data-id="" data-qty="0" onClick={() => handledecrement()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[25px] mx-auto">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className="points_data">
                            <label className="text-[14px] text-[#000] flex">Order frequency</label>
                            <select class="form-select appearance-none block w-full px-3 py-[11px] text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded  shadow-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-xl  focus:outline-none mb-[10px]" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">30 days</option>
                                <option value="2">90 days</option>
                                <option value="3">120 days</option>
                            </select>
                        </div>
                        <div className="points_data">
                            <label className="text-[14px] text-[#000] flex">Shipping & billing label</label>
                            <select class="form-select appearance-none block w-full px-3 py-[11px] py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded  shadow-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-xl  focus:outline-none mb-[10px]" aria-label="Default select example">
                                <option selected>Shipping & billing label</option>
                                <option value="1">Lorem ipsum</option>
                                <option value="2">Lorem ipsum</option>
                                <option value="3">Lorem ipsum</option>
                            </select>
                        </div>
                        <div className="points_data">
                            <label className="text-[14px] text-[#000] flex">First shipment date</label>
                            <Space direction="vertical" className="w-full ">
                                <DatePicker className="w-full py-[10px] rounded-[4px]" />
                            </Space>
                        </div>

                        <div className="text-left flex items-center gap-[10px]">
                            <Link to='/upcoming'>  <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px]">Add a Product</button></Link>
                            <Link to='/productdetails'>  <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px]">View on Store</button></Link>
                        </div>

                    </div>

                    <div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default SubscriptionsProductDetails