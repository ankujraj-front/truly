import React from "react"
import { Link } from "react-router-dom"
import images from "../../themes/appImage"


const ReferModal = () =>{
    return(
        <div>

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
  id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none max-w-[550px]">
    <div
      class="modal-content rounded-[0px] border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding  outline-none text-current bg-[#fbf2f2]">
      <div
        class="modal-header m-[10px] py-[40px]  flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="font-medium leading-normal text-gray-800 text-[18px] text-center px-[22px]" id="exampleModalLabel">Give a friend $10 off their first purchase and earn 200 points if they spend over $1</h5>
        <button type="button"
          class="absolute top-[10px] right-[12px] btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4 pb-[48px]">
        <div className="flex flex-wrap items-center justify-center gap-[16px] mt-[25px] mb-[36px]">
        <Link to = '/'  className="icons w-[140px] flex h-[48px] px-[18px] py-0 bg-[#00aced] text-[14px] text-[#fff] items-center hover:text-[#fff]"><img src={images.twitter} className="w-[25px] mr-[12px]" />Tweet</Link>
        <a href=""  className="icons w-[140px] flex h-[48px] px-[18px] py-0 bg-[#1ebea5] text-[#fff] items-center hover:text-[#fff]"><img src={images.whatsapp} className="w-[25px] mr-[12px]" /> WhatsAPP</a>
        <a href=""  className="icons w-[140px] flex h-[48px] px-[18px] py-0 bg-[#0084ff] text-[#fff] items-center hover:text-[#fff]"><img src={images.messenger} className="w-[25px] mr-[12px]" /> Message</a>
        <a href=""  className="icons w-[140px] flex h-[48px] px-[18px] py-0 bg-[#3b5998] text-[#fff] items-center hover:text-[#fff]"><img src={images.facebook} className="w-[25px] mr-[12px]" /> Share</a>
        <a href=""  className="icons w-[140px] flex h-[48px] px-[18px] py-0 bg-[#999] text-[#fff] items-center hover:text-[#fff]"  ><img src={images.email} className="w-[25px] mr-[12px]" /> Email</a>
        </div>
        <div className="text-center">
        <p className="text-[#000] font-normal mb-3 text-[16px]">Or copy your link and share it anywhere</p>
        <div className="bg_copy bg-[#fff] flex justify-center py-[12px]">
            <p className="text-[17px] text-[#000] font-medium mr-[3px]">https://prz.io/beXygPuv</p>
            <button class="lion-copy-to-clipboard-button border border-[#bbb] bg-[#eee] px-[3px] py-[3px]" title="Copy to clipboard"><img src={images.clipboard} className='w-[15px]'/></button>
        </div>
        </div>

      </div>
      
    </div>
  </div>
</div>

        </div>
    )
}
export default ReferModal