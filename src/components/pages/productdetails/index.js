import React, { useEffect, useState } from "react"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../../themes/appImage";
import { Link } from "react-router-dom";
import Item from "antd/lib/list/Item";
import { Collapse, Tooltip } from 'antd';




const ProductDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
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

    const bundle = [{
        set1: images.sets_1,
        title: 'botty & boobies Bundle',
        discription: 'Retexturizing Boob Scrub + Retexturizing Booty Scrub',
        Price: '$270'
    },
    {
        set1: images.sets_2,
        title: 'TikTok Bundle',
        discription: 'Cult Classic Product Bundle',
        Price: '$270'
    },
    {
        set1: images.sets_3,
        title: 'Boobie Bundle',
        discription: '',
        Price: '$270'
    },

    ]

    useEffect(() => {
        document.title = "Truly";
    }, []);
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const [nav11, setNav11] = useState();
    const [nav22, setNav22] = useState();


    const [values12, setvalues12] = useState([
        { id: 1, text: "One-time purchase", price:'$100.00', name: 'first', checked: true },
        { id: 2, text: "Subscribe & save", price:'$85.00', name: 'second', checked: false },
    ]);
    const [activeId, setActiveId] = useState(1);


    const handlecheckbox = (e, id) => {

        setActiveId(id)
        const arr = []
        values12.map((x) => {
            if (x.id == id) {
                x.checked = true
            }
            else {
                x.checked = false
            }
            arr.push(x)
        })
        setvalues12(arr)
    }


    const [values121, setvalues121] = useState([
        { id: 1, text: "One-time purchase $69.30", name: 'first1', checked: true },
        { id: 2, text: "Subscribe & save 10%: $62.37", name: 'second1', checked: false },
    ]);
    const [activeId1, setActiveId1] = useState(1);


    const handlecheckbox1 = (e, id) => {

        setActiveId1(id)
        const arr1 = []
        values121.map((x) => {
            if (x.id == id) {
                x.checked = true
            }
            else {
                x.checked = false
            }
            arr1.push(x)
        })
        setvalues121(arr1)
    }



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
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]

    };
    const [item, setItems] = useState(1)

    const handleIncrement = () => {
        setItems(item + 1)
    }
    const handledecrement = () => {
        if (item > 1) {
            setItems(item - 1)
        }
    }

    const [item1, setItems1] = useState(1)

    const handleIncrement1 = () => {
        setItems1(item1 + 1)
    }
    const handledecrement1 = () => {
        if (item1 > 1) {
            setItems1(item1 - 1)
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
    const settingsThumbs1 = {
        
        vertical: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 639,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                vertical: false,
              }
            }
          ]
    };
    const text = <span>Add to Wishlist</span>;
    const text1 = <span>Quickview</span>;

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
    return (
        <div className="container mx-auto mt-[12px] px-3 md:px-0">
            <div className="main-scroll-slider flex flex-col lg:flex-row lg:gap-[30px]">
                <div className="w-full lg:w-1/2">
                    <div className="sticky top-[70px]">
                        <Slider asNavFor={nav22}  fade = {true} className='first-slider' ref={(slider1) => setNav11(slider1)}>
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
                            <div>
                                <h3><img src={images.slider2} /></h3>
                            </div>
                            <div>
                                <h3><img src={images.slider6} /></h3>
                            </div>
                          


                        </Slider>
                        <Slider
                            {...settingsThumbs1}
                            className="second_slider"
                            asNavFor={nav11}
                            ref={(slider2) => setNav22(slider2)}
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
                            <div>
                                <h3><img src={images.slider2} /></h3>
                            </div>
                            <div>
                                <h3><img src={images.small99} /></h3>
                            </div>
                            
                           
                        </Slider>
                    </div>

                </div>
                <div className="w-full mt-4 md:mt-0 lg:w-1/2 kit">
                    <div className="wishList flex justify-between">
                        <div>
                            <h2 className="text-[20px] md:text-[27px] font-semibold text-center text-[#000] font-[Marcellus]">Smooth Legend Shave Kit</h2>
                            <del className="text-[22px] text-[#83868c] mr-2">$50.00 USD </del> <span className="text-[20px] text-[#ff779f]">$25.00 USD</span>
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

                    <p className="text-[#969696] text-[16px] md:text-[16px] leading-[20px] md:leading-[27px]">We developed a streamlined system for helping you achieve the smoothest shave of your life (that’s also model-approved). This luxe shaving kit for women features a resurfacing pre-shave scrub, super softening shave butter, and cooling after-shave oil – without any shaving aftermath like razor burn, ingrowns, and irritation!</p>
                    <div class="productDetail__List  border-[#ff779f] my-4 border px-[14px] py-[13px] border2 borderBrown radius-10 bg-[#ff779f2e] rounded-[12px]">
                        <h5 class="mb-0 text-[19px] color-[#000] font-medium mb-[2px]">Good to Know:</h5>
                        <ul><li className="text-[16px]">Exfoliating, Tightening, Moisturizing, Vegan, Cruelty-Free</li></ul>


                    </div>

                    <div class="productDetail__List  border-[#C4C4C4] my-4 border px-[14px] py-[13px] border2 borderBrown radius-10 bg-[#fff] rounded-[12px]">
                        <h5 class="mb-2 text-[19px] color-[#000] font-medium">What’s Inside</h5>
                        <ul>
                            <li className="text-[16px] text-[#000] leading-[29px]">💜 Happy Hairless Shave Butter 1.3 Oz / 38 Ml</li>
                            <li className="text-[16px] text-[#000] leading-[29px]">💗 Smooth Legend Pre-Shave Scrub 4 Oz / 120 Ml</li>
                            <li className="text-[16px] text-[#000] leading-[29px]">💜 Glazed Donut After Shave Oil 3.1 Fl Oz / 90 Ml</li></ul>

                    </div>
                    <div className="">
                        <div className="target_view details">
                            <h2 className="mb-0 text-[19px] color-[#000] font-medium mb-[2px]">Subscribe</h2>

                            {values12.map((x) => {
                                return (
                                    <div className="blog_reminder !py-[23px] !mt-[20px] relative flex flex-col">
                                        <div class="form-check form-check-inline w-full" >
                                            <input class=" form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#e90b5a] checked:border-[#e90b5a] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked={x.checked} value="option1" onChange={(e) => handlecheckbox(e, x.id)} />
                                            <div className="flex">
                                            <label className="text-[15px] text-[#000] pr-[3px]" for="inlineRadio10">{x.text}</label>
                                            <label className="text-[15px] text-[#000] text-right flex-1" for="inlineRadio12">{x.price}</label>
                                            </div>

                                           { x.id === 2 && <p className="absolute top-[-11px] bg-[#000] radius-3 text-[#fff] text-[12px] py-[4px] rounded-[3px] px-[5px]">Upto 15% </p>}
                                        </div>
                                    
                                            {
                                                activeId == 2 && x.id === 2 ? <div className="border-t-[1px] border-[#c4c4c4] mt-[19px] pt-[19px]"><select className="selling_plan w-full rounded-[12px] border-2 border-[#ff779f] px-[2px] py-3">
                                                    <option value="692289571">Delivery every 30 Days</option>

                                                    <option value="692322339">Delivery every 60 Days</option>

                                                    <option value="692355107">Delivery every 90 Days</option>

                                                </select></div> : ''
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
                        <button type="submit" className="w-[calc(100%-90px)] bg-[#ff779f] h-[55px]  text-[16px] tracking-[.25em] font-semibold text-[#fff] uppercase hover:bg-transparent hover:text-[#ff779f] hover:border border-[#ff779f]" value="Add to Cart">
                            Add to Cart
                        </button>

                    </div>
                    <p className="free_target text-[#000] text-[16px] text-right py-2"><Link to=''>Hassle Free Returns</Link></p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-[10px] mb-[20px]">
                        <span className="flex text-[13px] text-[#000] items-center">
                            <div className="w-[45px]">
                                <img src={images.shipping} className="max-width-[100%] h-[30px]" />
                            </div>

                            <div className="pl-[20px]">Fast Shipping</div>
                        </span>
                        <span className="flex text-[13px] text-[#000] items-center">  <div className="w-[45px]">
                            <img src={images.support} className=" max-width-[100%] h-[30px]" />
                        </div >
                            <div className="pl-[20px]">
                                24/7 Customer Support</div></span>


                        <span className="flex text-[13px] text-[#000] items-center">  <div className="w-[45px]"><img src={images.return} className="max-width-[100%] h-[28px]" /></div> <div className="pl-[20px]">100% Secure Checkout</div></span>
                    </div>
                    <h3 className="text-center text-[20px] text-[#000] mb-[12px] font-bold">Save with Sets</h3>
                    {bundle.map((x) => {
                        return (
                            <Link to='/Productdetails'>
                                <div className="sets flex items-center bg-[#f0f0f0] mb-[12px]">
                                    <div className="w-[150px] mr-[12px]">
                                        <img src={x.set1} className="max-width-[150px] w-full" />
                                    </div>
                                    <div className="discription_prod">
                                        <h2 className="text-[17px] text-[#000] font-medium mb-[12px]">{x.title}</h2>
                                        <p className="text-[14px] text-[#000] font-normal mb-[12px] hidden md:block">{x.discription} </p>
                                        <button type="submit" name="add" class="primary font-bold hover:bg-[#fff] hover:text-[#FF779F] hover:border-[#FF779F] px-[11px] py-[9px] text-[#fff] uppercase rounded-[30px] border-2 lg:min-w-[170px] border-[#FF779F] bg-[#FF779F]">Add to bag</button><span className="money_last mt-[9px] ml-[10px] inline-block "><strong> $270.00 </strong></span>
                                    </div>
                                </div>
                            </Link>)
                    })}




                    <h2 className="text-[#000] text-[22px] pb-3 pt-4">What Makes this Bundle SO Good?</h2>
                    <p className="text-[#969696] text-[14px] md:text-[16px] leading-[20px] md:leading-[27px]">The Smooth Legend Shave Kit makes hair removal an effortless, enjoyable, and luxury experience. Enriched with healing coconut, cell-restoring vitamin E, and elasticity restoring passion fruit, these all-star ingredients leave skin smooth, springy, and soft to the touch. Model + actress Amanda Cerny has already given it her seal of approval: “It’s everything you need for the perfect shave.”</p>

                    <h5 class="mt-3 mb-5 text-[#000] text-[20px] font-medium"> Essential Ingredients:</h5>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item bg-white border-b-[1px] border-gray-200">
                            <h2 class="accordion-header mb-0" id="headingOne">
                                <button class="accordion-button relative flex items-center w-full py-4 text-base text-gray-800 text-left bg-white border-0  rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Coconut 🥥
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body py-4">
                                    Vitamin E provides a range of hydrating, healing, and anti-aging benefits. It also bolsters skin barrier function and aids in cell restoration for smooth, supple skin – sans irritation.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item  border-b-[1px] border-gray-200">
                            <h2 class="accordion-header mb-0" id="headingTwo">
                                <button class="accordion-button collapsed relative flex items-center w-full py-4 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    Vitamin E ✨
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body py-4">
                                    Vitamin E provides a range of hydrating, healing, and anti-aging benefits. It also bolsters skin barrier function and aids in cell restoration for smooth, supple skin – sans irritation.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item  border-b-[1px] border-gray-200">
                            <h2 class="accordion-header mb-0" id="headingThree">
                                <button class="accordion-button collapsed relative flex items-center w-full py-4 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    Passion Fruit 💧
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body py-4">
                                    A natural emollient with elasticity-restoring powers that leaves skin silky to the touch. High in essential nutrients like carotene, riboflavin, and vitamins A and C, passion fruit stimulates blood flow, seals in moisture, and prevents line formation for your smoothest, glowiest skin.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='best-sellers pt-[30px]'>
                <div className='sm:container mx-auto'>
                    <h2 className='text-[24px] md:text-[34px] font-semibold text-center text-[#000] font-[Marcellus] pb-[12px]'>Related Products</h2>
                    <div className='slider_top mb-12'>
                        <Slider {...settings1}>
                            {bestsellers.map((x) => {
                                return (
                                    <div className='p-3'>
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
                                                        <div className="whitespace-nowrap star flex mt-4 items-center justify-center md:justify-start	">
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
            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal55" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered relative max-w-[800px] px-[12px] py-[12px] pointer-events-none">
                    <div
                        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-body relative px-[12px] py-[12px]">
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

                                                {values121.map((x) => {
                                                    return (
                                                        <div className="blog_reminder relative flex flex-col md:flex-col">
                                                        <div class="form-check form-check-inline" >
                                                            <input class=" form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#e90b5a] checked:border-[#e90b5a] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions1" id="inlineRadio77" checked={x.checked} value="option1" onChange={(e) => handlecheckbox1(e, x.id)} />
                                                            <label className="text-[15px] text-[#000]" for="inlineRadio12">{x.text}</label>
                                                           { x.id === 2 && <p className="absolute top-[-11px] bg-[#000] radius-3 text-[#fff] text-[12px] py-[4px] rounded-[3px] px-[5px]">Upto 15% </p>}
                                                        </div>
                                                { activeId1 === 2 && x.id === 2 ?
                                                            <div className="point_message">
                                                    <div><select className="rounded-[12px]  selling_plan border-2 border-[#ff779f] px-[2px] py-3">
                                                        <option value="692289571">Delivery every 30 Days</option>

                                                        <option value="692322339">Delivery every 60 Days</option>

                                                        <option value="692355107">Delivery every 90 Days</option>

                                                    </select></div> 
                                            </div>
                                            : ''
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
                                                <button type="button" class="qty_minus absolute right-[0] w-[40px] border-b-[1px] border-[#ddd]" data-id="" data-qty="0" onClick={() => handleIncrement1()}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[25px] mx-auto">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>

                                                </button>
                                                <input type="text" className="w-[45px] h-[50px] border-r-[2px] text-center" value={item1} aria-label="quantity" pattern="[0-9]*" name="quantity" id="Quantity" />
                                                <button type="button" class="qty_minus absolute right-[0] bottom-[0] w-[40px] " data-id="" data-qty="0" onClick={() => handledecrement1()}>
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
export default ProductDetails