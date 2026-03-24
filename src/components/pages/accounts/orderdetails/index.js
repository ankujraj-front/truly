import { Link } from "react-router-dom"
import React from "react"
import SidebarMenu from "../sidebar"

const OrderDetails = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="sideleft w-full md:w-1/4">
                        <SidebarMenu />

                    </div>
                    <div className="w-full px-[10px] md:w-3/4 md:px-[0px]">
                        <div className="flex flex-col">
                            <h3 className="text-[24px] font-bold mb-4 ">Order #Truly695573</h3>
                            <p className="text-[15px] text-[#000]">Placed on July 7, 2022 at 10:24 am</p>
                            <div className="overflow-auto">
                            <table class="userAccount__info overflow-auto border border-[#e8e9eb]">
                                <thead>
                                    <tr class="tr__headingRow">
                                        <th><strong>Product</strong></th>
                                        <th><strong>SKU</strong></th>
                                        <th><strong>Price</strong></th>
                                        <th><strong>Quantity </strong></th>
                                        <th><strong>Total</strong></th>
                                    </tr>
                                </thead>
                                <tbody><tr id="11094475210787" class="truly__thead">
                                    <td data-th="product">
                                        <a href="/products/mini-gold-spoon-satin-pouch" title="">Mini Gold Spoon + Satin Pouch - Pink</a>
                                        <p class="fullfilled__orderDate">Fulfilled <time datetime="2022-07-07T22:32:27Z">July 7, 2022</time><br></br>
                                            <a class="trackShipment" href="javascript:void(0);">Track shipment</a><br></br>
                                            DhlEcs
                                            #420900139361210912400519911895 </p></td>
                                    <td data-th="SKU" data-label="SKU">2568090</td>
                                    <td data-th="price" data-label="Price">
                                        <dl><dt>
                                            <span class="visually-hidden">Regular price</span>
                                        </dt>
                                            <dd>
                                                <span class="money">$5.00</span>
                                            </dd></dl>
                                    </td>

                                    <td data-th="quantity" data-label="Quantity">1</td>
                                    <td data-th="total" data-label="Total"><span class="money">$5.00</span>
                                    </td>
                                </tr><tr id="11094475243555" class="truly__thead">
                                        <td data-th="product">
                                            <a href="/products/nice-melons-boob-butter-mini" title="">Nice Melons Boob Butter Mini</a>
                                            <ul class="order-discount order-discount--list order-discount--title" aria-label="Discount"><li class="order-discount__item">Liquid error: Could not find asset snippets/icon-saletag.liquidReward (-<span class="money">$25.00</span>)
                                            </li></ul><p class="fullfilled__orderDate">Fulfilled <time datetime="2022-07-07T22:32:27Z">July 7, 2022</time><br></br><a class="trackShipment" href="javascript:void(0);">Track shipment</a><br></br>
                                                DhlEcs
                                                #420900139361210912400519911895 </p></td>
                                        <td data-th="SKU" data-label="SKU">2568148-M</td>
                                        <td data-th="price" data-label="Price">
                                            <dl><dt>
                                                <span class="visually-hidden">Regular price</span>
                                            </dt>
                                                <dd>
                                                    <s><span class="money">$25.00</span></s>
                                                </dd>
                                                <dt>
                                                    <span class="visually-hidden">Sale price</span>
                                                </dt>
                                                <dd>
                                                    <span class="order-discount"><span class="money">$0.00</span></span>
                                                </dd></dl>
                                        </td>

                                        <td data-th="quantity" data-label="Quantity">1</td>
                                        <td data-th="total" data-label="Total"><dl>
                                            <dt>
                                                <span class="visually-hidden">Regular price</span>
                                            </dt>
                                            <dd>
                                                <s><span class="money">$25.00</span></s>
                                            </dd>
                                            <dt>
                                                <span class="visually-hidden">Sale price</span>
                                            </dt>
                                            <dd>
                                                <span class="order-discount"><span class="money">$0.00</span></span>
                                            </dd>
                                        </dl></td>
                                    </tr></tbody>
                                <tfoot>
                                    <tr>
                                        <th class="small--hide alignRight" scope="row" colspan="4">Subtotal</th>
                                        <td class="alignRight" data-th="Subtotal" data-label="Subtotal">
                                            <span>
                                                <span class="subtotal__money"><span class="money">$20.00</span></span>
                                            </span>
                                        </td>
                                    </tr><tr>
                                        <th class="small--hide alignRight" scope="row" colspan="4">Shipping (Standard US Shıppıng First Class Mail (4 to 7 Business Days))</th>
                                        <td class="alignRight" data-label="Shipping (Standard US Shıppıng First Class Mail (4 to 7 Business Days))"><span class="money">$4.83</span></td>
                                    </tr><tr>
                                        <th class="small--hide alignRight" scope="row" colspan="4">Tax (CA COUNTY TAX 0.25%)</th>
                                        <td class="alignRight" data-label="Tax (CA COUNTY TAX 0.25%)"><span class="money">$0.05</span></td>
                                    </tr><tr>
                                        <th class="small--hide alignRight" scope="row" colspan="4">Tax (LOS ANGELES COUNTY DISTRICT TAX SP 2.25%)</th>
                                        <td class="alignRight" data-label="Tax (LOS ANGELES COUNTY DISTRICT TAX SP 2.25%)"><span class="money">$0.45</span></td>
                                    </tr><tr>
                                        <th class="small--hide alignRight" scope="row" colspan="4">Tax (LOS ANGELES CO LOCAL TAX SL 1.0%)</th>
                                        <td class="alignRight" data-label="Tax (LOS ANGELES CO LOCAL TAX SL 1.0%)"><span class="money">$0.20</span></td>
                                    </tr><tr>
                                        <th class="small--hide alignRight" scope="row" colspan="4">Tax (CA STATE TAX 6.0%)</th>
                                        <td class="alignRight" data-label="Tax (CA STATE TAX 6.0%)"><span class="money">$1.20</span></td>
                                    </tr><tr>
                                        <th class="small--hide alignRight" scope="row" colspan="4"><strong>Total</strong></th>
                                        <td class="alignRight" data-th="Total" data-label="Total">
                                            <span>
                                                <strong><span class="total__money"><span class="money">$26.73 USD</span></span>
                                                </strong>
                                            </span>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                            </div>
                            <div className="flex w-[50%] pt-[3%] pb-[3%]">
                                <div class="orderAddress__mainColumn w-1/2">
                                    <h4 className="text-[20px] text-[#000] font-bold">Billing Address:</h4>
                                    <p className="mb-[12px]"><strong>Payment Status: </strong>Refunded</p>
                                    <p>shuang Fu <br></br>300 S sante fe, ave apt 639<br></br> los angeles CA 90013<br></br> United States</p>
                                </div>

                                <div class="orderAddress__mainColumn w-1/2">
                                    <h4 className="text-[20px] text-[#000] font-bold">Shipping Address:</h4>
                                    <p className="mb-[12px]"><strong>Payment Status: </strong>Fulfilled</p>
                                    <p>shuang Fu <br></br>300 S sante fe, ave apt 639<br></br> los angeles CA 90013<br></br> United States</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderDetails