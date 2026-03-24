import { Checkbox } from "antd"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import SidebarInner from "../.."


const AddShippingAddress = () => {

    const [payment, setPayment] = useState(true)

    const handlClick = () => {
        setPayment(!payment)
    }

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="sideleft w-full md:w-1/4">
                        <SidebarInner />
                    </div>
                    <div className="w-full  pt-[30px] md:pt-[0px] px-[10px] md:w-3/4 md:px-[0px]">
                        <div>
                            <div className="container mx-auto">
                                {
                                    payment ?
                                        <div>
                                            <div className="text-center max-w-[1000px] mx-auto">
                                                <p className="text-left text-[16px] text-[#000]"><Link to='/shippingaddress'>Shipping addresses</Link> &gt; Add shipping</p>
                                                <h3 className="text-left text-[20px] text-[#000] mt-3">Step 1: Shipping address</h3>
                                                <div className="pt-[30px]">
                                                </div>
                                                <div className="flex gap-[24px]">
                                                    <div className="w-1/2">
                                                        <div className="points_data">
                                                            <label>First Name</label>
                                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <div className="points_data">
                                                            <label>Last Name</label>
                                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="points_data">
                                                    <label>Company</label>
                                                    <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                </div>
                                                <div className="points_data">
                                                    <label>Address1</label>
                                                    <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                </div>
                                                <div className="points_data">
                                                    <label>Address2</label>
                                                    <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                </div>
                                                <div className="points_data">
                                                    <label>Country</label>
                                                    <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                </div>
                                                <div className="flex gap-[24px]">
                                                    <div className="w-1/2">
                                                        <div className="points_data">
                                                            <label>City</label>
                                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <div className="points_data">
                                                            <label>Province/State</label>
                                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-[24px]">
                                                    <div className="w-1/2">
                                                        <div className="points_data">
                                                            <label>Postal </label>
                                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <div className="points_data">
                                                            <label>Phone</label>
                                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-left flex items-center gap-[10px]">
                                                    <button className="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px]" onClick={() => handlClick()}>NEXT</button>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <p className="text-left text-[16px] text-[#000]"><Link to='/shippingaddress'>Shipping addresses</Link> &gt; Add shipping</p>
                                            <h3 className="text-left text-[20px] text-[#000] mt-3">Step 2: Choose payment method</h3>
                                            <div className="account-info mt-[20px] mb-[30px]">
                                                <div class="border border-[#ff69b1] p-[16px] flex justify-between items-center">
                                                    <div class="rct_order__details ">
                                                        <p className="rct_order__number text-[15px] text-[#000]">Please choose a default payment method for this shipping address. Associating a payment method with your shipping address allows you to manage your subscriptions more easily.</p>
                                                        <div className="flex gap-[12px]">
                                                            <input type='radio' className="target" />
                                                            <div class="flex-1 text-body-2" data-id="11839962"><div class="payment-type text-[15px] color-[#000] font-bold">Visa ••••3132</div><div class="expires text-[15px] color-[#000] font-medium">Expires 7/23</div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-left flex items-center gap-[10px]">
                                                    <Link to='/shippingaddress'>
                                                        <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px]">Add Shipping Address</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddShippingAddress