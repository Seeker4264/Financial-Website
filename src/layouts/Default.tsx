
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Default() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Default