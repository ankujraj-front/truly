import React, { useState } from "react"
import { Link } from "react-router-dom"
import SidebarMenu from "../sidebar"



const ShippingDetails = () => {
    const ShippingAddress = [{
        id: 1,
        streetname: '1025 Granville Avenue',
        states: 'Los Angeles, CA 90014 United States'

    },
    {
        id: 2,
        streetname: '95 Sun Valley Dr',
        states: 'Walnut Creek, CA 94597 United States '

    },
    {
        id: 3,
        streetname: '731 South Spring Street',
        states: 'Los Angeles, CA 90014 United States'

    },
    {
        id: 4,
        streetname: '1025 GRANVILLE AVE Apt 10',
        states: 'Los Angeles, CA 90049-6032 United States'
    },
    {
        id: 5,
        streetname: '1025 GRANVILLE AVE Apt 10',
        states: 'Los Angeles, CA 90049-6032 United States'
    },
    {
        id: 6,
        streetname: '1025 GRANVILLE AVE Apt 10',
        states: 'Los Angeles, CA 90049-6032 United States'
    },]

    const handlClick = (id) => {
        setToggle(prevShownComments => ({
            ...prevShownComments,
            [id]: !prevShownComments[id]
        }));
    }



    const Cancel = (id) => {
        setToggle(false)
    }
    const [toggle, setToggle] = useState(false);

    const [formdetails, setFormDetails] = useState(false);

    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
                <div className="sideleft w-full md:w-1/4">
                    <SidebarMenu />

                </div>
                <div className="w-full px-[10px] md:w-3/4 md:px-[0px]">
                    <div class="headingtwoColumns flex items-center justify-between mt-[20px]">
                        <div class="commonHeading profile--heading Info--hide ">
                            <h3 className="text-[15px]  md:text-[22px] font-bold text-[#000]">Your Addresses</h3>
                        </div>

                        <div class="addressBtn__outer">
                            <button class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[100%] border-[#ff779f] bg-[#fff]" onClick={() => setFormDetails(!formdetails)}>ADD A NEW ADDRESS</button>
                        </div>
                    </div>
                    {formdetails ?
                        <div className="text-center max-w-[1000px] mx-auto">
                            <div className="pt-[30px]  pb-[10px]">
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
                            <div className="flex gap-[24px]">
                                <div className="w-1/2">
                                    <div className="points_data">
                                        <label>City</label>
                                        <div class="form-group"><input type="text" class="form-data_line" /></div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="points_data">
                                        <label>Country</label>
                                        <div class="form-group"><input type="text" class="form-data_line" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[24px]">
                                <div className="w-1/2">
                                    <div className="points_data">
                                        <label>Postal/Zip Code </label>
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
                            <p className="text-left">
                                <input type="checkbox" value="1" />
                                <label for="address_default_address_new" class="inline ml-2">Set as default address</label>
                            </p>
                            <div className="text-left flex items-center gap-[10px]">
                                <button className="primary rounded-[30px] add_Address border border-[#ff779f] bg-transparent text-[#000] h-[39px] font-medium w-[135px] my-6 uppercase">Add Address</button>
                                <p className="text-[#000] text-left text-[17px] cursor-pointer uppercase" onClick={() => setFormDetails(false)} >Cancel</p>
                            </div>
                        </div>
                        :    ''
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] gap-y-4 text-center my-[20px]">
                        {
                            ShippingAddress.map((x) => {
                                return (
                                    <div className="text-left">
                                        <div className="border border-[#ff69b1] p-[20px]">
                                            <h2 className="text-[#000] text-[15px] pb-[4px]">1025 Granville Avenue</h2>
                                            <p className="text-[#000]  text-[15px] pb-[6px]">Los Angeles, CA 90014 United States</p>
                                            <button className="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[100%] border-[#ff779f] bg-[#fff]" onClick={() => handlClick(x.id)}>EDIT</button>
                                            {
                                                toggle[x.id] && <div className="text-center max-w-[1000px] mx-auto mt-[8px]">
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
                                                    <div className="flex gap-[24px]">
                                                        <div className="w-1/2">
                                                            <div className="points_data">
                                                                <label>City</label>
                                                                <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="w-1/2">
                                                            <div className="points_data">
                                                                <label>Country</label>
                                                                <div class="form-group"><input type="text" class="form-data_line" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-[24px]">
                                                        <div className="w-1/2">
                                                            <div className="points_data">
                                                                <label>Postal/Zip Code </label>
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
                                                    <p className="text-left">
                                                        <input type="checkbox" value="1" />
                                                        <label for="address_default_address_new" class="inline ml-2">Set as default address</label>
                                                    </p>
                                                    <div className="text-left flex items-center	">
                                                        <button className="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] mt-[12px] border-2 min-w-[120px] border-[#ff779f] bg-[#fff]">UPDATE ADDRESS</button>
                                                        <div className="flex gap-[20px] ml-3">
                                                            <p className="text-[#000] text-left text-[13px] border-[#e4e4e4]" onClick={() => Cancel(x.id)}>Cancel</p>
                                                            <p className="text-[#000] text-left text-[13px] border-[#e4e4e4] underline">Delete</p>
                                                        </div>
                                                    </div>



                                                </div>
                                            }

                                        </div>
                                    </div>
                                )

                            })

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
    )
}
export default ShippingDetails