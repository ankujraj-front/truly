import React, { useEffect, useState } from 'react';
// import { Slider } from 'antd';
import Slider from "react-slick";

import images from '../../../themes/appImage'
import { Collapse, Tooltip } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SiderRange from '../../../common';
import { Link } from 'react-router-dom';
// import SiderRange from '../../../common/index'



const ProductList = () => {

    const bestsellers = [{
        imgcollection1: images.imgfirst,
        imgcollection22: images.img_t,

        title: 'VIP Collection 3.0',
        discription: 'The Limitless Routines Bundle + GIFT',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img2,
        imgcollection22: images.img_55,


        title: 'KP Treatment Kit',
        discription: 'Resurfacing + Smoothing ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img3,
        imgcollection22: images.img_22,
        title: 'Pit Perfecting Kit',
        discription: 'Ultimate Underarm Care Routine',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img4,
        imgcollection22: images.img_77,
        title: 'Defrost Summer Bod',
        discription: 'Ultimate Summer Skincare Kit ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img5,
        imgcollection22: images.img44,
        title: 'Cooka Kit',
        discription: ' Bikini Line Kit + Razor',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img6,
        imgcollection22: images.img_66,
        title: 'Ultimate Body Bundle',
        discription: 'Body Perfecting Essentials ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img7,
        imgcollection22: images.img41,

        title: 'Silky Smooth Shave Set',
        discription: 'Hydrating Shave Butter + Scrub + Body Butter ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img8,
        imgcollection22: images.img_88,
        title: 'Deluxe Body Bundle',
        discription: 'Essential Curve Perfecting Kit ',
        Price: '$270.00'

    },
    ]


    const SliderImage = [{
        imgcollection1: images.imgfirst,
        title: 'VIP Collection 3.0',
        discription: 'The Limitless Routines Bundle + GIFT',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img2,
        title: 'KP Treatment Kit',
        discription: 'Resurfacing + Smoothing ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img3,
        title: 'Pit Perfecting Kit',
        discription: 'Ultimate Underarm Care Routine',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img4,
        title: 'Defrost Summer Bod',
        discription: 'Ultimate Summer Skincare Kit ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img5,
        title: 'Cooka Kit',
        discription: ' Bikini Line Kit + Razor',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img6,
        title: 'Ultimate Body Bundle',
        discription: 'Body Perfecting Essentials ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img7,
        title: 'Silky Smooth Shave Set',
        discription: 'Hydrating Shave Butter + Scrub + Body Butter ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.img8,
        title: 'Deluxe Body Bundle',
        discription: 'Essential Curve Perfecting Kit ',
        Price: '$270.00'

    },
    ]
    const [filter, setFilter] = useState(false)

    const handleFilter = () => {
        setFilter(!filter)

    }
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
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
   
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
        const settingsThumbs = {
            responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }],
        };
        const text = <span>Add to Wishlist</span>;
        const text1 = <span>Quickview</span>;

        const [nav1, setNav1] = useState();
        const [nav2, setNav2] = useState();

        const [value, setValue] = useState(false)
        const [values, setValues] = useState(false)
        const [item, setItems] = useState(1)

        const handleIncrement = () => {
            setItems(item + 1)
        }
        const handledecrement = () => {
            if (item > 1) {
                setItems(item - 1)
            }
        }

        const [values12, setvalues12] = useState([
            { id: 1, text: "One-time purchase $69.30", name: 'first', checked: true },
            { id: 2, text: "Subscribe & save 10%: $62.37", name: 'second', checked: false },
        ]);
         
        console.log('values12',values12)

        const [activeId, setActiveId] = useState(1);
        const handlecheckbox = (e, id) => {
            setActiveId(id)
            let arr =[]

            console.log('arr--', arr)
            values12.map((opt)=>{
                if(opt.id === id){
                    opt.checked = true
                
                }else{
                    opt.checked = false
                }
                arr.push(opt)
            })
            setvalues12(arr)
        }

        
    return (
        <div>
            <div class="products_details text-center bg-center bg-cover py-[60px] ">
                <div className='container mx-auto'>
                    <h3 className='text-[24px] md:text-[34px] font-semibold text-center text-[#000] font-[Marcellus] pb-[5px]'>Products</h3>
                    <div class="bread-crumb flex text-center justify-center align-center ">
                        <a href="/" title="Back to the frontpage" className='flex text-[14px] text-[#000] hover:text-[#ff779f]'>Home<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                        </a>
                        <span className='text-[14px] text-[#000]'>Products</span>
                    </div>
                </div>
            </div>
            <div className='sellers px-3 md:px-0'>
                <div className='container mx-auto'>
                    <div className='header_title'>
                        <div className='filter flex justify-between my-[33px] items-center cursor-pointer'>
                            <h3 onClick={() => handleFilter()} className='hidden lg:flex border-[2px] border-[#000] py-[7px] px-[16px] flex align-center justify-center  gap-[4px] hover:bg-[#ff779f] hover:text-[#fff] hover:border-transparent'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                            </svg>
                                Filter</h3>

                            <a data-bs-toggle="offcanvas" href="#offcanvasExample1" role="button" aria-controls="offcanvasExample1" className='lg:hidden border-[2px] border-[#000] py-[7px] px-[16px] flex align-center justify-center  gap-[4px] hover:bg-[#ff779f] hover:text-[#fff] hover:border-transparent	'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                            </svg>
                                Filter</a>

                            <div>
                                <div className='flex'>
                                  

                                    <select className="border-b-2 text-[#969696] font-medium" aria-label=".form-select-lg example">
                                        <option value="1">Default Sorting</option>
                                        <option value="2">Best Selling</option>
                                        <option value="3">Alphabetically,A-Z</option>
                                        <option value="4">Price, high to low</option>
                                        <option value="5">Price, low to high</option>
                                        <option value="6">Date, old to new</option>
                                        <option value="6">Date, new to old</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[52px]'>


                        <div className={filter ? 'w-1/4 trans_product  mt-[40px]' : 'draw_filter hidden  mt-[40px]'}>
                            <div className='relative border-l-[3px] border-black px-2 py-1 '>
                                <h2 className='text-[17px] color-[#000] font-medium bg-[#fff] inline-block pr-3 tracking-[2px]
                         before:w-full before:absolute before:border-b-[1px] before:border-slate-200 before:top-[50%] before:z-[-1] '>CATEGORIES</h2>
                            </div>

                            <div className='py-4'>
                                <p className='text-[15px] color-[#000] py-[5px] flex hover:text-[#ff779f] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>Blemish Patch</p>
                                <p className='text-[15px] color-[#000] py-[5px] flex  hover:text-[#ff779f] cursor-pointer '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>Cleanser</p>
                                <p className='text-[15px] color-[#000] py-[5px] flex  hover:text-[#ff779f] cursor-pointer '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>Mask</p>
                                <p className='text-[15px] color-[#000] py-[5px] flex   hover:text-[#ff779f] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>Shaving</p>
                                <p className='text-[15px] color-[#000] py-[5px] flex   hover:text-[#ff779f] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>Scrub</p>
                            </div>

                            <div className='relative border-l-[3px] border-black px-2 mb-[24px]'>
                                <h2 className='text-[17px] color-[#000] font-medium bg-[#fff] inline-block pr-3 tracking-[2px] py-1
                         before:w-full before:absolute before:border-b-[1px] before:border-slate-200 before:top-[50%] before:z-[-1] '>PRICE</h2>
                            </div>


                            <label for="small-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Range</label>

                            <SiderRange />
                        </div>



                        <div className={filter ? 'w-3/4 trans_product' : 'w-full trans_product'}>
                            {/* <div className='slider_top mb-12'>
                                <h2 className='text-[17px] uppercase text-[#000] flex items-center border-b-[1px] pb-[12px] mb-[17px] tracking-[.25em] '><img src={images.img123} className='mr-[13px]' />Best Sellers</h2>
                                <Slider {...settings}>
                                    {SliderImage.map((x) => {
                                        return (
                                            <div>
                                                <Link to='/Productdetails'>
                                                    <h3 className='p-2'><img src={x.imgcollection1} alt='' /></h3>
                                                    </Link>
                                                    <div className=''>
                                                        <div className="mt-[6px] mb-[20px]">
                                                    <Link to='/Productdetails'>
                                                            <h2 className='text-[18px] font-semibold'>{x.title}</h2>
                                                            <p className='text-[15px] py-[15px] pt-[7px] font-normal text-[#000]'>{x.discription}</p>
                                                            </Link>
                                                            <button type="submit" name="add" className="px-[11px] py-[9px] text-[#000] uppercase rounded-[30px] border-2 min-w-[170px] border-[#ff779f] bg-[#fff] primary">Add to bag {x.Price}</button>
                                                        </div>
                                                    </div>
                                                
                                            </div>
                                        )
                                    })}
                                </Slider>

                            </div> */}


<div class="grid grid-cols-2 gap-[12px] lg:gap-[23px] md:grid-cols-3 lg:grid-cols-4 px-2 md:px-0 px-2 md:px-0">
                                {
                                    bestsellers.map((x) => {
                                        return (
                                            <div className='relative product_v1'>
                                                <div className='overflow-hidden'>
                                                    <Link to='/Productdetails' >
                                                        <img src={x.imgcollection1} className='default img' alt='' />
                                                        <img src={x.imgcollection22} className='hover img' alt='' />
                                                    </Link>
                                                    <div className=''>
                                                        <div className="mt-[6px] mb-[12px] md:mb-[42px] text-center md:text-left">
                                                            <Link to='/Productdetails' >
                                                                <h2 className='text-[14px]  md:text-[18px] font-semibold'>{x.title}</h2>
                                                                <p className='min-h-[60px] xl:min-h-[0px] text-[13px]  md:text-[15px]  py-[15px] pt-[7px] font-normal' >{x.discription}</p>
                                                            </Link>
                                                            <div className='flex-col md:flex-row flex justify-between items-center'>
                                                                <button type="submit" name="add" className="primary px-[11px] py-[4px] md:py-[9px] text-[#000] text-[13px] md:text-[15px] uppercase rounded-[30px] border-2 min-w-[115px] md:min-w-[135px] border-[#ff779f] bg-[#fff]">Add to bag </button><span className='ml-2 text-[14px]  md:text-[18px] font-semibold'>{x.Price}</span>
                                                            </div>
                                                            <div className="star flex mt-4 items-center justify-center md:justify-start	">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] md:w-[19px] h-6 text-[#f2b03d]">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                </svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] md:w-[19px] h-6 text-[#f2b03d]">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                </svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] md:w-[19px] h-6 text-[#f2b03d]">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                </svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] md:w-[19px] h-6 text-[#f2b03d]">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                </svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] md:w-[19px] h-6 text-[#f2b03d]">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                </svg>
                                                                <span className="ml-[5px] text-[12px] md:text-[15px] whitespace-nowrap	">1000 Reviews</span>



                                                            </div>
                                                        </div>

                                                        <div className="product-icon-action absolute bottom-[50%] right-[0px]">
                                                            <div className="add-wishlist">
                                                                <Tooltip placement="left" title={text}>
                                                                    <a href='javascript:void(0);' className="box-shadow  inline-block maxus-product__wishlist wish text-center"  >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                                        </svg>
                                                                    </a>
                                                                </Tooltip>

                                                            </div>



                                                            <div className="quick-view">
                                                                <Tooltip placement="left" title={text1}>
                                                                    <a className="engoj_btn_quickview icon-quickview inline-block box-shadow" data-bs-toggle="modal" data-bs-target="#exampleModal55">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                                                        </svg>
                                                                    </a>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                    })
                                }
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div class="flex space-x-2">
                <div>



                    <div class="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96" tabindex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel1">
                        <div class="offcanvas-header flex items-center justify-end p-4 mt-2">
                            <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body flex-grow p-2 overflow-y-auto">
                            <div className='w-full trans_product  mt-[0px]' >
                                <div className='relative border-l-[3px] border-black px-2 py-1 '>
                                    <h2 className='text-[17px] color-[#000] font-medium bg-[#fff] inline-block pr-3 tracking-[2px]
                         before:w-full before:absolute before:border-b-[1px] before:border-slate-200 before:top-[50%] before:z-[-1] '>CATEGORIES</h2>
                                </div>

                                <div className='py-4'>
                                    <p className='text-[15px] color-[#000] py-[5px] flex hover:text-[#ff779f] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>Blemish Patch</p>
                                    <p className='text-[15px] color-[#000] py-[5px] flex  hover:text-[#ff779f] cursor-pointer '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>Cleanser</p>
                                    <p className='text-[15px] color-[#000] py-[5px] flex  hover:text-[#ff779f] cursor-pointer '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>Mask</p>
                                    <p className='text-[15px] color-[#000] py-[5px] flex   hover:text-[#ff779f] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>Shaving</p>
                                    <p className='text-[15px] color-[#000] py-[5px] flex   hover:text-[#ff779f] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>Scrub</p>
                                </div>

                                <div className='relative border-l-[3px] border-black px-2 mb-[24px]'>
                                    <h2 className='text-[17px] color-[#000] font-medium bg-[#fff] inline-block pr-3 tracking-[2px] py-1
                         before:w-full before:absolute before:border-b-[1px] before:border-slate-200 before:top-[50%] before:z-[-1] '>Price</h2>
                                </div>


                                <label for="small-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> range</label>

                                <SiderRange />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal55" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered relative max-w-[800px] px-[12px] py-[12px] pointer-events-none">
                    <div
                        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-body relative p-4">
                            <button type="button" class="absolute top-[-9px] xl:top-[-21px] right-[-2px] hover:rotate-[180deg] transition-all duration-500 ease-in btn-close box-content w-4 h-4 p-1 text-[#fff] border-none rounded-none opacity-1" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="mx-auto md:px-0">
                                <div className="flex flex-col md:flex-row 2xl:gap-[5px]">
                                    <div className="w-full  md:pr-[30px] 2xl:pr-[30px] md:w-1/2">
                                        <div className="sticky top-[70px]">
                                            <Slider asNavFor={nav2} className='first-slider' ref={(slider1) => setNav1(slider1)}>
                                                <div>
                                                    <h3><img src={images.slider} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider2} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider3} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider4} /></h3>
                                                </div>
                                                {/* <div>
                                <h3><img src={images.slider5} /></h3>
                            </div> */}
                                                <div>
                                                    <h3><img src={images.slider6} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider2} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider2} /></h3>
                                                </div>
                                                {/* <div>
                                <h3><img src={images.slider5} /></h3>
                            </div> */}


                                            </Slider>
                                            <Slider
                                                {...settingsThumbs}
                                                className="second_slider"
                                                asNavFor={nav1}
                                                ref={(slider2) => setNav2(slider2)}
                                                slidesToShow={5}
                                                swipeToSlide={true}
                                                focusOnSelect={true}


                                            >
                                                <div>
                                                    <h3><img src={images.slidersmall} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider2small} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider3small} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider4small} /></h3>
                                                </div>
                                                {/* <div>
                                <h3><img src={images.slider51small} /></h3>
                            </div> */}
                                                <div>
                                                    <h3><img src={images.small99} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider2small} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slidersmall} /></h3>
                                                </div>
                                                <div>
                                                    <h3><img src={images.slider2small} /></h3>
                                                </div>
                                                {/* <div>
                                <h3><img src={images.slider51small} /></h3>
                            </div> */}
                                            </Slider>
                                        </div>

                                    </div>
                                    <div className="w-full mt-4 md:mt-0 md:w-1/2 kit">
                                        <div className="wishList flex justify-between">
                                            <div>
                                                <h2 className="text-[25px] text-[#000]">Smooth Legend Shave Kit</h2>
                                                <del className="text-[22px] text-[#83868c] mr-2">$50.00 USD </del> <span className="text-[20px] text-[#ff779f]">$69.30 USD</span>
                                            </div>
                                            <div>
                                                <div className="w-[40px] h-[40px] border rounded-full border-slate-200 hover:bg-[#ff779f] hover:text-[#fff] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] mx-auto my-[9px] hover:text-[#fff]">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>


                                                </div>

                                            </div>
                                        </div>


                                        <div className="star flex mt-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[19px] h-6 text-[#f2b03d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[19px] h-6 text-[#f2b03d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[19px] h-6 text-[#f2b03d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[19px] h-6 text-[#f2b03d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[19px] h-6 text-[#f2b03d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                            <span className="ml-[5px]">1000 Reviews</span>



                                        </div>

                                        <p className="text-[#969696] text-[16px] leading-[27px]">We developed a streamlined system for helping you achieve the smoothest shave of your life (that’s also model-approved). This luxe shaving kit for women features a resurfacing pre-shave scrub, super softening shave butter, and cooling after-shave oil – without any shaving aftermath like razor burn, ingrowns, and irritation!</p>


                                        <div className="mt-[21px]">
                                        <div className="">

                                                {values12.map((x) => {
                                                    return (
                                                        <div className="blog_reminder relative flex flex-col md:flex-col">
                                                        <div class="form-check form-check-inline" >
                                                            <input class=" form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#e90b5a] checked:border-[#e90b5a] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions1" id="inlineRadio12" checked={x.checked} value="option1" onChange={(e) => handlecheckbox(e, x.id)} />
                                                            <label className="text-[15px] text-[#000]" for="inlineRadio12">{x.text}</label>
                                                           { x.id === 2 && <p className="absolute top-[-11px] bg-[#000] radius-3 text-[#fff] text-[12px] py-[4px] rounded-[3px] px-[5px]">Upto 15% </p>}
                                                        </div>
                                                        { activeId === 2 && x.id === 2 ?
                                                            <div className="point_message ">
                                                                     <div><select className="selling_plan rounded-[12px] border-2 border-[#ff779f] px-[2px] py-3">
                                                                        <option value="692289571">Delivery every 30 Days</option>

                                                                        <option value="692322339">Delivery every 60 Days</option>

                                                                        <option value="692355107">Delivery every 90 Days</option>

                                                                    </select></div> 
                                                            </div>: ''
                                                                }
                                                        </div>
                                                    )

                                                }
                                                )
                                                }

                                            </div>
                                            
                                        </div>
                                        <div className="point_task flex gap-[20px] mt-[23px]">
                                            <div className="target w-[90px] border-2 border-[#ddd] relative">
                                                <button type="button" class="qty_minus absolute right-[0] w-[40px] border-b-[1px] border-[#ddd]" data-id="" data-qty="0" onClick={() => handleIncrement()}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[25px] mx-auto">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>

                                                </button>
                                                <input type="text" className="w-[45px] h-[50px] border-r-[2px] text-center" value={item} aria-label="quantity" pattern="[0-9]*" name="quantity" id="Quantity" />
                                                <button type="button" class="qty_minus absolute right-[0] bottom-[0] w-[40px] " data-id="" data-qty="0" onClick={() => handledecrement()}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[25px] mx-auto">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>


                                                </button>

                                            </div>
                                            <button type="submit" className="w-[calc(100%-90px)] bg-[#ff779f] h-[55px]  text-[16px] tracking-[.25em] font-semibold text-[#fff] uppercase hover:bg-transparent hover:text-[#ff779f] hover:border border-[#ff779f]" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" value="Add to Cart">
                                                <span className='px-[0px] md:px-[50px] py-[20px]' data-bs-dismiss="modal" aria-label="Close"> Add to Cart</span>
                                            </button>

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
export default ProductList