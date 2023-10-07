import { Outlet } from "react-router-dom";
import Navbar from "../NavbarManagement/Navbar";
import Footer from "../NavbarManagement/Footer";

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;