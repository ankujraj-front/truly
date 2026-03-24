import React from "react"
import { Link } from "react-router-dom"
import SidebarInner from "../../.."


const AddPaymentMethods = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="sideleft w-full md:w-1/4">
                        <SidebarInner />

                    </div>
                    <div className="w-full pt-[30px] md:pt-[0px] px-[10px] md:w-3/4 md:px-[0px]">
                        <div>
                            <div className="container mx-auto">
                                <div className="text-center max-w-[1000px] mx-auto">
                                    <p className="text-left text-[16px] text-[#000]"><Link to='/paymentmethods'>Payment Method</Link> &gt; Add Payment Methods</p>
                                    <div className="pt-[30px]">
                                    </div>
                                    <h3 className="text-[20px] text-[#000] text-left mb-[11px]">Payment Method</h3>
                                    <div className="points_data">
                                        <label>Name on card </label>
                                        <div class="form-group"><input type="text" class="form-data_line" /></div>
                                    </div>
                                    <div className="points_data">
                                        <label>Card number</label>
                                        <div class="form-group"><input type="text" class="form-data_line" placeholder="1234 1234 1234 1234" /></div>
                                    </div>
                                    <div className="flex gap-[24px]">
                                        <div className="w-1/2">
                                            <div className="points_data">
                                                <label>Expiration</label>
                                                <div class="form-group"><input type="text" class="form-data_line" placeholder="MM / YY" /></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <div className="points_data">
                                                <label>Security code</label>
                                                <div class="form-group"><input type="text" class="form-data_line" placeholder="CVV" /></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="billing_address">
                                        <h3 className="text-[20px] text-[#000] text-left mb-[11px]">Billing Address</h3>
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
                                            <label>Address1</label>
                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                        </div>
                                        <div className="points_data">
                                            <label>Address2</label>
                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                        </div>
                                        <div className="points_data">
                                            <label>City</label>
                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                        </div>
                                        <div className="points_data">
                                            <label>Phone</label>
                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                        </div>



                                        <div className="flex gap-[24px]">
                                            <div className="w-1/2">
                                                <div className="points_data">
                                                    <label>Country </label>
                                                    <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                </div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="points_data">
                                                    <label>Province/State  </label>
                                                    <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                </div>

                                            </div>
                                            <div className="w-1/2">
                                                <div className="points_data">
                                                    <label>Postal code</label>
                                                    <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="points_data">
                                            <label>Company</label>
                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                        </div>
                                        <div className="points_data">
                                            <label>Phone</label>
                                            <div class="form-group"><input type="text" class="form-data_line" /></div>
                                        </div>
                                        <p className="text-left">
                                            <input type="checkbox" value="1" />
                                            <label for="address_default_address_new" class="inline ml-2">
                                                Update all of my subscriptions to use this payment method.
                                            </label>
                                        </p>
                                        <div className="text-left flex items-center gap-[10px]">
                                            <Link to='/paymentmethods'>  <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px]">Add Payment Method</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddPaymentMethods