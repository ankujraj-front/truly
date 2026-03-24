import { data } from "autoprefixer"
import React from "react"
import { Link } from "react-router-dom"
import images from "../../../../themes/appImage"
import SidebarMenu from "../sidebar"


const dataoder = [{
    text1: 'Refunded',
    text2: '#Truly695573',
    text3: 'July 7, 2022',
    text4: 9.89,
    status: 'Fulfilled',
    button: 'ORDER DETAILS',
    img1: images.small

},
{
    text1: 'Refunded',
    text2: '#Truly695573',
    text3: 'July 7, 2022',
    text4: 9.89,
    status: 'UnFulfilled',
    button: 'ORDER DETAILS',
    img1: images.small

},
{
    text1: 'Refunded',
    text2: '#Truly695573',
    text3: 'July 7, 2022',
    text4: 9.89,
    status: 'Fulfilled',
    button: 'ORDER DETAILS',
    img1: images.small

},
{
    text1: 'Refunded',
    text2: '#Truly695573',
    text3: 'July 7, 2022',
    text4: 9.89,
    status: 'Fulfilled',
    button: 'ORDER DETAILS',
    img1: images.small

},
{
    text1: 'Refunded',
    text2: '#Truly695573',
    text3: 'July 7, 2022',
    text4: 9.89,
    status: 'Fulfilled',
    button: 'ORDER DETAILS',
    img1: images.small

},
{
    text1: 'Refunded',
    text2: '#Truly695573',
    text3: 'July 7, 2022',
    text4: 9.89,
    status: 'UnFulfilled',
    button: 'ORDER DETAILS',
    img1: images.small

},

]


const Orders = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="sideleft w-full md:w-1/4">
                        <SidebarMenu />

                    </div>
                    <div className="w-full px-[10px] md:w-3/4 md:px-[0px]">
                        <h2 className="text-[30px] text-[#000] text-left font-bold mt-[27px] md:mt-[0px]">Orders</h2>
                        <div className="pt-[30px] pt-[20px] pb-[10px]">

                        </div>
                        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mb-[67px]">
                            {dataoder.map((x) => {

                                return (
                                    <div class="addressArea border border-[#eee] px-[22px] py-[22px] ">
                                        <div class="shippingProduct__detail pb-[20px]">
                                            <div class="productOrder__image mb-[6px]">
                                                <img className='w-[50px]' src={x.img1} />
                                            </div>
                                            <div className="flex gap-[20px]">
                                                <span class="product__status font-bold text-[#666]">{x.text1}</span>
                                                <span class="productOrder__name text-[15px] text-[#666]">{x.text2}</span>
                                                <span class="productOrder__date text-[15px] text-[#666]"><time datetime="2022-07-07T17:24:43Z">{x.text3}</time></span>
                                            </div>
                                            <p className="flex gap-[48px]">
                                                <span class="productOrder__price">
                                                    <span class="productMoney font-bold text-[#666]"><span class="money">${x.text4}</span></span>
                                                </span>
                                                <span class="productOrder_filled text-[15px] text-[#666]">{x.status}</span>
                                            </p>
                                        </div>
                                        <div class="Commonbtn__outer text-left">
                                            <Link to='/ordersdetails' className="primary px-[11px] flex items-center text-center justify-center py-[9px]  text-[#000] uppercase rounded-[30px] border-2 w-[100%] border-[#ff779f] bg-[#fff]">{x.button}</Link>
                                        </div>

                                    </div>


                                )
                            }
                            )
                            }
                        </div>
                        <ul class="pagination blogPagination mb-30 pb-20 flex items-center justify-center gap-[16px]">
                            <li aria-hidden="true">
                                <button class="blogPagination__button border-2 border-[#3d4246] p-[15px] " disabled="" >
                                    <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 20 8" className="w-[20px] h-[20px] ">
                                        <path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" fill="#000" fill-rule="evenodd"></path>
                                    </svg>
                                    <span class="icon__fallback-text hidden ">Previous page</span>
                                </button>
                            </li>

                            <li class="blogPagination__text">
                                <span className="text-[20px] text-[#000]"> Page 1 of 2 </span>
                            </li>

                            <li>
                                <button class="blogPagination__button border-2 border-[#3d4246] p-[15px]">
                                    <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 20 8" className="w-[20px] h-[20px] ">
                                        <path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z" fill="#000" fill-rule="evenodd"></path>
                                    </svg>
                                    <span class="icon__fallback-text hidden p-[15px]">Next page</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Orders