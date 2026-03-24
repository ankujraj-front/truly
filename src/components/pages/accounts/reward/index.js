import React from "react"
import { Link } from "react-router-dom"
import ReferModal from "../../../../common/referModal"
import RewardperkModal from "../../../../common/rewardperkModal"
import ProductreviewModal from "../../../../common/rewardperkModal/ProductReviewModal"
import RedeemGift from "../../../../common/rewardperkModal/redeemgift"
import ReviewModal from "../../../../common/rewardperkModal/ReviewModal"
import images from "../../../../themes/appImage"
import SidebarMenu from "../sidebar"

const Reward = () => {
    const rewardList = [{
        name: 'Member',
        text1: 'Start here',
        text2: '1 point per $1',
    },
    {
        name: 'Platinum',
        text1: 'Spend $250',
        text2: '1 point per $1',
    },
    {
        name: 'Diamond',
        text1: 'Spend $600',
        text2: '1 point per $1',
    },
    {
        name: 'Subscriber',
        text1: '2 points per $1',
        text3: 'YOU ARE HERE'
    },
    ]

    const EarnList = [{
        id:1,
        img1: images.rewardcreateaccount,
        text1: 'Create an account',
        text2: <div>50 <span className="points_dat_1"> points</span></div>,
        text3: images.rewardcheckmarkicon
    },
    {   id:2,
        img1: images.rewardrefferfriend,
        text1: 'Refer a friend',
        text2: <div>200 <span className="points_dat_1"> points</span></div>,
        text3: 'icons_svg',
        text4: 'COMPLETE ACTIVITY',
    },
    {   id:3,
        img1: images.rewardcreditcardicon,
        text1: 'Make a purchase',
        text2: <div>2<span className="points_dat_1"> points per $1  </span></div>,
        text4: 'LEARN MORE',
        textmodel:3
    },
    {    id:4,
        img1: images.reward_instagram_icon,
        text1: 'Follow us on Instagram',
        text2: <div>10<span className="points_dat_1"> points</span></div>,
        text3: images.rewardcheckmarkicon
    },
    {    id:5,
        img1: images.reward_like_facebook_icon,
        text1: 'Like us on Facebook',
        text2: <div>10 <span className="points_dat_1"> points</span></div>,
        text3: images.rewardcheckmarkicon
    },
    {   id:6,
        img1: images.download,
        text1: 'Celebrate a Birthday',
        text2: <div>200 <span className="points_dat_1"> points</span></div>,
        text3: 'icons_svg',
        text4: '41 Days',
        birthay:'new'
       

    },
    ]

    const EarnListSeond = [{
        img1: images.rewardsighupicon,
        text1: 'Sign up to our mailing list',
        text2: <div>75 <span className="points_dat_1"> points</span></div>,
        text3: images.rewardcheckmarkicon
    },
    {
        img1: images.rewardwritereviewicon,
        text1: 'Write a product review',
        text2: <div>25<span className="points_dat_1"> points</span></div>,
        text3: 'icons_svg',
        text4: 'LEARN MORE',
        text5: 'asd'
    },]

    const EarnListRevious = [{
        img1: images.star,
        text1: 'Review us and get 25 points',
        text2: <div>25 <span className="points_dat_1"> points</span></div>,
        text4: 'LEARN MORE',
    },
    ]
    const Redeem = [{
        heading: '$5 voucher',
        subtitle: '100 points $50 minimum spend',
        reward: 'GET REWARD'
    },
    {
        heading: '$12 voucher',
        subtitle: '200 points $70 minimum spend',
        reward: 'GET REWARD'
    },
    {
        heading: '$22 voucher',
        subtitle: '300 points $70 minimum spend',
        reward: 'GET REWARD'
    },
    {
        heading: '$45 voucher',
        subtitle: '500 points $90 minimum spend',
        reward: 'GET REWARD'
    },
    {
        heading: 'Skincare Travel Pouch',
        subtitle: '100% off . 650 points',
        reward: 'MORE POINTS NEEDED',
        viewproduct:'View Product'
    },
    {
        heading: 'Booty & Boobies Bundle',
        subtitle: '200 points $70 minimum spend',
        reward: 'PAID ITEMS REQUIRED ',
        viewproduct:'View Product'
    },
    {
        id: 7,
        heading: 'Redeem your points when you checkout',
        subtitle: '20 points per $1 ',
    },
    ]


    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
            <div className="sideleft w-full md:w-1/4">
                <SidebarMenu/>

            </div>
            <div className="w-full pt-[30px] md:pt-[0px] px-[10px] md:w-3/4 md:px-[0px]">
            <div className="flex flex-col-reverse md:flex-row">
                <div class="w-full md:w-1/2">
                    <div className="text_items h-[250px] bg-[#FBF2F2] flex justify-center items-center flex-col">
                        <h2 className="text-[30px] lg:text-[50px] uppercase font-bold tracking-[.25em] text-center leading-[35px] lg:leading-[50px] mb-[15px]">Truly <br></br> Rewards</h2>
                        <h5 className="text-[16px] uppercase text-center font-bold tracking-[2px]">Shop. Earn. Redeem. Repeat!</h5>
                    </div>
                </div>

                <div class=" md:w-1/2">
                    <div class="trulyRewardHolder__img h-[100%]">
                        <img src="https://cdn.shopify.com/s/files/1/0053/4462/4675/files/IMG_4334-copy-v1588710384786.jpg?v=1634904691" alt="" className="h-[100%] object-cover"/>
                    </div>
                </div>

            </div>
            <div className="text-center gap-[20px]">
                <h3 className="text-[#000] text-[30px] font-bold mb-2 mt-[42px]">Welcome back TEST</h3>
                <p className="text-[#000] text-[15px] font-normal mt-[15px]">You have 593 points</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4  gap-[10px] text-center my-[40px] ">
                {rewardList.map((x) => {
                    return (
                        <div>
                            <div className={x.text3 ? 'Member border border-[#d2d2d2]  h-[auto] md:h-[250px] find' : 'Member border border-[#d2d2d2] h-[auto] md:h-[250px]'}>
                                <h3 className="text-[#000] text-[25px]  border-b-[1px] mx-[40px] font-bold py-[10px]">{x.name}</h3>

                                <p className="text-[18px] text-[#000] pt-[13px] pb-[0px]">{x.text1}</p>
                                {x.text2 &&
                                    <p className="text-[18px] text-[#000] py-[29px]">{x.text2}</p>
                                }
                                {x.text3 &&
                                    <div className="text">
                                        <div className="h-[29px]"></div>
                                        <div className="BOTTOM_T bg-[#ebf1cf] py-[16px] uppercase text-[#636569] text-[16px]">
                                            {x.text3}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="text-center gap-[20px] mt-[67px]">
                <h3 className="text-[#000] text-[30px] font-bold mb-2">How To Earn Points</h3>
                <p className="text-[#000] text-[15px] font-normal mt-[25px]">Earn points for every dollar you spend. The higher the tier, the more points per dollar.</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] text-center mt-[40px] mb-[20px] ">
                    {EarnList.map((x) => {
                        return (
                            <div className={x.birthay ? 'birth' : ''}>
                                <div className='Member py-[18px] shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.1)]'>
                                    <img src={x.img1} className='w-[50px] h-[50px] mx-auto' />
                                    <h3 className="text-[#000] text-[19px] font-normal py-[10px]">{x.text1}</h3>
                                    <p className="text-[18px] text-[#000] pb-[12px]">{x.text2}</p>
                                    {x.text4 && !x.textmodel ? 
                                    <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal1" className="check h-[42px] bg-[#ff779f] text-[#fff] font-medium min-w-[150px] rounded-[80px] px-[30px] hover:bg-[transparent] hover:text-[#000] border hover:border-[#000]">{x.text4}</button>
                                     : 
                                      
                                    !x.textmodel && x.birthay ?<button type="submit"  className="check h-[42px] bg-[#ff779f] text-[#fff] font-medium min-w-[150px] rounded-[80px] px-[30px] hover:bg-[transparent] hover:text-[#000] border hover:border-[#000]">{x.text4}</button>
                                     :

                                    x.textmodel ? <button type="submit"  data-bs-toggle="modal" data-bs-target="#exampleModal33" className="check h-[42px] bg-[#ff779f] text-[#fff] font-medium min-w-[150px] rounded-[80px] px-[30px] hover:bg-[transparent] hover:text-[#000] border hover:border-[#000]">{x.text4}</button>  :  

                                  
                                    
                                    
                                    
                                    <img src={x.text3} className='w-[42px] h-[42px] mx-auto' />}
                                

                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3  grid-cols-2 gap-[20px] text-center  ">
                    {EarnListSeond.map((x) => {
                        return (
                            <div>
                                <div className='Member shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.1)] py-[18px]'>
                                    <img src={x.img1} className='w-[50px] h-[50px] mx-auto' />
                                    <h3 className="text-[#000] text-[19px] font-normal py-[10px]">{x.text1}</h3>
                                    <p className="text-[18px] text-[#000] pb-[12px]">{x.text2}</p>
                                    {x.text5 ? <button type="submit"  data-bs-toggle="modal" data-bs-target="#exampleModal34" className="check h-[42px] bg-[#ff779f] text-[#fff] font-medium min-w-[150px] rounded-[80px] px-[30px] hover:bg-[transparent] hover:text-[#000] border hover:border-[#000]">{x.text4}</button> :
                                        <img src={x.text3} className='w-[42px] h-[42px] mx-auto' />
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid grid-cols-1 gap-[20px] text-center mt-[20px] mb-[52px]  ">
                    {EarnListRevious.map((x) => {
                        return (
                            <div>
                                <div className='Member shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.1)] py-[18px]'>
                                    <img src={x.img1} className='w-[50px] h-[50px] mx-auto' />
                                    <h3 className="text-[#000] text-[19px] font-normal py-[10px]">{x.text1}</h3>
                                    <p className="text-[18px] text-[#000] pb-[12px]">{x.text2}</p>
                                    {x.text4 ? <button type="submit"  data-bs-toggle="modal" data-bs-target="#exampleModal35" className="check h-[42px] bg-[#ff779f] text-[#fff] font-medium min-w-[150px] rounded-[80px] px-[30px] hover:bg-[transparent] hover:text-[#000] border hover:border-[#000]">{x.text4}</button> :
                                        <img src={x.text3} className='w-[42px] h-[42px] mx-auto' />
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="redeem your gifts">
                    <h3 className="text-[#000] text-[30px] font-bold mb-2">Redeem Your Gifts</h3>
                    <p className="text-[#000] text-[15px] font-normal mt-[25px]">With new freebies added every season, you can test drive our favorite signature bundles or dig into<br></br> an a-la-carte beauty experience, with new offerings tailor-made just for you.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3  gap-[20px] text-center my-[40px] ">
                    {Redeem.map((x) => {
                        return (
                            <div>
                                <div className='Member flex  flex-col py-[9px] px-[13px] h-[150px] shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.1)]'>
                                    <h3 className="text-[#333] text-[19px] font-bold pt-0 py-[10px]">{x.heading}</h3>
                                    <div className="data grow  ">
                                    <p className="text-[16px] text-[#000]">{x.subtitle}</p>
                                    </div>
                                    <p className="mb-[10px] underline">{x.viewproduct}</p>
                                    {!x.id ? <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal36" className="check h-[42px] bg-[#ff779f] text-[#fff] font-medium min-w-[100%] rounded-[80px] px-[30px] hover:bg-[transparent] hover:text-[#000] border hover:border-[#000]">{x.reward}</button> : ''}
                                </div>
                            </div>
                        )
                    })}
                </div>


                <div className="redeem your gifts">
                    <h3 className="text-[#000] text-[30px] font-bold mb-2 mt-[43px]">Exclusive Truly Rewards</h3>
                    <p className="text-[#000] text-[15px] font-normal mt-[25px] mb-[30px]">We’ve narrowed down treating yourself to a science. We go beyond free gifts and discounts, and our Truly Rewards members can take part in increasingly exclusive experiences the more points they earn. The higher the tier, the more unique the opportunity.</p>
                </div>
                <div className="overflow-auto">
                <table className="rewards_type w-full mb-[30px] ">
                    <thead>
                        <th></th>
                        <th>Member</th>
                        <th>Platinum</th>
                        <th>Diamond</th>
                        <th>Subscriber</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Refer a friends</td>
                            <td>200</td>
                            <td>200</td>
                            <td>200</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>Refer a friends</td>
                            <td>200</td>
                            <td>200</td>
                            <td>200</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>Make a purchase	</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Follow us on Instagram</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Like us on Facebook	</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Celebrate a Birthday</td>
                            <td>50</td>
                            <td>100</td>
                            <td>200</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>Sign up to our mailing list	</td>
                            <td>75</td>
                            <td>75</td>
                            <td>75</td>
                            <td>75</td>
                        </tr>
                        <tr>
                            <td>Write a product review</td>
                            <td>25</td>
                            <td>25</td>
                            <td>25</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Review us and get 25 points	</td>
                            <td>25</td>
                            <td>25</td>
                            <td>25</td>
                            <td>25</td>
                        </tr>

                    </tbody>
                </table>
                </div>
                <div className="flex flex-col items-center lg:flex-row  mb-[30px]">
                    <div class="w-full lg:w-1/2 ">
                        <div className="text_items flex justify-center items-center flex-col">
                            <h2 className="text-[34px] xl:text-[50px] uppercase font-bold  text-center leading-[51px] mb-[15px]">SHARE THE <br></br> REWARDS</h2>
                            <h5 className="text-[15px] mb-4  font-normal px-[40px]">Sharing is caring. Refer your friends with your own unique referral link and start earning points, no strings attached. You can refer as many friends as you’d like, at any time. Earn 100 points when any referral spends over $25 at Truly.</h5>
                            <button type ='submit' className="font-medium max-w-[180px] bg-[transparent] text-[#000] border-2 border-[#ff779f] py-[12px] px-[26px] rounded-[80px] hover:bg-[transparent] hover:text-[#000] border hover:border-[#000] " data-bs-toggle="modal" data-bs-target="#exampleModal1">REFER FRIENDS</button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="trulyRewardHolder__img  pt-[66px] lg:pt-[0]">
                            <img src={images.reward} alt="" />
                        </div>
                    </div>
                </div>
                <div className="overflow-auto mb-[30px]">
                <table className="small_table w-full mb-[60px] overflow-auto">
                    <thead>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Action</th>
                    <th>Points</th>
                    <th>Status</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7/29/2022</td>
                            <td>Reward</td>
                            <td>$5 voucher	</td>
                            <td>-100</td>
                            <td>APPROVED</td>
                        </tr> <tr>
                            <td>7/29/2022</td>
                            <td>Reward</td>
                            <td>$5 voucher	</td>
                            <td>-100</td>
                            <td>APPROVED</td>
                        </tr> <tr>
                            <td>7/29/2022</td>
                            <td>Reward</td>
                            <td>$5 voucher	</td>
                            <td>-100</td>
                            <td>APPROVED</td>
                        </tr> <tr>
                            <td>7/29/2022</td>
                            <td>Reward</td>
                            <td>$5 voucher	</td>
                            <td>-100</td>
                            <td>APPROVED</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
          
            </div>
            </div>
            <ReferModal/>
            <RewardperkModal/>
            <ProductreviewModal/>
            <ReviewModal/>
            <RedeemGift/>
            



        </div>


    )
}
export default Reward