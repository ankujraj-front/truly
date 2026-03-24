import React from "react"
import { Link } from "react-router-dom"



const SidebarInner = () =>{
    return(
    <div className="container mx-auto">
        <div className="text-center">
        <div>
            <ul className="accounts_menu mr-[16px] mt-[20px]">
                <li><Link to = '/subscription'>Home</Link></li>
                <li><Link to = '/subscriptiondetails'>Subscriptions</Link></li>
                <li><Link to = '/upcoming'>Upcoming orders </Link></li>
                <li><Link to = '/purchasehistory'>Purchase history </Link></li>
                <li><Link to = '/shippingaddress'>Shipping addresses</Link> </li>
                <li><Link to = '/paymentmethods'>Payment methods</Link></li>
            </ul>
        </div>
         </div>
     </div>
    )
}
export default SidebarInner