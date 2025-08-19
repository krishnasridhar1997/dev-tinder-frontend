import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import {Outlet} from "react-router";


const Content = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Content;