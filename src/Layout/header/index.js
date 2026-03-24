import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import images from '../../themes/appImage'
import { useNavigate } from 'react-router-dom';







const Header = () => {
    const navigate = useNavigate();
    // const handleClick = (e) => {
    //     document.body.classList.add('bg-salmon');
    //     e.stopPropagation()
    // };

    // const handleClickClose = (e) => {
    //     document.body.classList.remove('bg-salmon');

    // }
    // document.addEventListener('click', function (e) {
    //     var container = document.getElementById('offcanvasTop');

    //     if (!container.contains(e.target)) {
    //         document.body.classList.remove('bg-salmon');

    //     }
    // });

    const dataitems = [{
        id: 1,
        img: images.smallProduct,
        name: 'Coco Cloud Whipped Luxury Shave Butter',
        price: '15.00',
        quantity: 1


    },
    {
        id: 2,
        img: images.img_34,
        name: 'Pit Perfecting Kit',
        price: '15.00',
        quantity: 1


    },
    {
        id: 3,
        img: images.moon,
        name: 'Moon Bath Essentials',
        price: '15.00',
        quantity: 1


    }]

    const bestsellers = [{
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
        // {
        //     imgcollection1: images.img5,
        //     title: 'Cooka Kit',
        //     discription: ' Bikini Line Kit + Razor',
        //     Price: '$270'

        // },

    ]

    const [cartTotal, setCartTotal] = useState(0);
    const [cart, setCart] = useState([...dataitems]);


    const [decremnt, setDecrement] = useState(0)
    const [remaning, setRemaning] = useState(0)
    let [total12, settotal12] = useState(0)
    const [width, setWidth] = useState(10)


    let total = 0;
    let itemsnew = 0;
    useEffect(() => {
        if (total < 125) {
            if (total < 10) {
                setWidth(0)
            }
            else if (total <= 30) {
                setWidth(20)
            }
            else if (total < 60) {
                setWidth(40)
            }
            else if (total < 90) {
                setWidth(60)
            }
            // else if(total < 125){
            //     setWidth(0)
            // }

            total12 = 125 - total
            settotal12(total12)
        }
        else {
            settotal12(0)
            setWidth(100)
        }
    },);



    const handleDecrement = (card_id) => {

        setCart(cart.map((item) => card_id === item.id ? { ...item, quantity: item.quantity - (item.quantity > 0 ? 1 : 0) } : item))
    }
    const handleIncrement = (card_id) => {
        setCart(cart.map((item) => card_id === item.id ? { ...item, quantity: item.quantity + 1 } : item))
    }



    const [active, setactive] = useState('0');
    const [active1, setactive1] = useState('1');


    const [sticky, setSticky] = useState("");

    // on render, set listener
    useEffect(() => {
        console.log("hello");
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 130 ? "is-sticky" : "";
        setSticky(stickyClass);
        console.log(stickyClass);
    };

    const classes = `header-section d-none d-xl-block ${sticky}`;
    const classes1 = `bottom_bar ${sticky}`;



    const [register, setregister] = useState(false)

    const handleRigester = () => {
        setregister(!register)
    }
    

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    return (
        <div>
            {/* desktop_view */}
            <header className={`desktop_header hidden lg:block ${classes}`}>
                <div className='top_header py-[20px]'>
                    <div className="container mx-auto">
                        <div className='row'>
                            <div className='logo_wrapper flex justify-between items-center'>
                                <div className='logo'>
                                    <Link to='/home'>
                                        <img src={images.logo} className='w-[110px]' />
                                    </Link>
                                </div>
                                <ul className='flex gap-4'>
                                    <li className='relative' ><Link to='/home' className='text-[#343434] text-[14px] capitalize font-medium'>Home</Link></li>
                                    <li><a href='javascript:void(0);' className='peer text-[#343434] text-[14px] capitalize font-medium relative'>
                                        Shop
                                        <span className="z-[100] bg-[#e62e05] absolute font-bold text-[#fff] text-[8px] px-[4px] py-[2px] text-center top-[-15px] left-[0] left-[23px] 
                                    :before content:''
                                     before:absolute
                                     before:border-t-4
                                     before:border-t-rose-600
                                     before:border-r-4
                                     before:top-[15px]
                                     before:left-[11px]
                                     before:border-r-transparent
                                     ">
                                            Hot
                                        </span>
                                    </a>
                                        <div className='invisible z-[100] z-10 peer-hover:visible hover:visible peer-hover:top-[55px] transition  drop_down bg-[#fff] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] absolute top-[60px] left-[0] right-[0] drop pt-3 border-t-2 border-[#e52086] pb-12'>
                                            <div className="lg:container mx-auto menu_sub_menu">
                                                <div className='flex'>
                                                    <div className='flex  w-1/2'>
                                                        <ul className='w-1/3'>
                                                            <li className='text-[#343434] text-[15px] font-normal  capitalize'><b className='text-[#e52086]'>Shop By Routine</b></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Blemish Patch</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Cleanser</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Mask</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Shaving</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'> <Link to='/'>Scrub</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'> <Link to='/'>Serum</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'> <Link to='/'>Moisturizer</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'> <Link to='/'>Toner & Mist</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><b className='text-[#000]'><Link to='/'>Shop All</Link></b></li>
                                                        </ul>
                                                        <ul className='w-1/3'>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize '><b className='text-[#b3a7d5]'>Shop By Body Part</b></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Breast</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Butt</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Face</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Hands</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Pits</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Legs</Link></li>
                                                        </ul>
                                                        <ul className='w-1/3'>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize'><b className='text-[#9de0f6]'>Shop By Skin Concern</b></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>New Arrivals</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Mini Bar</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Shaving</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'>Accessories</Link></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><Link to='/'> Shave on Bundle</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex flex-col  w-1/2'>
                                                        <div>
                                                            <div className='flex pl-[40px] gap-[12px] mb-[12px]' >
                                                                <div className='true_int  w-1/2 '>
                                                                    <Link to='/'>
                                                                        <img src={images.shop} className='w-full' />
                                                                        <div className='py-2'>
                                                                            <h4 className='font-bold text-[15px] mb-[4px]'>Shop All</h4>
                                                                            <p className='text-[#343434] text-[12px] 2xl:text-[14px] font-normal capitalize'>From whipped body butters to youth-restoring serums, check out our full range of plant-powered skincare products.</p>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className='true_int w-1/2'>
                                                                    <Link to='/'>
                                                                        <img src={images.shop3} className='w-full' />
                                                                        <div className='py-2'>
                                                                            <h4 className='font-bold text-[15px] mb-[4px]'>Save on Bundles</h4>
                                                                            <p className='text-[#343434] text-[12px] 2xl:text-[14px] font-normal capitalize'>You’ll save big bucks when buying our bestsellers as a bundle in comparison to purchasing them individually.</p>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex pl-[40px] gap-[12px] mb-[12px]'>
                                                                <div className='true_int w-1/2'>
                                                                    <Link to='/'>
                                                                        <img src={images.shop1} className='w-full' />
                                                                        <div className='py-2'>
                                                                            <h4 className='font-bold text-[15px] mb-[4px]'>Mini bar</h4>
                                                                            <p className='text-[#343434] pb-[50px] text-[12px] 2xl:text-[14px]  font-normal capitalize'>Shake up your routine with something new or order up your Truly favorites – the Mini Bar is filled with high-performing, TikTok-viral skincare products for whenever you’re in the mood.</p>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className='true_int w-1/2 mb-[12px]'>
                                                                    <Link to='/'>
                                                                        <img src={images.Bestseller} className='w-full' />
                                                                        <div className='py-2'>
                                                                            <h4 className='font-bold text-[15px] mb-[4px]'>Best Seller</h4>
                                                                            <p className='text-[#343434]  text-[12px] 2xl:text-[14px] font-normal capitalize'>The Truly favorites you HAVE to try. Think Unicorn Fruit Body Butter, Buns of Glowry Butt Serum + more!</p>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </li>
                                    <li className='relative' ><a className='text-[#343434] text-[14px] capitalize font-medium'>Skincare Quiz</a></li>
                                    <li className='relative' ><a className='text-[#343434] text-[14px] capitalize font-medium'>New Arrivals</a></li>
                                    <li className='relative'><a className='text-[#343434] text-[14px] capitalize font-medium'>Mini Bar</a></li>
                                    <li className='relative' ><a className='text-[#343434] text-[14px] capitalize font-medium'>Shaving</a></li>
                                    <li className='relative' ><a className='text-[#343434] text-[14px] capitalize font-medium'>Accessories</a></li>
                                    <li className='relative'><a className='text-[#343434] text-[14px] capitalize font-medium'> Shave on Bundle</a></li>
                                </ul>

                                <ul className='flex gap-4'>
                                    <li className='cursor-pointer'><svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                    </li>
                                    <li className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="modal" data-bs-target="#exampleModal" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    </li>
                                    <li className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    </li>
                                    <li className='cursor-pointer'><svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg></li>
                                </ul>

                            </div>

                        </div>
                    </div>



                </div>
            </header>
            {/* mobile_view */}
            <header className={`block lg:hidden  ${classes}`}>
                <div className='top_header py-3 px-3'>
                    <div className="lg:container mx-auto">
                        <div className='row'>
                            <div className='logo_wrapper flex justify-between items-center'>
                                <h2 type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" className='w-[60px]'>
                                   <img src={images.menu}/>
                                </h2>
                                <div className='logo'>
                                    <img src={images.logo} className='w-[100px]' />
                                </div>
                                <ul className='flex gap-4'>
                                    <li className='cursor-pointer'><svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                    
                                    </li>
                                    <li className='cursor-pointer'><svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg></li>

                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div>
                        <div class="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-[320px]" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-body flex-grow">
                                <ul class="nav nav-tabs flex md:flex-row flex-wrap list-none border-b-[1px] pl-0" id="tabs-tab"
                                    role="tablist">
                                    <li class="nav-item w-1/2" role="presentation">
                                        <a href="#tabs-home" class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                                            aria-selected="true"><div className='flex justify-center items-center gap-[18px]'>
                                                <div className=''>
                                                 <img src={images.menu} className="simple py-[4px]"/>
                                                 <img src={images.whiteiocn} className="white py-[4px]"/>
                                                 </div>
                                                <span className='text-[15px]'> MENU</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item w-1/2" role="presentation">
                                        <a href="#tabs-profile" className="bg-[#fff] nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                                            aria-controls="tabs-profile" aria-selected="false"><div className='flex justify-center items-center gap-[18px]'>
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                                <span className='text-[15px]'> LOGIN </span>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                                <div className={active === '2' ? "tab-content" : 'tab-content menu_scroll' } id="tabs-tabContent">
                                    <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                                    <Link to="/home">
                                        <div className='flex justify-between items-center border-b-[2px] border-[#ededed] pl-[12px]'>
                                            <span title="HOME"  className="relative nammenu text-[#000] w-full flex justify-between items-center text-[16px] font-semibold active:text-[#000]" data-bs-dismiss="offcanvas" aria-label="Close">Home
                                            <a data-check="c1" class="h-[54px] w-[54px]  border-[#ededed] flex justify-center items-center">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[30px] h-[30px]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg> */}

                                            </a>
                                            </span>
                                        </div>
                                        </Link>
                                        <div className='flex justify-between items-center border-b-[2px] border-[#ededed] pl-[12px]'>
                                            <span className={active === '1' ? 'flex justify-between w-full items-center menu ' : 'flex justify-between w-full items-center'} >
                                                <span className='flex justify-between w-full items-center ' onClick={() => setactive('1')}>
                                                    <a href="javascript:void(0);" title="HOME" className='relative nammenu text-[#000] text-[16px] font-semibold	active:text-[#000]' >Shop</a>
                                                    <a data-check="c1" class="h-[54px] w-[54px]  border-[#ededed] flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                        </svg>

                                                    </a>
                                                </span>
                                                <div className={active === '2' ? 'inner_menu w-full absolute bg-[#fff] right-[-100%] top-[0] ' : 'inner_menu w-full absolute bg-[#fff] right-[-100%] top-[0]'} >
                                                    <a href="javascript:void(0)" title="SHOP" onClick={() => setactive('2')} className='h-[54px] bg-[#ff779f] flex text-[#fff] text-[20px] pl-[15px] flex w-full items-center active:text-[#fff]'> SHOP <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></a>
                                                    <div className='pl-[15px]'>
                                                        <ul className=''>
                                                            <li className='text-[#343434] text-[15px] font-normal  capitalize'><b className='text-[#e52086] py-3 flex'>Shop By Routine</b></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Blemish Patch</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Cleanser</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Mask</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Shaving</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Scrub</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Serum</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Moisturizer</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Toner & Mist</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'><b className='text-[#000]'>Shop All</b></li>
                                                        </ul>
                                                        <ul className=''>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize '><b className='text-[#b3a7d5] py-3 flex'>Shop By Body Part</b></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Breast</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Butt</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Face</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Hands</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Pits</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Legs</li>
                                                        </ul>
                                                        <ul className=''>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize'><b className='text-[#9de0f6] py-3 flex'>Shop By Skin Concern</b></li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>New Arrivals</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Mini Bar</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Shaving</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'>Accessories</li>
                                                            <li className='text-[#343434] text-[15px] font-normal capitalize py-2'> Shave on Bundle</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex flex-col  w-full px-3'>
                                                        <div>
                                                            <div className='flex  gap-[12px]' >
                                                                <div className='true_int  w-1/2'>
                                                                    <img src={images.shop} className='w-full' />
                                                                    <div className='py-4'>
                                                                        <h4 className='font-bold text-[15px]'>Shop All</h4>
                                                                        <p className='text-[#343434] text-[12px] font-normal capitalize'>From whipped body butters to youth-restoring serums, check out our full range of plant-powered skincare products.</p>
                                                                    </div>
                                                                </div>
                                                                <div className='true_int w-1/2'>
                                                                    <img src={images.shop3} className='w-full' />
                                                                    <div className='py-4'>
                                                                        <h4 className='font-bold text-[15px]'>Save on Bundles</h4>
                                                                        <p className='text-[#343434] text-[12px] font-normal capitalize'>You’ll save big bucks when buying our bestsellers as a bundle in comparison to purchasing them individually.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex  gap-[12px]'>
                                                                <div className='true_int w-1/2'>
                                                                    <img src={images.shop1} className='w-full' />
                                                                    <div className='py-4'>
                                                                        <h4 className='font-bold text-[15px]'>Mini bar</h4>
                                                                        <p className='text-[#343434] text-[12px] font-normal capitalize'>Shake up your routine with something new or order up your Truly favorites – the Mini Bar is filled with high-performing, TikTok-viral skincare products for whenever you’re in the mood.</p>
                                                                    </div>
                                                                </div>
                                                                <div className='true_int w-1/2'>
                                                                    <img src={images.Bestseller} className='w-full' />
                                                                    <div className='py-4'>
                                                                        <h4 className='font-bold text-[15px]'>Best Seller</h4>
                                                                        <p className='text-[#343434] text-[12px] font-normal capitalize'>The Truly favorites you HAVE to try. Think Unicorn Fruit Body Butter, Buns of Glowry Butt Serum + more!</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </span>
                                        </div>
                                        <div className='flex justify-between items-center border-b-[2px] border-[#ededed] pl-[12px]'>
                                            <a href="/" title="HOME" class="relative nammenu text-[#000] text-[16px] font-semibold	active:text-[#000]">Skincare Quiz</a>
                                            <a data-check="c1" class="h-[54px] w-[54px]  border-[#ededed] flex justify-center items-center">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg> */}

                                            </a>
                                        </div>
                                        <div className='flex justify-between items-center border-b-[2px] border-[#ededed] pl-[12px]'>
                                            <a href="/" title="HOME" class="relative nammenu text-[#000] text-[16px] font-semibold	active:text-[#000]">New Arrivals</a>
                                            <a data-check="c1" class="h-[54px] w-[54px]  border-[#ededed] flex justify-center items-center">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg> */}

                                            </a>
                                        </div>
                                        <div className='flex justify-between items-center border-b-[2px] border-[#ededed] pl-[12px]'>
                                            <a href="/" title="HOME" class="relative nammenu text-[#000] text-[16px] font-semibold	active:text-[#000]">Mini Bar</a>
                                            <a data-check="c1" class="h-[54px] w-[54px]  border-[#ededed] flex justify-center items-center">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg> */}

                                            </a>
                                        </div>
                                        <div className='flex justify-between items-center border-b-[2px] border-[#ededed] pl-[12px]'>
                                            <a href="/" title="HOME" class="relative nammenu text-[#000] text-[16px] font-semibold	active:text-[#000]">Shaving</a>
                                            <a data-check="c1" class="h-[54px] w-[54px]  border-[#ededed] flex justify-center items-center">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg> */}

                                            </a>
                                        </div>
                                        <div className='flex justify-between items-center border-b-[2px] border-[#ededed] pl-[12px]'>
                                            <a href="/" title="HOME" class="relative nammenu text-[#000] text-[16px] font-semibold	active:text-[#000]">Accessories</a>
                                            <a data-check="c1" class="h-[54px] w-[54px]  border-[#ededed] flex justify-center items-center">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg> */}

                                            </a>
                                        </div>
                                        <div className='flex justify-between items-center border-b-[2px] border-[#ededed] pl-[12px]'>
                                            <a href="/" title="HOME" class="relative nammenu text-[#000] text-[16px] font-semibold	active:text-[#000]">Shave On Bundle</a>
                                            <a data-check="c1" class="h-[54px] w-[54px]  border-[#ededed] flex justify-center items-center">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg> */}

                                            </a>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                                        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                                            <div
                                                class="modal-content border-none rounded-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                                <div class="modal-body rounded-none relative px-[10px] py-12 text-center mb-8">

                                                {
                                !register ?
                                    <div>

                                        <div className='logo_tree tree mt-4'>
                                            <img src={images.logo} className='mx-auto mt-4 mb-3' />

                                            <h3 className='text-[#000] text-[17px] px-12 px-6 px-8 py-4 border-top border-t-[1px] '>Great to have you back!</h3>
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Email Address' className='text-[#000] w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <div className='form-control'>
                                            <input type='text' placeholder='Password' className='text-[#000]  w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <p className='text-[#c5c4c4] text-left pb-4'><Link to='/home'>Forgot your password?</Link></p>


                                        <Link to='/profile'><button className='text-[#fff] text-[19px] w-full h-[55px] mb-7 rounded-[2px] px-6 bg-[#ff779f] uppercase' data-bs-dismiss="offcanvas" aria-label="Close"
                                        >Log In</button></Link>
                                        <button className='text-[#000] text-[13px] md:text-[15px] w-full h-[50px] mb-7 rounded-[2px] px-6 bg-[#f2f2f2] border border-[#e8eced]' onClick={() => handleRigester()}>Don’t have an account?<span className='text-[13px] md:text-[15px] text-[#d1d1d1] pl-2'>Register now</span></button></div>
                                    :
                                    <div className='register'>
                                        <div className='logo_tree tree mt-4'>
                                            <img src={images.logo} className='mx-auto mt-4 mb-3' />
                                            <h3 className='text-[#000] text-[17px] px-12 px-6 px-8 py-4 border-top border-t-[1px] '>Register</h3>
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' placeholder='First Name' className='text-[#000] w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Last Name' className='text-[#000] w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Email' className='text-[#000] w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <div className='form-control'>
                                            <input type='text' placeholder='Password' className='text-[#000]  w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <p className='text-[#c5c4c4] text-left pb-4 opacity-0'><Link to='/home'>Forgot your password?</Link></p>
                                        <Link to='/profile'><button className='text-[#fff] text-[19px] w-full h-[55px] mb-7 rounded-[2px] px-6 bg-[#ff779f] uppercase' data-bs-dismiss="modal"
                                        >Register</button></Link>
                                        <button className='text-[#000] text-[15px] w-full h-[50px] mb-7 rounded-[2px] px-6 bg-[#f2f2f2] border border-[#e8eced]' onClick={() => handleRigester()}><span className='text-[15px] text-[#d1d1d1] pl-2'>Back to login</span></button>

                                    </div>
                                
                            }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex  bottom-[0] w-full  bg-[#000] z-10 h-[50px] text-center' data-bs-dismiss="offcanvas" aria-label="Close">
                                    <h3 className='text-[#fff] text-[20px] leading-[3rem]'>Close</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* mobile_view_ends */}

            {/* login_modal */}
            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div
                        class="modal-content border-none rounded-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-body rounded-none relative px-[60px] py-12 text-center mb-8">
                            <button type="button"
                                class="absolute top-[-23px] right-[-2px] hover:rotate-[180deg] transition-all duration-500 ease-in btn-close box-content w-4 h-4 p-1 text-[#fff] border-none rounded-none opacity-1"
                                data-bs-dismiss="modal" aria-label="Close"></button>

                            {/* register */}
                            {
                                !register ?
                                    <div>

                                        <div className='logo_tree tree mt-4'>
                                            <img src={images.logo} className='mx-auto mt-4 mb-3' />

                                            <h3 className='text-[#000] text-[17px] px-12 px-6 px-8 py-4 border-top border-t-[1px] '>Great to have you back!</h3>
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Email Address' className='text-[#000] w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <div className='form-control'>
                                            <input type='text' placeholder='Password' className='text-[#000]  w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <p className='text-[#c5c4c4] text-left pb-4'><Link to='/home'>Forgot your password?</Link></p>


                                        <Link to='/profile'><button className='hover:bg-[transparent]  hover:border hover:border-[#ff779f] hover:text-[#ff779f] text-[#fff] text-[19px] w-full h-[55px] mb-7 rounded-[2px] px-6 bg-[#ff779f] uppercase primary' data-bs-dismiss="modal"
                                        >Log In</button></Link>
                                        <button className='text-[#000] text-[15px] w-full h-[50px] mb-7 rounded-[2px] px-6 bg-[#f2f2f2] border border-[#e8eced]' onClick={() => handleRigester()}>Don’t have an account?<span className='text-[15px] text-[#ff779f] pl-2'>Register now</span></button></div>
                                    :
                                    <div className='register'>
                                        <div className='logo_tree tree mt-4'>
                                            <img src={images.logo} className='mx-auto mt-4 mb-3' />
                                            <h3 className='text-[#000] text-[17px] px-12 px-6 px-8 py-4 border-top border-t-[1px] '>Register</h3>
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' placeholder='First Name' className='text-[#000] w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Last Name' className='text-[#000] w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Email' className='text-[#000] w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <div className='form-control'>
                                            <input type='text' placeholder='Password' className='text-[#000]  w-full h-[55px] mb-4 rounded-[2px] px-6  bg-transparent border border-solid border-[#ced4da]' />
                                        </div>
                                        <p className='text-[#c5c4c4] text-left pb-4 opacity-0'><Link to='/home'>Forgot your password?</Link></p>
                                        <Link to='/profile'><button className='hover:bg-[transparent]  hover:border hover:border-[#ff779f] hover:text-[#ff779f] text-[#fff] text-[19px] w-full h-[55px] mb-7 rounded-[2px] px-6 bg-[#ff779f] uppercase' data-bs-dismiss="modal"
                                        >Register</button></Link>
                                        <button className='text-[#000] text-[15px] w-full h-[50px] mb-7 rounded-[2px] px-6 bg-[#f2f2f2] border border-[#e8eced]' onClick={() => handleRigester()}><span className='text-[15px] text-[#ff779f] pl-2'>Back to login</span></button>

                                    </div>
                                
                            }
                            </div>
                        </div>
                    </div>
                </div>

                {/* sidebar */}

                <div className="offcanvas bg-[#F7F7F7] offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header flex items-center justify-between border border-slate-200 border-l-0 ">
                        <button type="button" class="btn-close box-content w-4  h-[45px] -my-5 -mr-2 min-w-[45px]   border-r-2  border-slate-100  focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                        <h5 class="offcanvas-title mb-0 text-[21px] text-[#000] leading-normal font-semibold" id="offcanvasRightLabel">Shopping Cart</h5>
                        <div className='border border-slate-200  border-r-0 border-t-0 border-b-0 min-w-[45px] h-[45px] text-center leading-[41px]'>
                            <span className=' text-[21px] text-[#000]'>0</span>
                        </div>
                    </div>
                    <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
                        <div className='h-[100%] hidden'>
                            <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full text-center'>
                                <h4 className='text-[#343434] text-[22px] capitalize font-medium'>Your shopping bag is empty</h4>
                                <button class="text-[#fff] text-[15px] h-[55px] mt-7 font-bold rounded-[2px] px-6 bg-[#000] uppercase tracking-[.25em]">Go To THE SHOP</button>
                            </div>
                        </div>
                        <div className='border_scroll h-[calc(100vh-185px)] overflow-auto	'>
                            <div className='pb-3 mb-3'>
                                <div className=''>
                                    {cart.map((x) => {
                                        total += x.price * x.quantity
                                        itemsnew += x.quantity
                                        return (
                                            <div className='flex mb-2 relative  border-b-[1px] pb-[8px]'>
                                                <h2 className='w-[70px]'><img src={x.img} className='w-[70px]' /></h2>
                                                <div className='target_dessert'>
                                                   <Link to = '/Productdetails'> <h3 className='text-[14px] text-[#000] font-medium' data-bs-dismiss="offcanvas" aria-label="Close">{x.name}</h3></Link>
                                                    <div class="button_box my-1 flex">
                                                        <button type="submit" className="button_items text-[#fff] text-[28px] w-[30px] bg-[#ff779f] h-[30px] rounded-full leading-[8px]" onClick={() => handleDecrement(x.id)}><span className='relative top-[-2px]'>-</span></button>
                                                        <input type="text" value={x.quantity} className=" data_items w-[30px] h-[30px] text-center font-bold mx-1" />
                                                        <button type="submit" className="button_items text-[24px] text-[#fff] w-[30px] h-[30px] bg-[#ff779f] rounded-full leading-[30px]" onClick={() => handleIncrement(x.id)}><span className='relative top-[-3px]'>+</span></button>
                                                        <h4 className='text-[14px] text-[#000] ml-3 font-bold leading-[29px]'>${x.price * x.quantity}.00</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>

                                                </div>
                                            </div>

                                        )
                                    })
                                    }


                                </div>
                            </div>

                            <div className='slide_today'>
                                <h4 className='text-[20px] text-[#000]'>Cart Total ({itemsnew} Items): ${total}.00</h4>
                                <p className='text-[13px] text-[#000] mt-2'>{total < 125 ? `You are $${total12}.00 away from FREE shipping` : 'You are elibile for Free Shipping'}</p>
                                <div class="freeShippingProgress__bar bg-[#ffe4ec] h-[6px] w-full rounded-sm relative mt-1">
                                    <div style={{ width: width + '%' }} className='w-[30px] absolute top:[0px] left:[0px] h-[6px] bg-[#ff779f] rounded-sm'></div></div>
                            </div>
                        </div>


                        <div className='absolute bottom-[0] max-w-[384px] left-[0] right-[0]'>
                            <div className='subtotal px-3 bg-[#fff] py-4'>
                                <h2 className='text-[17px] text-[#000]'>Total:</h2>
                                <p className='text-[17px] text-[#ff779f]'>${total}.00</p>
                            </div>
                            <div class="action-checkout flex   ">

                                {/* <Link to="/home" className="w-full bg-[#e90b5a] h-[55px]  text-[16px] tracking-[.25em] font-semibold text-[#fff] uppercase">
                                <span className='text-[15px] text-[#fff]  uppercase font-bold align-items flex leading-[50px] justify-center'>Check out</span>
                            </Link> */}
                                <div class="action-checkout flex w-full">

                                    <button onClick={() => navigate('/cart')} className="bg-[#ff779f] cursor-pointer w-1/2 h-[59px] border-r-[2px]  text-center leading-[53px]" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <span className='text-[15px] text-[#fff] uppercase font-bold'>View cart</span>
                                    </button>
                                    <button  onClick={() => navigate('/home')} className="bg-[#ff779f] w-1/2 h-[59px] text-center leading-[53px]">
                                        <span className='text-[15px] text-[#fff]  uppercase font-bold'>Check out</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*search  */}
         

                <div class="offcanvas offcanvas-top fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 right-0 border-none h-[720px] max-h-full" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header flex items-center justify-end absolute right-[27px] top-[39px] z-40">
                      
                    </div>
                    <div class="offcanvas-body  flex-grow overflow-y-auto text-center relative">
                       <div className='flex justify-between bg-[#fbf2f2] px-[12px]'> 
                        <h2 className='py-[13px] text-[17px] md:text-[31px] md:flex-1 text-[#000] font-bold'>Start typing and hit Enter</h2>
                       
                        <button type="button" class="btn-close box-content w-4 h-4 p-2 mt-[12px]  text-[#000] text-[20px] border-none rounded-none opacity-1 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close" id='asdasd'></button>
                        </div>
                        <div className='p-4 max-w-[1200px] mx-auto relative mt-1  mb-1 translate-y-[-100%] opacity-0 invisible input_data'>
                            <div className='relative'>
                            <input type='text' className='border-slate-200 border-b-2 w-full text-[14px] py-3 px-2 border-0 appearance-none' list="programmingLanguages" placeholder='Search anything' />
                            <button type='submit' className='absolute right-[0] top-[10px] w-[23px]'><img src={images.search} /></button>
                            </div>
                            <datalist id="programmingLanguages">
                                <option value="KP">KP Treatment Kit</option>
                                <option value="Pit">Pit Perfecting Kit</option>
                                <option value="Defrost">Defrost Summer Bod</option>
                                <option value="Ultimate">Ultimate Body Bundle</option>
                                <option value="Deluxe">Deluxe Body Bundle</option>
                                <option value="Defrost">Defrost Summer Bod</option>
                                <option value="KP">KP Treatment Kit</option>
                                <option value="Vegan">Vegan Collagen Booster Bundle</option>
                                <option value="Acai">Acai Your Boobies Serum</option>
                                <option value="Mary">Mary Jane Glow Serum</option>
                                <option value="Moon">Moon Rocks Whipped Body Scrub</option>
                                <option value="Rainbows">Rainbows in Mirrors</option>
                            </datalist>

                            <div className='flex align-items justify-between py-4'>
                                <h3 className='text-[20px] text-[#000]'>Products</h3>
                                <h3 className='text-[20px] text-[#000]'>Search for “as”</h3>
                            </div>


                            <div className='container mx-auto nb-[300px]'>
                                <div class="flex gap-[20px] flex-col lg:flex-row  px-2 md:px-0">
                                    {
                                        bestsellers.map((x) => {
                                            return (
                                                
                                                        <div className=' relative '>
                                                    <div className='overflow-hidden p-2  bg-[#f9f9f9] lg:bg-[#fff] flex flex-col sm:flex-row lg:flex-col'>
                                                        <div className='flex lg:flex-col'>
                                                        <Link to='/productlist' >
                                                            <img src={x.imgcollection1} className='w-[60px] lg:w-full' alt='' data-bs-dismiss="offcanvas" aria-label="Close" />
                                                        </Link>
                                                        <Link to='/productlist' data-bs-dismiss="offcanvas" aria-label="Close" >
                                                        <div className='flex pl-[6px]' data-bs-dismiss="offcanvas" aria-label="Close">
                                                            <div className="mt-[0px] justify-center	 lg:mt-[6px] lg:mb-[12px] text-left flex flex-col">
                                                                <h2 className='text-[18px] font-semibold'>{x.title}</h2>
                                                                <p className='text-[15px] min-h-[40px] font-normal' >{x.discription}</p>
                                                            </div>
                                                        </div>
                                                        </Link>
                                                        </div>
                                                        <div class="sm:ml-[auto] lg:ml-[inherit] flex justify-between items-center"><button type="submit" name="add" class="primary px-[11px] py-[4px] md:py-[9px] text-[#000] text-[13px] md:text-[15px] uppercase rounded-[30px] border-2 min-w-[115px] md:min-w-[135px] border-[#ff779f] bg-[#fff]">Add to bag </button><span class="ml-2 text-[14px]  md:text-[18px] font-semibold">$270.00</span></div>
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

                <div className={`hidden bg-[#000] flex justify-between px-[20px] lg:!hidden ${classes1}`}>
                    <svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg"onClick={scrollToTop}  id="Layer" class="w-6 h-6" enable-background="new 0 0 64 64" viewBox="0 0 64 64"><path d="m32 56c1.104 0 2-.896 2-2v-39.899l14.552 15.278c.393.413.92.621 1.448.621.495 0 .992-.183 1.379-.552.8-.762.831-2.028.069-2.828l-16.619-17.448c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.862 1.207l-16.586 17.414c-.762.8-.731 2.066.069 2.828s2.067.731 2.828-.069l14.551-15.342v39.962c0 1.104.896 2 2 2z"></path></svg>

                </div>
            </div>
            )
}
            export default Header

