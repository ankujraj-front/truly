import React, { useState } from "react"
import { Link } from "react-router-dom"
import SidebarInner from "../../.."
import images from "../../../../../../themes/appImage"




const ViewSubscriptionDetils = () => {

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

   const [address, setAddress] = useState(false)
   const [shipping, setShipping] = useState(false)


   const handlClick = () => {
      setAddress(!address)
   }
   const handlClickShipping = () => {
      setShipping(!shipping)
   }
   return (
      <div>
         <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
               <div className="sideleft w-full md:w-1/4">
                  <SidebarInner />

               </div>
               <div className="w-full pt-[30px] md:pt-[0px] px-[10px] md:w-3/4 md:px-[0px]">


                  <div className="account-info mt-[0px] mb:mt-[40px] mb-[30px]">
                     <p class="text-left text-[16px] text-[#000] mb-[10px]"><Link to="/subscriptiondetails">Subscriptions</Link> &gt; Product detail</p>
                     <div className="text-center flex justify-center mb-3">
                        <div>
                           <img src={images.img4} className='w-[200px] h-[200px]' />
                           <p className="text-[17px] text-[#000] mt-2 ">Defrost Summer Bod</p>
                        </div>
                     </div>
                     <div class="border border-[#ff69b1] p-[16px] flex justify-between items-center mb-12">
                        <span className="text-[15px] text-[#000] font-bold">Quantity</span>
                        <span className="text-[15px] text-[#000] font-normal">1</span>
                     </div>
                     <div class="border border-[#ff69b1] p-[16px] flex justify-between items-center mb-12" >
                        <span className="text-[15px] text-[#000] font-bold">Variant</span>
                        <span className="text-[15px] text-[#000] font-normal">Pink</span>
                     </div>
                     <div class="border border-[#ff69b1] p-[16px] flex justify-between items-center mb-12">
                        <span className="text-[15px] text-[#000] font-bold">Next order</span>
                        <span className="text-[15px] text-[#000] font-normal">Select a next shipment date</span>

                     </div>
                     <div class="accordion" id="accordionExample">
                        <div class="accordion-item bg-white border border border-[#ff69b1] mb-[30px] !rounded-[0px]">
                           <h2 class="accordion-header mb-3" id="headingOne">
                              <button class="
					accordion-button
					relative
					flex
					items-center
					w-full	
					py-4
					px-5
					text-base text-gray-800 text-left
					bg-white
					border-0
					rounded-none
					transition
					focus:outline-none
				" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                 aria-controls="collapseOne">
                                 <div className="flex flex-col">
                                    <div className="text-[15px] text-[#000] font-bold">Payment Method</div>
                                    <div className="text-[15px] text-[#000] font-normal">Visa ***3132</div>
                                    <div className="text-[15px] text-[#000] font-normal">Expires 7/23</div>
                                 </div>
                              </button>
                           </h2>
                           <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body py-4 px-5">
                                 <p className="text-[15px] text-[#000] font-normal flex items-center gap-[12px]">To edit payment method details please go to the payment methods page
                                    <Link to='/paymentmethods'>
                                       <svg class="svg-inline--fa fa-external-link-alt fa-w-16 rc-subtext" className="w-[15px]" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg></Link></p>

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

                                       <div class="payment-type text-[15px] color-[#000] font-bold">Visa ••••3132</div>
                                       <div class="expires text-[15px] color-[#000] font-medium">Expires 7/23</div>
                                    </div>

                                 </span>
                                 <Link to='/addpaymentmethods'>  <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px]">Add Payment method</button></Link>

                              </div>
                           </div>
                        </div>
                        <div class="accordion-item bg-white  border border-[#ff69b1] mb-[30px] !rounded-[0px]">
                           <h2 class="accordion-header mb-0" id="headingTwo">
                              <button class="
					            accordion-button
					            collapsed
					            relative
					            flex
					            items-center
					            w-full
					            py-4
					            px-5
					            text-base text-gray-800 text-left
					            bg-white
					            border-0
					            rounded-none
					            transition
					            focus:outline-none            
				" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                 aria-controls="collapseTwo">
                                 <div className="update_n">
                                    <h3 className="text-[15px] font-normal text-[#808f99]">Shipping Address</h3>
                                    <div class="text-body-2 mb-3" data-id="59111071"><div class="name">Marin Oberian</div><div class="address-line">1025 Angeles,California  </div><div class="city-state-zip">  los angeles, California 90014</div></div>
                                    <div class="flex-1 text-body-2" data-id="11839962">
                                    </div>
                                 </div>
                              </button>
                           </h2>
                           <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body py-4 px-5">
                                 {!address ?
                                    <div>
                                       <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] ">
                                          {subList.map((x) => {
                                             return (
                                                <div>

                                                   <div class="border border-[#ff69b1] p-[16px]">
                                                      <div className="justify-between items-center">

                                                         <div class="rct_order__details ">
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
                                                         <div class="text-body-2 mb-3" data-id="59111071">
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

                                                      <Link to='/editbillingmethods'> <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[100px] border-[#ff779f] bg-[#fff]">EDIT</button></Link>

                                                   </div>
                                                </div>
                                             )
                                          })
                                          }
                                       </div>
                                       <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px] mr-2">Update address</button>
                                       <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px]" onClick={handlClick}>Add shipping address</button>

                                    </div>
                                    :


                                    !shipping && <div>
                                       <h2 className="text-[24px] text-[#000]">Add shipping address</h2>
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
                                                <label>Postal</label>
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
                                       <div className="points_data">
                                          <label>Country</label>
                                          <div class="form-group">
                                             <select class="form-data_line">
                                                <option>Visa****32</option>
                                             </select>
                                          </div>
                                       </div>
                                       <button type="submit" name="add" onClick={handlClickShipping} class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px]">Save Shipping Address</button>



                                    </div>



                                 }
                                 {
                                    shipping &&
                                    <div className="update_shipping_address">
                                       <p className="flex bg-[#eee] py-[14px] px-[11px]"><svg className="svg-inline--fa fa-info-circle fa-w-16 rc-alert__icon w-[22px]" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg><span className="ml-[5px] text-[14px] text-[#000]">There is 1 subscription associated with this shipping address.</span></p>
                                       <div className="selected_news py-[12px]">
                                          <h3 className="text-[17px] text-[#808f99]">Selected subscription</h3>
                                          <p className="text-[15px] text-[#000]">"Pour le Visage" Face Towel</p>
                                       </div>
                                       <div className="update_n">
                                          <h3 className="text-[17px] text-[#808f99]">Update to:</h3>
                                          <div class="text-body-2 mb-3" data-id="59111071"><div class="name">asd</div><div class="address-line">704 s spring st Los Angeles</div><div class="city-state-zip">  los angeles, California 90014</div></div>
                                          <div class="flex-1 text-body-2" data-id="11839962">
                                          </div>

                                          <div class="payment-type text-[15px] color-[#000] font-bold">Visa ••••3132</div>
                                          <div class="expires text-[15px] color-[#000] font-medium">Expires 7/23</div>
                                       </div>
                                       <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px] ">Update for this subscription</button>

                                    </div>
                                 }




                              </div>
                           </div>
                        </div>
                        <div class="accordion-item bg-white  border border-t-[#ff69b1] border-[#ff69b1] mb-[30px] !rounded-[0px]">
                           <h2 class="accordion-header mb-0" id="headingThree">
                              <button class="
					                  accordion-button
					                  collapsed
					                  relative
					                  flex
					                  items-center
					                  w-full
					                  py-4
					                  px-5
					                  text-base text-gray-800 text-left
					                  bg-white
					                  border-0
					                  rounded-none
					                  transition
					                  focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                 aria-controls="collapseThree">
                                 <div className="update_n">
                                    <h3 className="text-[15px] font-normal text-[#808f99]">Email Address</h3>
                                    <div class="text-body-2 mb-3" data-id="59111071"><div class="name">Marin@Trulybeauty.com</div> </div>

                                 </div>
                              </button>
                           </h2>
                           <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body py-4 px-5">
                                 <h3>Updating this email address will update your default email for all subscriptions</h3>
                                 <div className="points_data mt-[12px]">
                                    <label>Email address</label>
                                    <div class="form-group"><input type="text" class="form-data_line" placeholder="marin@trulybeauty.com" /></div>
                                 </div>
                                 <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px] ">Update</button>

                              </div>
                           </div>
                        </div>
                     </div>




                     <div className="text-left flex items-center gap-[10px]">
                        <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px]">Skip this order</button>
                        <button type="submit" name="add" class="primary px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] mt-[22px] mb-[22px]">Cancel subscription</button>
                     </div>

                  </div>

                  <div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default ViewSubscriptionDetils