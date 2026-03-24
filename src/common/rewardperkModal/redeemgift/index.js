
const RedeemGift = (props) => {
    return (
        <div>
            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
                id="exampleModal36" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none max-w-[550px]">
                    <div
                        class="modal-content rounded-[0px] border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding  outline-none text-current bg-[#fbf2f2]">
                        <div
                            class="modal-header  py-[10px] flex flex-shrink-0 items-center justify-between  border-b border-gray-200 rounded-t-md">
                            <h5 class="font-medium leading-normal text-gray-800 text-[18px] text-center px-[22px]" id="exampleModalLabel">$12 voucher</h5>
                            <button type="button"
                                class="absolute top-[14px] right-[12px] btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body relative py-[30px] px-[12px] text-center">
                            <div className="mb-4">
                        <p className="text-[16px] text-[#000] font-normal mb-3">Redeem 200 points for this reward?</p>
                        <p className="text-[13px] text-[#000] font-normal">$70 minimum spend</p>
                        </div>
                        <div className="button_left">
                        <button type="submit" class="check h-[42px] bg-[#ff779f] text-[#fff] font-medium min-w-[150px] rounded-[80px] px-[30px] hover:bg-[transparent] hover:text-[#000] border hover:border-[#000] mr-2 " data-bs-dismiss="modal">Not Now</button>
                        <button type="submit"  class="check h-[42px] bg-[#ff779f] text-[#fff] font-medium min-w-[150px] rounded-[80px] px-[30px] hover:bg-[transparent] hover:text-[#000] border hover:border-[#000]">Yes</button>
                        </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default RedeemGift