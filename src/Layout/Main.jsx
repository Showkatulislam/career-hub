import { Outlet, useLocation } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const Main = () => {
    const location=useLocation();
    const isLoginPage=location.pathname.includes("login") || location.pathname.includes("register")
    console.log(isLoginPage);
    return (
        <div className="max-w-screen-lg mx-auto bg-slate-50">
             {!isLoginPage &&<Header></Header>}
            <Outlet></Outlet>
            {!isLoginPage && <Footer></Footer> }
           
        </div>
    );
};

export default Main;