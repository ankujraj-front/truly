

import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SidebarMenu from "../../sidebar";
import images from "../../../../../themes/appImage";
import SidebarInner from "../..";




const PaymentMethods = () => {

    const subList = [{
        name: 'asd',
        adress: '704 s spring st Los Angeles',
        city: '  los angeles, California 90014',
        img1: images.img1,
        visa: 'Visa ••••3132',
        expire: 'Expires 7/23'
    },
    {
        name: 'asd',
        adress: '704 s spring st Los Angeles',
        city: '  los angeles, California 90014',
        img1: images.img1,
        visa: 'Visa ••••3132',
        expire: 'Expires 7/23'
    },
    {
        name: 'asd',
        adress: '704 s spring st Los Angeles',
        city: '  los angeles, California 90014',
        img1: images.img1,
        visa: 'Visa ••••3132',
        expire: 'Expires 7/23'
    },
    {
        name: 'asd',
        adress: '704 s spring st Los Angeles',
        city: '  los angeles, California 90014',
        img1: images.img1,
        visa: 'Visa ••••3132',
        expire: 'Expires 7/23'
    },]


    return (
        <div className="container mx-auto">
           <div className="flex flex-col md:flex-row">
               <div className="sideleft w-full md:w-1/4">
                  <SidebarInner />

               </div>
               <div className="w-full pt-[30px] mb-[50px] md:pt-[0px] px-[10px] md:w-3/4 md:px-[0px]">
                    <div>
                        <div className="container mx-auto">
                            <h3 className="text-[22px] font-bold">Hello,TEST TEST</h3>
                            <p className="text-[#000] text-[15px] py-[20px]">Payment Methods</p>
                            <Link to = '/addpaymentmethods'><button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff]">Add Payment Methods</button></Link>
                            <div className="account-info mt-[40px] mb-[30px]">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12px] ">
                                    {subList.map((x) => {
                                        return (
                                            <div>

                                                <div class="border border-[#ff69b1] p-[16px]">
                                                    <div className=" flex justify-between items-center">

                                                        <div class="rct_order__details ">
                                                            <p className="text-[17px] text-[#808f99]">Add Payment Methods </p>
                                                            <span class="mr-2 flex items-center">
                                                                <div class="card-logo mr-2 ">
                                                                    <svg class="visa-icon" width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0 3C0 1.34315 1.34315 0 3 0H33C34.6569 0 36 1.34315 36 3V21C36 22.6569 34.6569 24 33 24H3C1.34315 24 0 22.6569 0 21V3Z" fill="#D8E3F3"></path>
                                                                        <path d="M30.9827 7.52625H29.0967C28.5265 7.52625 28.0879 7.70168 27.8248 8.27186L24.2283 16.4736H26.7721C26.7721 16.4736 27.2107 15.3771 27.2984 15.114C27.5616 15.114 30.0616 15.114 30.4125 15.114C30.5002 15.421 30.7195 16.4298 30.7195 16.4298H33.0002L30.9827 7.52625ZM28.0002 13.2719C28.2195 12.7455 28.9651 10.7719 28.9651 10.7719C28.9651 10.8157 29.1844 10.2455 29.2721 9.93853L29.4476 10.728C29.4476 10.728 29.93 12.8771 30.0177 13.3157H28.0002V13.2719Z" fill="#3362AB"></path>
                                                                        <path d="M24.4036 13.535C24.4036 15.3771 22.7369 16.6052 20.1492 16.6052C19.0527 16.6052 18.0001 16.3859 17.4299 16.1227L17.7808 14.1052L18.0878 14.2368C18.8773 14.5876 19.4036 14.7192 20.3685 14.7192C21.0703 14.7192 21.8159 14.4561 21.8159 13.842C21.8159 13.4473 21.5089 13.1841 20.544 12.7455C19.6229 12.3069 18.3948 11.6052 18.3948 10.3332C18.3948 8.57886 20.1054 7.39465 22.5176 7.39465C23.4387 7.39465 24.2282 7.57009 24.7106 7.78939L24.3598 9.71921L24.1843 9.54378C23.7457 9.36834 23.1755 9.1929 22.3422 9.1929C21.4212 9.23676 20.9826 9.6315 20.9826 9.98237C20.9826 10.3771 21.5089 10.6841 22.3422 11.0789C23.7457 11.7368 24.4036 12.4824 24.4036 13.535Z" fill="#3362AB"></path>
                                                                        <path d="M3 7.61404L3.04386 7.4386H6.81579C7.3421 7.4386 7.73684 7.61404 7.86842 8.18421L8.70175 12.1316C7.86842 10.0263 5.9386 8.31579 3 7.61404Z" fill="#F9B50B"></path>
                                                                        <path d="M14.0088 7.52628L10.1931 16.4298H7.60534L5.41235 8.97365C6.9913 9.98242 8.30709 11.5614 8.78955 12.6579L9.0527 13.5789L11.4211 7.48242H14.0088V7.52628Z" fill="#3362AB"></path>
                                                                        <path d="M15.0175 7.48242H17.4298L15.8947 16.4298H13.4824L15.0175 7.48242Z" fill="#3362AB"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex-1 text-body-2" data-id="11839962">

                                                                    <div class="payment-type text-[15px] color-[#000] font-bold">{x.visa}</div>
                                                                    <div class="expires text-[15px] color-[#000] font-medium">{x.expire}</div>
                                                                </div>

                                                            </span>
                                                        </div>
                                                        <div class="text-body-2" data-id="59111071">
                                                            <p className="text-[17px] text-[#808f99]">Billing Address</p>
                                                            <div class="name">
                                                                {x.name}
                                                            </div>
                                                            <div class="address-line">
                                                                {x.adress}
                                                            </div>
                                                            <div class="city-state-zip">
                                                                {x.city}
                                                            </div>
                                                        </div>

                                                        <div>
                                                        </div>

                                                    </div>
                                                    <h4 class="text-[15px] text-[#808f99] mt-[20px]">Associated subscriptions</h4>
                                                    <div class="text-[15px] text-[#000] mb-[20px]">Super CBD Bundle 10.00% Off Auto renew - 30 day(s)</div>
                                                   <Link to = '/editbillingmethods'> <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[100px] border-[#ff779f] bg-[#fff]">EDIT</button></Link>
                                                   <button type="submit" name="add" class="primary px-[11px] ml-[6px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff]">Move subscriptions here</button>

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
export default PaymentMethods