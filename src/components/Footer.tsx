
import { Link } from "react-router-dom";


function Footer() {
    const handleSubmit = (e : React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <footer id="footer">
            <div className="flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 pt-20 pb-10 font-dm-sans text-white bg-navy">
                <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-12">

                    <div>
                        <h4 className="mb-3 text-3xl lg:text-xl font-semibold">Contact Information</h4>
                        <ul>
                            <li className="flex py-2 text-xs">
                                <svg className="h-4 w-4 text-white"
                                width="24" height="24" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <circle cx="12" cy="11" r="3" />
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                </svg>
                                <p className="pl-2">124 Hudson St, New York, NY 10013</p>
                            </li>
                            <li className="flex py-2 text-xs">
                                <svg className="h-4 w-4 text-white"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <p className="pl-2">Email: <a href="mailto:info@shcompany.com">info@shcompany.com</a></p>
                            </li>
                            <li className="flex py-2 text-xs">
                                <svg className="h-4 w-4 text-white"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <p className="pl-2">Phone: +1 (231) 124-5608</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-3xl lg:text-xl font-semibold">Navigation</h4>
                        <ul className="pl-1">
                            <Link to={"/"}>
                                <li className="flex py-2 lg:py-1 mb-1 text-lg lg:text-xs duration-75 hover:text-gray-300"
                                onClick={() => window.scrollTo(0, 0)}>Home</li>
                            </Link>
                            <Link to={"/teams"}>
                                <li className="flex py-2 lg:py-1 my-1 text-lg lg:text-xs duration-75 hover:text-gray-300"
                                onClick={() => window.scrollTo(0, 0)}>Teams</li>
                            </Link>
                            <Link to={"/contact"}>
                                <li className="flex py-2 lg:py-1 mt-1 text-lg lg:text-xs duration-75 hover:text-gray-300"
                                onClick={() => window.scrollTo(0, 0)}>Contact</li>
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-3xl lg:text-xl font-semibold">Products</h4>
                        <ul className="pl-1">
                            <li className="flex mt-2 my-3 text-base lg:text-xs duration-75 hover:text-gray-300">Customer Support</li>
                            <li className="flex my-3 text-base lg:text-xs duration-75 hover:text-gray-300">Bulk Sms service</li>
                            <li className="flex my-3 text-base lg:text-xs duration-75 hover:text-gray-300">Business boosting</li>
                            <li className="flex my-3 text-base lg:text-xs duration-75 hover:text-gray-300">Money exchange</li>
                            <li className="flex my-3 text-base lg:text-xs duration-75 hover:text-gray-300">Consulting Services</li>
                            <li className="flex my-3 text-base lg:text-xs duration-75 hover:text-gray-300">Strategic Planning</li>
                            <li className="flex my-3 text-base lg:text-xs duration-75 hover:text-gray-300">International</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-3xl lg:text-xl font-semibold">Newsletter</h4>
                        <p className="flex pl-1 mt-2 my-3 text-lg lg:text-xs">Enter your email and subscribe to our newsletter</p>

                        <form className="flex mt-4 mb-8" onSubmit={handleSubmit}>
                            <div className="p-1 bg-white">
                                <svg className="h-6 w-6 text-olive"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
                                </svg>
                            </div>
                            <input className="w-2/3 lg:w-36 px-1 py-2 text-xs text-black outline-none" placeholder="Email Address" id="news-reg" type="email" />
                            <button className="px-3 py-1 text-white bg-olive duration-75 hover:bg-olive-silver" type="submit">
                                SUBSCRIBE
                            </button>
                        </form>

                        <div className="flex flex-row justify-start items-center gap-2">

                            <Link to={"https://www.facebook.com/"} target="_blank">
                                <div className="rounded-full p-2 duration-100 bg-[#3B5A96] [&>svg]:hover:text-navy hover:bg-[#a9c4fc]">
                                    <svg className="h-6 w-6 text-white"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </div>
                            </Link>

                            <Link to={"https://www.twitter.com/"} target="_blank">
                                <div className="rounded-full p-2 duration-100 bg-[#59C8FF] [&>svg]:hover:text-navy hover:bg-[#c8e7ff]">
                                    <svg className="h-6 w-6 text-white"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                    </svg>
                                </div>
                            </Link>

                            <Link to={"https://www.instagram.com/"} target="_blank">
                                <div className="rounded-full p-2 duration-100 bg-[#FC0060] [&>svg]:hover:text-navy hover:bg-[#ffc4db]">
                                    <svg className="h-6 w-6 text-white"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </div>
                            </Link>

                        </div>

                    </div>

                </div>
                <p className="mt-20 text-xs">2024 &copy; S.H. Company. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer