import React from "react"
import images from "../../themes/appImage"

const OrderDetails = (props) =>{
    return(
                        
    <div>
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal12" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Order Details</h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        <div className="">
        <img src={images.img1} className='w-[150px] mx-auto' />
        <div className="text-[16px] text-[#000] font-medium text-center pt-3">Super CBD Bundle 10.00% Off Auto renew x1</div>

        <div className="flex justify-between py-3  border-b-[1px]">
        <div className="text-[16px] text-[#000] font-medium">Price</div>
        <div className="text-[16px] text-[#000]">$52.02 USD</div>
        </div>
        <div className="flex justify-between py-3  border-b-[1px]">
        <div className="text-[16px] text-[#000] font-medium">Date</div>
        <div className="text-[16px] text-[#000]">August 7, 2021</div>
        </div>
        <div className="flex justify-between py-3  border-b-[1px]">
        <div className="text-[16px] text-[#000] font-medium">Order</div>
        <div className="text-[16px] text-[#000]">367793</div>
        </div>
        <div className="flex justify-between py-3  border-b-[1px]">
        <div className="text-[16px] text-[#000] font-medium">Free Standard Shipping (Free Standard Shipping)</div>
        <div className="text-[16px] text-[#000]">$0.00 USD</div>
        </div>
        <div className="flex justify-between py-3 ">
        <div className="text-[16px] text-[#000] font-medium">Total</div>
        <div className="text-[16px] text-[#000]">$52.02 USD</div>
        </div>
        </div>
         
      </div>
    </div>
  </div>
</div>

    </div>
    )
}
export default OrderDetails