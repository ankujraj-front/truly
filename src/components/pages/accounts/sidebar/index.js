import { Link } from "react-router-dom"
import ReferModal from "../../../../common/referModal"

const SidebarMenu = () =>{
    return(
        <div>
            <ul className="accounts_menu mr-[16px] mt-[20px]">
                <li><Link to = '/profile'>Profile</Link></li>
                <li><Link to = '/shippingdetails'>Shipping Addresses</Link></li>
                <li><Link to = '/orders'>Orders </Link></li>
                <li><Link to = '/subscription'>Subscriptions </Link></li>
                <li><Link to = '/reward'>Rewards Perks</Link> </li>
                <li data-bs-toggle="modal" data-bs-target="#exampleModal1"><a href='javascript:void(0);'>Refer A Friend</a></li>
                <li><Link to = '/home'>Log Out</Link></li>
            </ul>
            <ReferModal/>
        </div>
    )
}
export default SidebarMenu