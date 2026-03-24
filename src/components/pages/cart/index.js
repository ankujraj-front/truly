import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import images from "../../../themes/appImage"
const Cart = () => {
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


    },
    {
        id: 4,
        img: images.sets_1,
        name: 'botty & boobies Bundle',
        price: '15.00',
        quantity: 1


    },



    ]
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


    return (
        <div>
            <div className="container mx-auto px-[12px]">
                <p className="text-[20px] text-[#000] my-[20px]">Shopping Bag ({4} items)</p>
                <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
                <div className="sideleft w-full lg:w-3/4">
                    <div className="overflow-auto w-full cart_table">
                    <table className="w-full">
                        <thead>
                            <th></th>
                            <th>Quantity</th>
                            <th>frequency</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            {cart.map((x) => {
                                total += x.price * x.quantity
                                itemsnew += x.quantity 
                                return (
                                    <tr>
                                        <td>
                                            <div className="sets flex items-center mb-[12px]">
                                                <Link to = '/ProductDetails'>
                                                 <div className="w-[100px] mr-[12px]">
                                                    <img src={x.img} className="max-width-[150px] w-full" />
                                                </div>
                                                </Link>
                                               
                                                <div className="w-[calc(100%-100px)] min-w-[100px]">
                                                <Link to = '/ProductDetails'>
                                                    <h2 className="text-[12px] md:text-[17px] text-[#000] font-medium mb-[12px]">{x.name}</h2>
                                                    </Link>
                                                    <p className="text-[14px] text-[#ff779f] font-normal mb-[12px] cursor-pointer">Remove</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="blank">
                                                <div class="button_box my-1 flex justify-center">
                                                    <button type="submit" className="button_items text-[#fff] text-[28px] w-[30px] bg-[#ff779f] h-[30px] rounded-full leading-[8px]" onClick={() => handleDecrement(x.id)}><span className='relative top-[-2px]'>-</span></button>
                                                    <input type="text" value={x.quantity} className=" data_items w-[30px] h-[30px] text-center font-bold mx-1" />
                                                    <button type="submit" className="button_items text-[24px] text-[#fff] w-[30px] h-[30px] bg-[#ff779f] rounded-full leading-[30px]" onClick={() => handleIncrement(x.id)}><span className='relative top-[-3px]'>+</span></button>
                                                    <h4 className='text-[14px] text-[#000] ml-3 font-bold leading-[29px]'></h4>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="blank">
                                                <p className="text-[14px] text-[#ff779f] font-normal"><Link to = '/Productdetails'>Edit</Link></p>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="blank">
                                                <p>${x.price * x.quantity}.00</p>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                            }


                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="w-full lg:w-1/4">
                    <div className="latest_checkout border border-[#ff779f] px-[15px] py-[15px]">
                        <div className="flex justify-between mb-[3px]">
                            <h5 className="text-[#000] text-[14px] font-normal">Subtotal</h5>
                            <p  className="text-[#000] text-[14px] font-bold">${total}.00</p>
                        </div>
                        <div className="flex justify-between mb-[3px]">
                            <h5 className="text-[#000] text-[14px] font-normal">Shipping</h5>
                            <p className="text-[#000] text-[14px] font-bold">TBD</p>
                        </div>
                        <div className="flex justify-between mb-[3px]">
                            <h5 className="text-[#000] text-[14px] font-normal">Tax</h5>
                            <p className="text-[#000] text-[14px] font-bold">TBD</p>
                        </div>
                        <div className="flex justify-between mb-[3px]">
                            <h5 className="text-[#000] text-[14px] font-normal">Estimated Total:</h5>
                            <p className="text-[#000] text-[14px] font-bold">${total}.00</p>
                        </div>

                   
                    <p className="text-[15px] text-[#ff779f] my-[12px]">FREE SHIPPING for orders $50+ US and $125+ worldwide</p>
                    <p className="text-[14px] text-[#000] my-[12px]">Save 10% with <Link to = '' className="underline">SUBSCRIPTIONS </Link>
                        Taxes and <Link to = '' className="underline">SHIPPING </Link> calculated at checkout</p>
                        <div className='slide_today my-[16px]'>
                                <h4 className='text-[14px] text-[#000]'>Cart Total ({itemsnew} Items): ${total}.00</h4>
                                <p className='text-[14px] text-[#000] mt-2'>{total < 125 ? `You are $${total12}.00 away from FREE shipping` : 'You are elibile for Free Shipping'}</p>
                                <div class="freeShippingProgress__bar bg-[#ffe4ec] h-[6px] w-full rounded-sm relative mt-1">
                                    <div style={{ width: width + '%' }} className='w-[30px] absolute top:[0px] left:[0px] h-[6px] bg-[#ff779f] rounded-sm'></div></div>
                            </div>
                            
                        <button type="submit" class="bg-[#ff779f] w-full h-[55px]  text-[16px] tracking-[.25em] font-semibold text-[#fff] uppercase hover:bg-transparent hover:text-[#ff779f] hover:border border-[#ff779f]" value="Add to Cart">CONTINUE TO Checkout</button>

                        </div>
                </div>
                </div>

            </div>
        </div>
    )
}
export default Cart