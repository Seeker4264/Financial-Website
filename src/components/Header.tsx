
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useScroll from "../utils/hooks/useScroll.tsx";
import { Transition } from '@headlessui/react';


function Header() {
    const [dropdown, setDropdown] = useState(false);

    const scrollPosition = useScroll();
    const navigate = useNavigate();


    const handleNav = (id: string) => {
        if(window.location.pathname !== "/") {
            navigate("/");
        }
        else {
            handleScroll(id);
        };
    };

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };
    

    return (
        <header id="header">
            <div className="flex flex-row gap-[30%] sm:gap-[60%] lg:gap-16
            justify-center items-center
            w-full h-16 bg-white">

                <img className="w-36 p-4" src="/icon.jpg" alt="sh-company" />
                
                <ul className="hidden lg:flex lg:flex-row">

                    <NavLink to='/' className={({ isActive, isPending, isTransitioning }) =>
                        [
                            isPending ? "pending" : "",
                            isActive ? "[&>li]:text-olive-silver [&>li]:hover:text-olive-silver" : "",
                            isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }>
                        <li className="px-3 py-3
                        text-[0.7rem] font-bold
                        text-navy
                        duration-200 select-none
                        hover:text-san-marino">
                            HOME
                        </li>
                    </NavLink>
                    
                    <li className="px-3 py-3
                    cursor-pointer
                    text-[0.7rem] font-bold
                    text-navy
                    duration-200 select-none
                    hover:text-san-marino"
                    onClick={() => handleNav("about")}>
                        ABOUT US
                    </li>

                    <NavLink to='/teams' className={({ isActive, isPending, isTransitioning }) =>
                        [
                            isPending ? "pending" : "",
                            isActive ? "[&>li]:text-olive-silver [&>li]:hover:text-olive-silver" : "",
                            isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }>
                        <li className="px-3 py-3
                        text-[0.7rem] font-bold
                        text-navy
                        duration-200 select-none
                        hover:text-san-marino">
                            TEAMS
                        </li>
                    </NavLink>

                    <li className="px-3 py-3
                    cursor-pointer
                    text-[0.7rem] font-bold
                    text-navy
                    duration-200 select-none
                    hover:text-san-marino"
                    onClick={() => handleNav("products")}>
                        PRODUCTS
                    </li>

                    <li className="px-3 py-3
                    cursor-pointer
                    text-[0.7rem] font-bold
                    text-navy
                    duration-200 select-none
                    hover:text-san-marino"
                    onClick={() => handleNav("clients")}>
                        CLIENTS
                    </li>

                    <li className="px-3 py-3
                    cursor-pointer
                    text-[0.7rem] font-bold
                    text-navy
                    duration-200 select-none
                    hover:text-san-marino"
                    onClick={() => handleNav("market")}>
                        MARKET ANALYSIS
                    </li>

                    <li className="px-3 py-3
                    cursor-pointer
                    text-[0.7rem] font-bold
                    text-navy
                    duration-200 select-none
                    hover:text-san-marino"
                    onClick={() => handleNav("")}>
                        MORE
                    </li>

                    <NavLink to='/contact' className={({ isActive, isPending, isTransitioning }) =>
                        [
                            isPending ? "pending" : "",
                            isActive ? "[&>li]:text-olive-silver [&>li]:hover:text-olive-silver" : "",
                            isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }>
                        <li className="px-3 py-3
                        text-[0.7rem] font-bold
                        text-navy
                        duration-200 select-none
                        hover:text-san-marino">
                            CONTACT
                        </li>
                    </NavLink>

                </ul>

                

                <div className="block lg:hidden"
                onClick={() => {setDropdown(true)}}>
                    <svg className="h-8 w-8 text-navy"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                    </svg>
                </div>

                <div className="absolute lg:hidden">
                    <Transition show={dropdown}>
                        <div className={`${dropdown ? 'block' : 'hidden'} fixed
                        top-0 right-0 z-[60]
                        w-full h-full
                        bg-black
                        opacity-80
                        duration-300
                        data-[closed]:opacity-0`} />
                    </Transition>
                    <div className={`${dropdown ? 'right-0' : '-right-2/3'} fixed z-[70] top-0 w-2/3 h-screen ease-in-out duration-300 bg-white`}>
                        <ul className="inline-block
                        w-full">

                            <Link to={"/"}>
                                <li className="flex
                                border-b-2 border-gray-300
                                px-8 py-4 justify-end select-none
                                hover:bg-gray-200 active:bg-gray-400"
                                onClick={() => {setDropdown(false);window.scrollTo(0, 0)}}>
                                    <p className="flex justify-center items-center text-base font-semibold font-dm-sans text-navy">HOME</p>
                                    <svg className="h-8 w-8 ml-4 text-navy"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                    </svg>
                                </li>
                            </Link>

                            <li className="flex
                            border-b-2 border-gray-300
                            px-8 py-4 justify-end select-none
                            hover:bg-gray-200 active:bg-gray-400"
                            onClick={() => {setDropdown(false);handleNav("about")}}>
                                <p className="flex justify-center items-center text-base font-semibold font-dm-sans text-navy">ABOUT US</p>
                                <svg className="h-8 w-8 ml-4 text-navy"
                                width="24" height="24" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <circle cx="12" cy="12" r="9" />
                                    <line x1="12" y1="8" x2="12.01" y2="8" />
                                    <polyline points="11 12 12 12 12 16 13 16" />
                                </svg>
                            </li>

                            <Link to={"/teams"}>
                                <li className="flex
                                border-b-2 border-gray-300
                                px-8 py-4 justify-end select-none
                                hover:bg-gray-200 active:bg-gray-400"
                                onClick={() => {setDropdown(false);window.scrollTo(0, 0)}}>
                                    <p className="flex justify-center items-center text-base font-semibold font-dm-sans text-navy">TEAMS</p>
                                    <svg className="h-8 w-8 ml-4 text-navy"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    strokeWidth="2" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <rect x="4" y="13" rx="2" width="4" height="6" />
                                        <rect x="16" y="13" rx="2" width="4" height="6" />
                                        <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                                        <path d="M18 19a6 3 0 0 1 -6 3" />
                                    </svg>
                                </li>
                            </Link>

                            <li className="flex
                            border-b-2 border-gray-300
                            px-8 py-4 justify-end select-none
                            hover:bg-gray-200 active:bg-gray-400"
                            onClick={() => {setDropdown(false);handleNav("products")}}>
                                <p className="flex justify-center items-center text-base font-semibold font-dm-sans text-navy">PRODUCTS</p>
                                <svg className="h-8 w-8 ml-4 text-navy"
                                width="24" height="24" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                                    <line x1="12" y1="12" x2="20" y2="7.5" />
                                    <line x1="12" y1="12" x2="12" y2="21" />
                                    <line x1="12" y1="12" x2="4" y2="7.5" />
                                    <line x1="16" y1="5.25" x2="8" y2="9.75" />
                                </svg>
                            </li>

                            <li className="flex
                            border-b-2 border-gray-300
                            px-8 py-4 justify-end select-none
                            hover:bg-gray-200 active:bg-gray-400"
                            onClick={() => {setDropdown(false);handleNav("clients")}}>
                                <p className="flex justify-center items-center text-base font-semibold font-dm-sans text-navy">CLIENTS</p>
                                <svg className="h-8 w-8 ml-4 text-navy"
                                width="24" height="24" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                            </li>

                            <Link to={"/contact"}>
                                <li className="flex
                                border-b-2 border-gray-300
                                px-8 py-4 justify-end select-none
                                hover:bg-gray-200 active:bg-gray-400"
                                onClick={() => {setDropdown(false);window.scrollTo(0, 0)}}>
                                    <p className="flex justify-center items-center text-base font-semibold font-dm-sans text-navy">CONTACT</p>
                                    <svg className="h-8 w-8 ml-4 text-navy"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    strokeWidth="2" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                        <path d="M15 7a2 2 0 0 1 2 2" />
                                        <path d="M15 3a6 6 0 0 1 6 6" />
                                    </svg>
                                </li>
                            </Link>

                            <li className="flex
                            px-8 py-4 justify-end
                            select-none
                            hover:bg-gray-200"
                            onClick={() => {setDropdown(false)}}>
                                <p className="flex justify-center items-center text-base font-semibold font-dm-sans text-navy">BACK</p>
                                <svg className="flex
                                h-8 w-8 ml-4
                                text-navy"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"> 
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
                                </svg>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>

            <Transition show={scrollPosition > 100}>
                <button id="BtT" className={`fixed rounded-full z-50 p-3 bottom-[5%] right-[5%] lg:right[2.5%] bg-navy
                transition duration-200 ease-in-out scale-125 lg:scale-100
                hover:bg-olive hover:scale-105 active:bg-olive-silver active:scale-125
                data-[closed]:opacity-0 data-[closed]:scale-50 data-[closed]:translate-x-[5rem]`}
                onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}>
                    <svg className="h-7 w-7 text-white"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="19" x2="12" y2="5" />
                        <polyline points="5 12 12 5 19 12" />
                    </svg>
                </button>
            </Transition>
        </header>
    )
}

export default Header