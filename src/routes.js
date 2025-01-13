import React from "react"
import App from "./App"
import AboutUsHP from "./componentsHP/AboutUsHP"
import OurServicesHP from "./componentsHP/ServicesHP"
import LoginPage from "./logComponents/loginPage"
import RegisterPage from "./logComponents/registerPage"
import FormPemesanan from "./formComponents/formPesan"
import VerifyFailed from "./verify/verifyFailed"
import VerifyFailedInvalid from "./verify/verifyFailedInvalid"
import VerifyFailedActivated from "./verify/verifyFailedActivated"
import OrderSuccess from "./formComponents/orderSuccess"
import ResetPassEmailPage from "./logComponents/resetPassEmailPage"
import ResetPassPage from "./logComponents/resetPassPage"
import ProfilePage from "./components/ProfilePage"
import VerifySuccess from "./verify/verifySuccess"

const Routess = [
    {
        path:"/",
        element: <App/>,
    },
    {
        path:"/aboutus",
        element: <AboutUsHP/>,
    },
    {
        path:"/services",
        element: <OurServicesHP/>,
    },
    {
        path:"/login",
        element: <LoginPage/>,
    },
    {
        path:"/register",
        element: <RegisterPage/>,
    },
    {
        path:"/verify/error",
        element: <VerifyFailed/>,
    },
    {
        path:"/verify/success",
        element: <VerifySuccess/>,
    },
    {
        path:"/verify/error-invalid",
        element: <VerifyFailedInvalid/>,
    },
    {
        path:"/verify/error-activated",
        element: <VerifyFailedActivated/>,
    },
    {
        path:"/form-pemesanan",
        element: <FormPemesanan/>,
    },
    {
        path:"/order-success",
        element: <OrderSuccess/>,
    },
    {
        path:"/reset-password-email",
        element: <ResetPassEmailPage/>
    },{
        path:"/reset-password/:email/:reset_password_token",
        element:<ResetPassPage/>
    },
    {
        path:"/me",
        element:<ProfilePage/>
    }
]

export default Routess