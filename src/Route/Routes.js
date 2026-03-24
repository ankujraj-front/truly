import React, { useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/home";
import ProductDetails from "../components/pages/productdetails";
import ProductList from "../components/pages/productlist";
import Accounts from "../components/pages/accounts";
import MainLayout from "../Layout";
import Orders from "../components/pages/accounts/order";
import OrderDetails from "../components/pages/accounts/orderdetails";
import Reward from "../components/pages/accounts/reward";
import ShippingDetails from "../components/pages/accounts/shippingDetails";
import Profile from "../components/pages/accounts/profile";
import EditProfile from "../components/pages/accounts/editprofile";
import Subscriptions from "../components/pages/accounts/subscription";
import SubscriptionsDetails from "../components/pages/accounts/subscription/subscriptionDetails";
import PurchaseHistory from "../components/pages/accounts/subscription/purchasehistory";
import ShippingAddresses from "../components/pages/accounts/subscription/shippingAddress";
import AddShippingAddress from "../components/pages/accounts/subscription/addshippingAddress";
import PaymentMethods from "../components/pages/accounts/subscription/paymentMethods";
import AddPaymentMethods from "../components/pages/accounts/subscription/paymentMethods/AddPaymentMethod";
import EditBillingMethods from "../components/pages/accounts/subscription/paymentMethods/editbillingaddress";
import EditShippingAddress from "../components/pages/accounts/subscription/shippingAddress/editshippingAddress";
import Upcoming from "../components/pages/accounts/subscription/upcomingOrders";
import AddSubscription from "../components/pages/accounts/subscription/subscriptionDetails/addsubscription";
import SubscriptionsProductDetails from "../components/pages/accounts/subscription/subscriptionDetails/subscribeproductDetails";
import ViewSubscriptionDetils from "../components/pages/accounts/subscription/subscriptionDetails/viewsubscriptionDetails";
import Cart from "../components/pages/cart";









const RoutesNew = () => {


    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to={'home'} />} />
                    <Route path="/" element={<MainLayout />}>
                      <Route path="/home" element={<Home />} />
                      <Route path="/productlist" element={<ProductList />} />
                      <Route path="/productdetails" element={<ProductDetails />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/accounts" element={<Accounts />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/ordersdetails" element={<OrderDetails />} />
                      <Route path="/reward" element={<Reward />} />
                      <Route path="/shippingdetails" element={<ShippingDetails />} />
                      <Route path="/profile" element={<Profile />} />
                      {/* <Route path="/profile" element={<Profile />} /> */}
                      <Route path="/editprofile" element={<EditProfile />} />
                      <Route path="/subscription" element={<Subscriptions />} />
                      <Route path="/subscriptiondetails" element={<SubscriptionsDetails />} />
                      <Route path="/purchasehistory" element={<PurchaseHistory />} />
                      <Route path="/shippingaddress" element={<ShippingAddresses />} />
                      <Route path="/addshippingaddress" element={<AddShippingAddress />} />
                      <Route path="/paymentmethods" element={<PaymentMethods />} />
                      <Route path="/addpaymentmethods" element={<AddPaymentMethods />} />
                      <Route path="/editbillingmethods" element={<EditBillingMethods />} />
                      <Route path="/editbillingaddress" element={<EditShippingAddress />} />
                      <Route path="/upcoming" element={<Upcoming />} />
                      <Route path="/addsubscription" element={<AddSubscription />} />
                      <Route path="/subscriptionproductdetials" element={<SubscriptionsProductDetails />} />
                      <Route path="/viewsubscriptionproductdetials" element={<ViewSubscriptionDetils />} />
                    </Route>
                </Routes>
            </Router>

        </div>
    )

}
export default RoutesNew;


