
import { Link } from "react-router-dom";


function Contact() {
    const handleSubmit = (e : React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <section id="banner">
                <div className="flex flex-row justify-center items-center
                w-full h-fit">
                    <img className="object-cover object-center w-full h-[24rem]" src="/contactBanner.jpg" alt="contact-banner" />
                    <div className="absolute w-full h-[24rem] opacity-50 bg-gray-600" />
                    <div className="absolute w-[80%] md:w-[60%] ml-auto md:[transform:translateX(-4rem)translateY(-3rem)] lg:[transform:translateX(-8rem)translateY(-3rem)]">
                        <h2 className="text-4xl font-bold font-dm-sans text-white">CONTACT US</h2>
                    </div>
                </div>
            </section>

            <section id="contact-form">
                <div className="flex flex-col justify-center items-center w-full py-24">
                    <h3 className="mb-12 mr-0 lg:mr-[16rem] text-3xl lg:text-4xl font-bold font-dm-sans text-navy">FILL OUT THE FORM</h3>

                    <form className="w-[80%] lg:w-[50%]" onSubmit={handleSubmit}>

                        <div className="flex flex-row items-center rounded-sm border mb-4 border-gray-300">
                            <div className="pl-2">
                                <svg className="h-6 w-6 text-gray-400"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                            </div>
                            <input className="w-full px-3 py-2 outline-none text-lg font-dm-sans" placeholder="Name" type="text" />
                        </div>

                        <div className="flex flex-row items-center rounded-sm border mb-4 border-gray-300">
                            <div className="pl-2">
                                <svg className="h-6 w-6 text-gray-400"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"/>
                                </svg>
                            </div>
                            <input className="w-full px-3 py-2 outline-none text-lg font-dm-sans" placeholder="Phone" type="tel" />
                        </div>

                        <div className="flex flex-row items-center rounded-sm border mb-4 border-gray-300">
                            <div className="pl-2">
                                <svg className="h-6 w-6 text-gray-400"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <input className="w-full px-3 py-2 outline-none text-lg font-dm-sans" placeholder="Email address" type="email" />
                        </div>

                        <div className="flex flex-row items-start rounded-sm border mb-8 border-gray-300">
                            <div className="pl-2 pt-2">
                                <svg className="h-6 w-6 text-gray-400"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                </svg>
                            </div>
                            <textarea className="w-full px-3 py-2 resize-none text-wrap outline-none text-lg font-dm-sans"
                            placeholder="Message" wrap="hard" rows={5} />
                        </div>

                        <div className="flex flex-row items-start border mb-4 border-gray-300">
                            <input className="w-full p-3 rounded-md outline-none text-lg font-semibold font-dm-sans
                            cursor-pointer text-white bg-navy duration-100
                            hover:bg-san-marino"
                            type="submit" value="SUBMIT" />
                        </div>

                    </form>
                </div>
            </section>

            <section id="map-api">
                
                <iframe className="w-full h-[24rem]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8817892229704!2d-74.00721356830293!3d40.720618713080675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f56b217485%3A0x79be2c13c983c9d6!2s124%20Hudson%20St%2C%20New%20York%2C%20NY%2010013%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sve!4v1727030627886!5m2!1ses-419!2sve" width="800" height="600" style={{ border:0 }} allowFullScreen={false} loading="lazy" />
            </section>

            <section id="contact-info">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center lg:items-start gap-10
                w-full px-40 py-20 text-navy font-dm-sans">

                    <div>
                        <h4 className="mb-3 text-2xl lg:text-xl font-semibold">New York</h4>
                        <ul>
                            <li className="flex py-2 text-xs">
                                <svg className="h-4 w-4 text-olive"
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
                                <svg className="h-4 w-4 text-olive"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <p className="pl-2">Email: <a href="mailto:info@shcompany.com">info@shcompany.com</a></p>
                            </li>
                            <li className="flex py-2 text-xs">
                                <svg className="h-4 w-4 text-olive"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <p className="pl-2">Phone: +1 (231) 124-5608</p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center ml-0 lg:ml-8 ">
                        <h4 className="mb-5 lg:mb-3 mr-5 text-3xl lg:text-2xl font-semibold">Follow Us</h4>

                        <div className="flex flex-row justify-start items-center gap-4 lg:gap-2">

                            <Link to={"https://www.facebook.com/"} target="_blank">
                                <div className="rounded-full p-3 lg:p-2 duration-100 bg-[#3B5A96] [&>svg]:hover:text-navy hover:bg-[#a9c4fc]">
                                    <svg className="h-8 w-8 lg:h-6 lg:w-6 text-white"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </div>
                            </Link>

                            <Link to={"https://www.twitter.com/"} target="_blank">
                                <div className="rounded-full p-3 lg:p-2 duration-100 bg-[#59C8FF] [&>svg]:hover:text-navy hover:bg-[#c8e7ff]">
                                    <svg className="h-8 w-8 lg:h-6 lg:w-6 text-white"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                    </svg>
                                </div>
                            </Link>

                            <Link to={"https://www.instagram.com/"} target="_blank">
                                <div className="rounded-full p-3 lg:p-2 duration-100 bg-[#FC0060] [&>svg]:hover:text-navy hover:bg-[#ffc4db]">
                                    <svg className="h-8 w-8 lg:h-6 lg:w-6 text-white"
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
            </section>
        </>
    )
}

export default Contact