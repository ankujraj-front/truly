import React from "react"
import SidebarInner from "../.."
import images from "../../../../../themes/appImage"

const Upcoming = () => {

    const subList = [{
        date: 'Mini Gold Spoon + Satin Pouch 10.00% Off',
        order: 'Pre-paid',
        price: '$52.02 USD',
        img1: images.img1
    },
    ]
    return (
        <div>
           <div className="container mx-auto">
           <div className="flex flex-col md:flex-row">
               <div className="sideleft w-full md:w-1/4">
                  <SidebarInner />

               </div>
               <div className="w-full pt-[30px] mb-[100px] md:mb-[200px] md:pt-[0px] px-[10px] md:w-3/4 md:px-[0px]">
                    <h3 className="text-[20px] text-[#000]">Upcoming orders</h3>
                    <p className="text-[20px] text-[#000] mb-[10px]">September 6, 2021</p>
                    <span className="text-[14px] text-[#808f99]">704 s spring st Los Angeles, los angeles, California, 90014</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] ">
                {subList.map((x) => {
                    return (
                        <div>
                           
                            <div class="border border-[#ff69b1] p-[16px] flex justify-between items-center">
                                <img className='w-[50px]' src={x.img1} />
                                <div class="rct_order__details ">
                                    <strong className="rct_order__date text-[14px] text-[#000]">
                                        {x.date}
                                    </strong>
                                    <p className="rct_order__number text-[11px] uppercase bg-[#ff779f] flex px-[4px] py-[3px] w-fit rounded-[30px] text-[#fff]">{x.order}</p>
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
    )
}
export default Upcoming