import React from "react"
import SidebarMenu from "../sidebar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../../../themes/appImage";
import { Link } from "react-router-dom";



const EditProfile = () => {
      
  
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
               <div className="sideleft w-full md:w-1/4">
                    <SidebarMenu />

                </div>
                <div className="w-full pt-[30px] lg:mb-[160px] md:pt-[0px] px-[10px] md:w-3/4 md:px-[0px]">

                    <div>
                    <h4 className="text-[20px] text-[#000] font-bold mb-[40px]">Edit Profile</h4>
                        <div className="container mx-auto">
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
                            <div className="flex gap-[24px]">
                                <div className="w-1/2">
                                    <div className="points_data">
                                        <label>Phone</label>
                                        <div class="form-group"><input type="text" class="form-data_line" /></div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="points_data">
                                        <label>Email</label>
                                        <div class="form-group"><input type="text" class="form-data_line" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[24px]">
                                <div className="w-1/2">
                                    <div className="points_data relative">
                                        <label>Password</label>
                                        <div class="form-group"><input type="password" class="form-data_line" /></div>
                                        <img src={images.eye} className='terms_value w-[24px] h-[24px] absolute top-[30px] right-[14px] cursor-pointer'/>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="points_data">
                                        <label>Confirm Password</label>
                                        <div class="form-group"><input type="password" class="form-data_line" /></div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[15px]">
                            <Link to ='/profile' class=" px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#FF779F] bg-[#fff] primary">Update Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default EditProfile