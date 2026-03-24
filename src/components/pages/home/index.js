import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import images from '../../../themes/appImage'
import { Collapse } from 'antd';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from 'antd';





const { Panel } = Collapse;




const onChange = (value) => {
    console.log('onChange: ', value);
};

const onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
};

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const DataList = [{
        Productid: 1,
        original: 'AED 145.00',
        productiamge: images.xtrasmall,
        price: 135,
        topseller: 'TOP SELLER',
        discount: '-10',
        likeimg: images.like,
        size: 'Small',
        qty: '18-20',
        delivery: 'Delivery Today'

    },
    {
        productiamge: images.small,
        price: 145,
        likeimg: images.like,
        size: 'Medium',
        qty: '18-20',
        delivery: 'Delivery Today'

    },
    {
        productiamge: images.medium,
        price: 145,
        topseller: 'TOP SELLER',
        likeimg: images.like,
        size: 'Medium',
        qty: '18-20',
        delivery: 'Delivery Today'

    },
    {
        productiamge: images.large,
        price: 145,
        likeimg: images.like,
        size: 'Medium',
        qty: '18-20',
        delivery: 'Delivery Today'

    },]
    const collectionlist = [{
        imgcollection1: images.img_p1,
        title: 'Butt Care',
        discription: 'Up to 40% off Butt Care Bundle',

    },
    {
        imgcollection1: images.content2,
        title: 'Boob Care',
        discription: 'Up to 20% off boobs Care Bundle',

    }]

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


    const blogs = [
        {
            blog1: images.blog1,
            title: 'What You\'ll Find in "Truly\’s Labor Day MYSTERY BAGS',
            subtile: 'Vegan',
            discription: 'MYSTERY BAG WEEKEND is HERE! To celebrate Labor Day, we’re giving away a MYSTERY BAG packed full of Truly Beauty products every day...',

        },
        {
            blog1: images.blog2,
            title: 'Truly House of Beauty Episode 22',
            subtile: 'Truly House of Beauty',
            discription: 'Pssst…have you heard of the Truly House of Beauty?! For new readers and old, welcome back to our fantasy-series on how we create...',

        },
        {
            blog1: images.blog3,
            subtile: 'Clean Beauty',
            title: 'Truly Beauty Unicorn Bath Bar: 1 Product, 5 Uses',
            discription: 'We LOVE beauty hacks! Whether you’re multitasking a skincare product, creating a DIY face mask, or combining two individual products, beauty hacks just...',

        }
    ]
    const [tabs, setTabs] = useState(1)
    const SliderImage = [
        {
            imgcollection1: images.bg2,


        },
        {
            imgcollection1: images.desktop1,


        },

    ]

    const SliderImagemobile = [
        {
            imgcollection1: images.mobile1,


        },
        {
            imgcollection1: images.mobile,


        },
    ]

    var settings = {
        autoplay: true,
        // nav: false,
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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

    const SliderImage1 = [{
        imgcollection1: images.imgfirst,
        imgcollection22: images.img_t,
        title: 'VIP Collection 3.0',
        discription: 'The Limitless Routines Bundle + GIFT',
        Price: '$270.00'

    },
    {
        imgcollection1: images.imgfirst,
        imgcollection22: images.img_t,
        title: 'KP Treatment Kit',
        discription: 'Resurfacing + Smoothing ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.imgfirst,
        imgcollection22: images.img_t,
        title: 'Pit Perfecting Kit',
        discription: 'Ultimate Underarm Care Routine',
        Price: '$270.00'

    },
    {
        imgcollection1: images.imgfirst,
        imgcollection22: images.img_t,
        title: 'Defrost Summer Bod',
        discription: 'Ultimate Summer Skincare Kit ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.imgfirst,
        imgcollection22: images.img_t,
        title: 'Cooka Kit',
        discription: ' Bikini Line Kit + Razor',
        Price: '$270.00'

    },
    {
        imgcollection1: images.imgfirst,
        imgcollection22: images.img_t,
        title: 'Ultimate Body Bundle',
        discription: 'Body Perfecting Essentials ',
        Price: '$270.00'

    },
    {
        imgcollection1: images.imgfirst,
        imgcollection22: images.img_t,
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
    var settings1 = {
        autoplay: true,
        nav: true,
        dots: false,
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
                    dots: false
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
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    var settings12 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
    const text = <span>Add to Wishlist</span>;
    const text1 = <span>Quickview</span>;





    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const [value, setValue] = useState(false)
    const [values, setValues] = useState(false)
    const [values12, setvalues12] = useState([
        { id: 1, text: "One-time purchase $69.30", name: 'first', checked: true },
        { id: 2, text: "Subscribe & save 10%: $62.37", name: 'second', checked: false },
    ]);
    const [activeId, setActiveId] = useState(1);
    const handlecheckbox = (e, id) => {
        setActiveId(id)
        let arr = []
        values12.map((opt) => {
            if (opt.id === id) {
                opt.checked = true
            } else {
                opt.checked = false
            }
            arr.push(opt)
        })
        setvalues12(arr)
    }

    const [item, setItems] = useState(1)

    const handleIncrement = () => {
        setItems(item + 1)
    }
    const handledecrement = () => {
        if (item > 1) {
            setItems(item - 1)
        }
    }
    const settingsThumbs = {
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }],
    };
    return (
        <div className=''>
            <div className='main_wrapper'>
                <div className='w-full'>
                    {/* <Link to='/'>
                        <img src={images.bg} className='hidden w-full md:block' />
                        <img src={images.banner_snall} className='block md:hidden' />
                    </Link> */}
                    <Slider className='banner_slider hidden w-full md:block' {...settings}>
                        {SliderImage.map((x) => {
                            return (
                                <div className=''>
                                    <Link to='/Productdetails'>
                                        <h3><img src={x.imgcollection1} alt='' className='w-full' /></h3>
                                    </Link>
                                </div>
                            )
                        })}
                    </Slider>

                    <Slider className='banner_slider responsive block md:hidden' {...settings12}>
                        {SliderImagemobile.map((x) => {
                            return (
                                <div className=''>
                                    <Link to='/Productdetails'>
                                        <h3><img src={x.imgcollection1} alt='' className='w-full' /></h3>
                                    </Link>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>

            {/* collectin */}
            <div className='best-sellers pt-[30px]'>
                <div className='sm:container mx-auto'>
                    <h2 className='text-[24px] md:text-[34px] font-semibold text-center text-[#000] font-[Marcellus] pb-[12px]'>Our Best Seller</h2>
                    <div className='slider_top lg:mb-12'>
                        <Slider {...settings1}>
                            {bestsellers.map((x) => {
                                return (
                                    <div className='p-3'>
                                        <div className='relative product_v1'>
                                            <div className='overflow-hidden'>
                                                <Link to='/productlist' >
                                                    <img src={x.imgcollection1} className='default img' alt='' />
                                                    <img src={x.imgcollection22} className='hover img' alt='' />
                                                </Link>
                                                <div className=''>
                                                    <div className="mt-[6px] mb-[12px] md:mb-[9px] text-center md:text-left">
                                                        <Link to='/productlist' >
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
                                                            <span className="ml-[5px] text-[12px] md:text-[15px]">1000 Reviews</span>



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

                                    </div>
                                )
                            })}
                        </Slider>

                    </div>
                </div>
            </div>




            {/* our best sellers */}
            <div className='best-sellers'>
                <div className='sm:container mx-auto'>
                    <h2 className='text-[24px] md:text-[34px]  font-semibold text-center text-[#000] font-[Marcellus]'>Our Most Popular Bundles
                    </h2>
                    <ul class="nav nav-tabs flex flex-wrap list-none py-[20px] md:py-[50px] justify-center gap-[12px] mx-auto leading-[50px] md:leading-[12px]" id="tabs-tab3"
                        role="tablist">
                        <li class="nav-item" role="presentation">
                            <a href="#tabs-home3" class="text-[12px] md:text-[16px]  min-w-[115px] uppercase text-center text-[#ff779f] px-[10px] md:px-[18px] py-[10px] border-2 border-[#ff779f] bg-[#fff]
      active
    " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3"
                                aria-selected="true">New Arrivals</a>
                        </li>
                        {/* <li class="nav-item" role="presentation">
                            <a href="#tabs-profile3" class="
      text-[12px] md:text-[16px] min-w-[115px] uppercase text-center text-[#ff779f] px-[10px] md:px-[18px] py-[10px] border-2 border-[#ff779f] bg-[#fff]
    " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                                aria-controls="tabs-profile3" aria-selected="false">Best Sellers</a>
                        </li> */}
                        <li class="nav-item" role="presentation">
                            <a href="#tabs-messages3" class="
      text-[12px] md:text-[16px] min-w-[115px] uppercase text-center text-[#ff779f] px-[10px] md:px-[18px] py-[10px] border-2 border-[#ff779f] bg-[#fff]
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab"
                                aria-controls="tabs-messages3" aria-selected="false">Top Rates</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="tabs-tabContent3">
                        <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                            <div class="grid grid-cols-2 gap-[12px] lg:gap-[23px]  md:grid-cols-3 lg:grid-cols-4  px-2 md:px-0 md:px-0">
                                {
                                    bestsellers.map((x) => {
                                        return (
                                            <div className='relative product_v1'>
                                                <div className='overflow-hidden'>
                                                    <Link to='/productlist' >
                                                        <img src={x.imgcollection1} className='default img' alt='' />
                                                        <img src={x.imgcollection22} className='hover img' alt='' />
                                                    </Link>
                                                    <div className=''>
                                                        <div className="mt-[6px] mb-[12px] md:mb-[42px] text-center md:text-left">
                                                            <Link to='/productlist' >
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
                                                                <span className="ml-[5px] text-[12px] md:text-[15px]">1000 Reviews</span>



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
                        <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                            <div class="grid grid-cols-2 gap-[12px] lg:gap-[23px] md:grid-cols-3 lg:grid-cols-4  px-2 md:px-0">
                                {
                                    bestsellers.map((x) => {
                                        return (
                                            <div className='relative product_v1'>
                                                <div className='overflow-hidden'>
                                                    <Link to='/productlist' >
                                                        <img src={x.imgcollection1} className='default img' alt='' />
                                                        <img src={x.imgcollection22} className='hover img' alt='' />
                                                    </Link>
                                                    <div className=''>
                                                        <div className="mt-[6px] mb-[12px] md:mb-[42px] text-center md:text-left">
                                                            <Link to='/productlist' >
                                                                <h2 className='text-[14px]  md:text-[18px] font-semibold'>{x.title}</h2>
                                                                <p className='min-h-[60px] xl:min-h-[0px] text-[13px]  md:text-[15px]  py-[15px] pt-[7px] font-normal' >{x.discription}</p>
                                                            </Link>
                                                            <button type="submit" name="add" className="primary px-[11px] py-[4px] md:py-[9px] text-[#000] text-[13px] md:text-[15px] uppercase rounded-[30px] border-2 min-w-[115px] md:min-w-[135px] border-[#ff779f] bg-[#fff]">Add to bag </button><span className='ml-2 font-bold'>{x.Price}</span>
                                                            <div className="star flex mt-4 items-center">
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
                                                                <span className="ml-[5px] text-[12px] md:text-[15px]">1000 Reviews</span>



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
                        <div class="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                            <div class="grid grid-cols-2 gap-[12px] lg:gap-[23px] md:grid-cols-3 lg:grid-cols-4 px-2 md:px-0 px-2 md:px-0">
                                {
                                    bestsellers.map((x) => {
                                        return (
                                            <div className='relative product_v1'>
                                                <div className='overflow-hidden'>
                                                    <Link to='/productlist' >
                                                        <img src={x.imgcollection1} className='default img' alt='' />
                                                        <img src={x.imgcollection22} className='hover img' alt='' />
                                                    </Link>
                                                    <div className=''>
                                                        <div className="mt-[6px] mb-[12px] md:mb-[42px] text-center md:text-left">
                                                            <Link to='/productlist' >
                                                                <h2 className='text-[14px]  md:text-[18px] font-semibold'>{x.title}</h2>
                                                                <p className='min-h-[60px] xl:min-h-[0px] text-[13px]  md:text-[15px]  py-[15px] pt-[7px] font-normal' >{x.discription}</p>
                                                            </Link>
                                                            <div className='flex-col md:flex-row flex justify-between items-center'>
                                                                <button type="submit" name="add" className="primary px-[11px] py-[4px] md:py-[9px] text-[#000] text-[13px] md:text-[15px] uppercase rounded-[30px] border-2 min-w-[115px] md:min-w-[135px] border-[#ff779f] bg-[#fff]">Add to bag </button><span className='ml-2 text-[14px]  md:text-[18px] font-semibold'>{x.Price}</span>
                                                            </div>
                                                            <div className="star flex mt-4 items-center">
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
                                                                <span className="ml-[5px] text-[12px] md:text-[15px]">1000 Reviews</span>



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



            {/* our poster sellers */}
            <div className='poster'>
                <div className='w-full mx-auto'>
                    <Link to='/'>
                        <div className='overflow-hidden my-[50px]'>
                            <img src={images.show} alt='' className='w-full hidden md:block hover:scale-105	 transition-all duration-[1000ms] ease-linear' />
                            <img src={images.banner_b} className=' w-full block md:hidden hover:scale-105 transition-all duration-[1000ms] ease-linear' />
                        </div>
                    </Link>
                </div>
            </div>


            <div className='collection my-8 md:my-14 md:mt-20 md:mb-5'>
                <div className='container mx-auto px-2 md:px-0'>
                    <div class="grid grid-cols-1 gap-[23px] md:grid-cols-2 lg:grid-cols-2 ">
                        {
                            collectionlist.map((x) => {
                                return (
                                    <Link to='/productlist' >
                                        <div className=' relative '>
                                            <div className='overflow-hidden collec_digit'>
                                                <img src={x.imgcollection1} alt='' className='transition-all duration-[1000ms] ease-linear]' />
                                            </div>
                                            <div className='dec_coll'>
                                                <div className="absolute top-[50%] left-[5%] translate-y-[-50%]">
                                                    <p class="bg-[#ff0000] text-[13px] inline-block text-[#fff] px-[3px] py-[2px] tracking-[3px]">NEW COLLECTION</p>
                                                    <p className='text-[18px] lg:text-[30px] font-bold text-[#5d5d5d;] font-[Marcellus] w-[55%] capitalize pt-[20px] pb-[20px] md:pb-[30px]' >{x.discription}</p>
                                                    <button type="submit" name="add" class="primary px-[11px] py-[4px] md:py-[9px]  text-[#000] uppercase rounded-[30px] border-2 min-w-[115px] md:min-w-[135px] border-[#ff779f] bg-[#fff]">Shop Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )

                            })
                        }
                    </div>
                </div>
            </div>




            {/* blogs */}

            <div className='blogs my-4 md:my-10'>
                <div className='container mx-auto'>
                    <h2 className='text-[24px] md:text-[34px] my-[30px] md:mt-[58px] mb-[30px] font-semibold text-center text-[#000] font-[Marcellus]'>Blogs</h2>
                    <div class="sm:columns-3 px-2 md:px-0 ...">
                        {
                            blogs.map((x) => {
                                return (
                                    <div className=' relative '>
                                        <Link to='/'>
                                            <div className='overflow-hidden'>
                                                <img src={x.blog1} alt='' className='w-full hover:opacity-[.67]' />
                                            </div>
                                            <div className='mt-[6px] mb-[42px]'>
                                                <div className="text-center ">
                                                    <h2 className='text-[18px] text-[#000] font-semibold mt-[2px] mb-[10px]'>{x.title}</h2>
                                                    <hr className='line_time w-[69px] text-[#000] h-[2px] mb-[5px] mx-auto border-[#ff779f]' ></hr>
                                                    <p className='text-[15px]  text-[#000]  font-semibold mt-[2px] mb-[10px]' >{x.subtile}</p>
                                                    <p className='text-[13px] md:text-[15px] font-normal text-[#83868c]'>{x.discription}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* newsletter */}
            <div class="section-newsletter-v1 mt-all bg-no-repeat bg-center	bg-cover py-[40px]  md:py-[90px] px-[13px] lg:px-[0px] bg-[#FBF3F1]">
                <div class="text-center mb-[12px] md:mb-[0px]">

                    <div class="title_newletter">
                        <h3 class="title_heading mb-0 text-[25px] md:text-[42px] text-[#000] font-[Marcellus]">GET UPDATE</h3>
                    </div>



                    <p class="text-[15px] md:text-[20px]   py-[12px] md:py-[0px] mb-3 content  text-[#000] font-[Marcellus]">Subscribe our newsletter and get discount 30% off</p>


                    <div class="newletter_email w-[500px] max-w-[100%] mx-auto">
                        <form class="needs-validation form-inline relative">
                            <div class="form-group relative">
                                <input type="email" name="EMAIL" className="bg-[#fff] py-[15px] px-[15px] w-full" placeholder="Enter your email..." required="" />
                            </div>
                            <button className="btn absolute top-[0px] h-[50px] w-[50px] bg-[#ff779f] right-[0px]" type="submit"><svg className='fill-[#fff] w-[25px] mx-auto text-[#fff]' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"></path><path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"></path></svg></button>
                        </form>
                    </div>
                </div>
            </div>



            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal55" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered relative max-w-[800px] -[800px] px-[12px] py-[12px] pointer-events-none">
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

                                        <p className="text-[#969696] text-[14px] leading-[22px]">We developed a streamlined system for helping you achieve the smoothest shave of your life (that’s also model-approved). This luxe shaving kit for women features a resurfacing pre-shave scrub, super softening shave butter, and cooling after-shave oil – without any shaving aftermath like razor burn, ingrowns, and irritation!</p>

                                        <div className="mt-[21px]">
                                            <div className="">

                                                {values12.map((x) => {
                                                    return (
                                                        <div className="blog_reminder relative flex flex-col md:flex-col">
                                                            <div class="form-check form-check-inline" >
                                                                <input class=" form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#e90b5a] checked:border-[#e90b5a] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions12" id="inlineRadio121" checked={x.checked} value="option1" onChange={(e) => handlecheckbox(e, x.id)} />
                                                                <label className="text-[15px] text-[#000]" for="inlineRadio">{x.text}</label>
                                                                {x.id === 2 && <p className="absolute top-[-11px] bg-[#000] radius-3 text-[#fff] text-[12px] py-[4px] rounded-[3px] px-[5px]">Upto 15% </p>}
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
                                        {/* 
                                        <div className="mt-[30px]">
                                            <div className="">

                                                {values12.map((x) => {
                                                    return (
                                                        <div className={activeId === x.id ? 'checked' : ''}>
                                                            <div class="form-check form-check-inline pb-[10px]" >
                                                                <input class="form-check-input checked form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#e90b5a] checked:border-[#e90b5a] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked={x.checked} onChange={(e) => handlecheckbox(e, x.id)} />
                                                                <label className="text-[15px] text-[#000]" for="inlineRadio10">{x.text}</label>
                                                            </div>
                                                        </div>
                                                    )

                                                }
                                                )
                                                }

                                            </div>
                                            <div className="point_message">
                                                {
                                                    activeId === 2 ? <div><select className="selling_plan border-2 border-[#ff779f] px-[2px] py-3">
                                                        <option value="692289571">Delivery every 30 Days</option>

                                                        <option value="692322339">Delivery every 60 Days</option>

                                                        <option value="692355107">Delivery every 90 Days</option>

                                                    </select></div> : ''
                                                }
                                            </div>
                                        </div> */}
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
export default Home

