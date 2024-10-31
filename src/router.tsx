
import { createBrowserRouter } from "react-router-dom";
import Default from "./layouts/Default";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Teams from "./pages/Teams";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/teams",
                element: <Teams />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/*",
                element: <NotFound />
            },
        ]
    }
]);