import React from "react"
import SidebarMenu from "../sidebar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../../../themes/appImage";
import { Link } from "react-router-dom";



const Profile = () => {
      
    const SliderImage = [{
        imgcollection1: images.imgfirst,
        title: 'VIP Collection 3.0',
        discription: 'The Limitless Routines Bundle + GIFT',
        Price: '$270'

    },
    {
        imgcollection1: images.img2,
        title: 'KP Treatment Kit',
        discription: 'Resurfacing + Smoothing ',
        Price: '$270'

    },
    {
        imgcollection1: images.img3,
        title: 'Pit Perfecting Kit',
        discription: 'Ultimate Underarm Care Routine',
        Price: '$270'

    },
    {
        imgcollection1: images.img4,
        title: 'Defrost Summer Bod',
        discription: 'Ultimate Summer Skincare Kit ',
        Price: '$270'

    },
    {
        imgcollection1: images.img5,
        title: 'Cooka Kit',
        discription: ' Bikini Line Kit + Razor',
        Price: '$270'

    },
    {
        imgcollection1: images.img6,
        title: 'Ultimate Body Bundle',
        discription: 'Body Perfecting Essentials ',
        Price: '$270'

    },
    {
        imgcollection1: images.img7,
        title: 'Silky Smooth Shave Set',
        discription: 'Hydrating Shave Butter + Scrub + Body Butter ',
        Price: '$270'

    },
    {
        imgcollection1: images.img8,
        title: 'Deluxe Body Bundle',
        discription: 'Essential Curve Perfecting Kit ',
        Price: '$270'

    },
    ]
    var settings = {
        autoplay: true,
        nav: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
                <div className="sideleft w-full md:w-1/4">
                    <SidebarMenu />

                </div>
                <div className="w-full px-[10px] md:w-3/4 md:px-[0px]">
                    <div>
                        <div className="container mx-auto">
                            <h3 className="text-[22px] font-bold text-center mt-[40px] md:text-left">Hello,TEST TEST</h3>
                            <div className="account-info mt-[40px] mb-[30px]">
                                <div className="grid grid-cols-1 gap-[23px] md:grid-cols-3 md:gap-[0px] ">
                                    <div class="orderAddress__mainColumn">
                                        <h4 className="text-[20px] text-[#000] font-bold mb-1">ACCOUNT INFO</h4>
                                        <p>TEST TEST</p>
                                        <p>marin@trulybeauty.com</p>
                                        <Link to = '/editprofile'><h3 className="decoration underline">Edit Profile</h3></Link>
                                    </div>
                                    <div class="orderAddress__mainColumn">
                                        <h4 className="text-[20px] text-[#000] font-bold mb-1">ADDRESS BOOK</h4>
                                        <p>shuang Fu <br></br>300 S sante fe, ave apt 639<br></br> los angeles CA 90013<br></br> United States</p>
                                    </div>
                                    <div class="orderAddress__mainColumn">
                                        <h4 className="text-[20px] text-[#000] font-bold mb-1">BEAUTY POINTS</h4>
                                        <p>Beauty Enthusiast - 593 Points</p>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-view">
                            <h4 className="text-[20px] text-[#000] font-bold mb-[12px]">Recently Bought</h4>
                                <Slider {...settings}>
                                    {SliderImage.map((x) => {
                                        return (
                                            <div>
                                                <Link to='/Productdetails'>
                                                    <h3 className='p-2'><img src={x.imgcollection1} alt='' /></h3>
                                                    <div className=''>
                                                        <div className="mt-[6px] mb-[20px]">
                                                            <h2 className='text-[18px] font-semibold'>{x.title}</h2>
                                                            <p className='text-[15px] py-[15px] pt-[7px] font-normal text-[#000]'>{x.discription}</p>
                                                            <button type="submit" name="add" className="px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#FF779F] bg-[#fff] primary">Add to bag {x.Price}</button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>

                            <div className="recent-view mb-[69px] mt-[40px]">
                            <h4 className="text-[20px] text-[#000] font-bold mb-[12px] ">Recently Viewed</h4>
                                <Slider {...settings}>
                                    {SliderImage.map((x) => {
                                        return (
                                            <div>
                                                <Link to='/Productdetails'>
                                                    <h3 className='p-2'><img src={x.imgcollection1} alt='' /></h3>
                                                    <div className=''>
                                                        <div className="mt-[6px] mb-[20px]">
                                                            <h2 className='text-[18px] font-semibold'>{x.title}</h2>
                                                            <p className='text-[15px] py-[15px] pt-[7px] font-normal text-[#000]'>{x.discription}</p>
                                                            <button type="submit" name="add" className="px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#FF779F] bg-[#fff] primary">Add to bag {x.Price}</button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Profile