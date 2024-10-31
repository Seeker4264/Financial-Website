
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Transition } from '@headlessui/react';
import useScroll from "../utils/hooks/useScroll";


function Home() {
    const [slide1, setSlide1] = useState(true);
    const [slide2, setSlide2] = useState(false);
    const [slide3, setSlide3] = useState(false);

    const scrollPosition = useScroll();
    const navigate = useNavigate();

    const employeeData = [
        {
            name: "Marco Sandoval",
            position: "Managing",
            image: "/Marco.jpg"
        },
        {
            name: "Herald Smith",
            position: "Managing",
            image: "/Herald.jpg"
        },
        {
            name: "Gerardo Marquéz",
            position: "Managing",
            image: "/Gerard.jpg"
        },
        {
            name: "Martin Cordero",
            position: "Managing",
            image: "/Martin-Cordero.jpg"
        },
        {
            name: "Luis González",
            position: "Public relations",
            image: "/Luis.jpg"
        },
        {
            name: "José Martino",
            position: "Project Manager",
            image: "/Jose-Martino.jpg"
        },
        {
            name: "Martin Gutiérrez",
            position: "Public Relations",
            image: "/Martin-Gutierrez.jpg"
        },
        {
            name: "Andrés Salomón",
            position: "Assistant Manager",
            image: "/Andres.jpg"
        },
        {
            name: "Pedro Marquéz",
            position: "Public Relations",
            image: "/Pedro-Marquez.jpg"
        },
    ];

    const toSlide1 = () => {
        setSlide2(false);
        setSlide3(false);
        
        const timer = setTimeout(() => {
            setSlide1(true);
        }, 700);
        return () => clearTimeout(timer);
    };

    const toSlide2 = () => {
        setSlide1(false);
        setSlide3(false);
        
        const timer = setTimeout(() => {
            setSlide2(true);
        }, 700);
        return () => clearTimeout(timer);
    };

    const toSlide3 = () => {
        setSlide1(false);
        setSlide2(false);
        
        const timer = setTimeout(() => {
            setSlide3(true);
        }, 700);
        return () => clearTimeout(timer);
    };


    return (
        <>
            <section id="start">
                <div className="flex flex-row justify-center items-center
                w-full h-fit">
                    <video className="object-cover object-center w-full h-[40rem] lg:h-[34rem]" src="/homeBanner.mp4"
                    loop={true} autoPlay={true} muted />
                    <div className="absolute w-full h-[40rem] lg:h-[34rem] opacity-50 bg-black" />
                    <div className="absolute w-[80%] md:w-[60%] ml-auto md:[transform:translateX(-4rem)translateY(-3rem)] lg:[transform:translateX(-8rem)translateY(-2.5rem)]">
                        <h2 className="text-[2.5rem] [line-height:2.25rem] text-center font-bold font-dm-sans text-white">
                        Customized fixed income products for emerging markets and global investors
                        </h2>
                    </div>
                </div>
            </section>


            <section id="about">
                <div className="flex flex-row justify-center items-center gap-16
                px-[2rem] md:px-[4rem] py-[5rem] duration-200">
                    <img className={`hidden md:block ${scrollPosition > 250 ? 'opacity-100 [transform:translateX(0rem)]' : 'opacity-0 [transform:translateX(-4rem)]'} rounded-md object-cover object-center w-[18rem] h-[24rem] lg:w-[16rem] lg:h-[20rem] duration-500`} src="/homeAbout.jpg" alt="home-about" />
                    <div className={`${scrollPosition > 250 ? 'opacity-100 [transform:translateX(0rem)]' : 'opacity-0 [transform:translateX(4rem)]'} w-[80%] md:w-[40%] duration-500`}>
                        <h2 className="mb-4 text-2xl font-bold font-dm-sans text-navy">ABOUT S.H. COMPANY</h2>
                        <p className="my-3 text-base font-light font-dm-sans leading-6 text-navy">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sequi cupiditate necessitatibus hic maxime, ad dicta blanditiis error incidunt a, doloremque vero iure vel ab deserunt eligendi alias voluptate deleniti.
                        </p>
                        <p className="my-3 text-xs font-normal font-dm-sans text-navy">
                        Nunc placerat dui mi, eleifend sagittis sem commodo sed. Curabitur interdum viverra libero sit amet varius. Cras metus elit, blandit et laoreet sed, rutrum eget magna. Cras consequat pulvinar leo a efficitur. Vivamus eleifend sodales enim ac varius. Suspendisse fringilla condimentum diam eget pretium. Donec lectus urna, eleifend vitae felis et, cursus dignissim diam.
                        </p>
                        <p className="my-3 text-xs font-normal font-dm-sans text-navy">
                        Vivamus a enim quis velit porttitor imperdiet eget sed diam. Proin vitae ipsum elit. Suspendisse id ex pharetra, interdum ligula eu, elementum lorem. Maecenas sollicitudin volutpat pellentesque. Nullam vitae viverra magna. Sed faucibus ac lectus ac commodo. Duis eu odio lobortis, sodales dolor sed, egestas ipsum. Curabitur justo risus, sodales vel purus vitae, malesuada tempus velit.
                        </p>
                        <p className="mt-3 mb-5 text-xs font-normal font-dm-sans text-navy">
                        Sed leo ante, vestibulum sed lectus vel, commodo dignissim metus. Morbi imperdiet nec diam et fringilla. Quisque convallis nibh ac nisl lobortis commodo. Mauris.
                        </p>

                        <button className="px-6 py-3 rounded-sm text-xs font-semibold font-dm-sans text-white bg-navy duration-150 hover:bg-astronaut active:bg-san-marino">
                            READ MORE
                        </button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center bg-navy
                p-10 md:p-20">
                    <h2 className="text-2xl font-bold font-dm-sans text-white">OUR TEAM</h2>
                    <p className="w-[80%] my-5 text-base text-center font-light font-dm-sans text-white">
                    Suspendisse potenti. Suspendisse mollis, mi in tempor sodales, turpis enim congue dolor, tincidunt posuere ligula nisi consectetur leo. Aliquam vitae nibh commodo, tempus lacus in, tincidunt arcu. Praesent.
                    </p>

                    <div className="h-[48rem] md:h-[18rem] flex flex-row justify-center items-center my-4">
                        
                        {/* Slide 1 */}
                        <Transition show={slide1}>
                            <div className={`flex flex-col md:flex-row gap-6 transition duration-[600ms] ease-out
                                data-[closed]:opacity-0 data-[closed]:scale-75 data-[closed]:translate-y-[8rem]`}>
                                    
                                <div className="w-[12rem] lg:w-[16rem] h-fit bg-white duration-1000
                                [transform-style:preserve-3d] hover:[transform:perspective(500px)rotateY(180deg)]">

                                    <div className="absolute [transform:perspective(500px)rotateY(180deg)translateZ(50px)scale(0.9)]">
                                        <div className="flex flex-col justify-center items-center p-3">
                                            <p className="text-xs lg:text-sm font-semibold text-center text-navy">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum soluta at reprehenderit impedit praesentium dignissimos, corporis ipsam odio suscipit consequatur numquam nam hic perferendis provident illo quod corrupti ipsa assumenda!
                                            </p>
                                            <button className="rounded-md px-3 py-2 mt-6 border-2 border-navy text-base font-bold duration-150
                                            hover:bg-navy hover:text-white"
                                            onClick={() => {window.scrollTo(0, 0);navigate("/teams")}}>
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                    <div className="[transform-style:preserve-3d] [transform:perspective(500px)translateZ(50px)scale(0.85)]">
                                        <img className="object-cover object-center w-[12rem] h-[9rem] lg:w-[16rem] lg:h-[12rem]" src={employeeData[0].image} alt={`${employeeData[0].name}`} />

                                        <div className="px-6 pt-3 pb-6 [transform:scale(1.15)]">
                                            <h4 className="text-base font-semibold font-dm-sans text-navy">
                                                {employeeData[0].name}
                                            </h4>
                                            <p className="text-xs font-normal font-dm-sans text-navy">
                                                {employeeData[0].position}
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="w-[12rem] lg:w-[16rem] h-fit bg-white duration-1000
                                [transform-style:preserve-3d] hover:[transform:perspective(500px)rotateY(180deg)]">

                                    <div className="absolute [transform:perspective(500px)rotateY(180deg)translateZ(50px)scale(0.9)]">
                                        <div className="flex flex-col justify-center items-center p-3">
                                            <p className="text-xs lg:text-sm font-semibold text-center text-navy">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse officia aliquid inventore ea, consectetur unde laborum culpa reiciendis voluptatem assumenda, expedita, sed modi dolorem dolores vitae mollitia fugiat debitis delectus.
                                            </p>
                                            <button className="rounded-md px-3 py-2 mt-6 border-2 border-navy text-base font-bold duration-150
                                            hover:bg-navy hover:text-white"
                                            onClick={() => {window.scrollTo(0, 0);navigate("/teams")}}>
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                    <div className="[transform-style:preserve-3d] [transform:perspective(500px)translateZ(50px)scale(0.85)]">
                                        <img className="object-cover object-center w-[12rem] h-[9rem] lg:w-[16rem] lg:h-[12rem]" src={employeeData[1].image} alt={`${employeeData[1].name}`} />

                                        <div className="px-6 pt-3 pb-6 [transform:scale(1.15)]">
                                            <h4 className="text-base font-semibold font-dm-sans text-navy">
                                                {employeeData[1].name}
                                            </h4>
                                            <p className="text-xs font-normal font-dm-sans text-navy">
                                                {employeeData[1].position}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="w-[12rem] lg:w-[16rem] h-fit bg-white duration-1000
                                [transform-style:preserve-3d] hover:[transform:perspective(500px)rotateY(180deg)]">

                                    <div className="absolute [transform:perspective(500px)rotateY(180deg)translateZ(50px)scale(0.9)]">
                                        <div className="flex flex-col justify-center items-center p-3">
                                            <p className="text-xs lg:text-sm font-semibold text-center text-navy">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem esse aperiam labore illum cumque alias maxime a culpa, nam officiis, quisquam, perspiciatis obcaecati! Quibusdam corrupti eligendi consequatur a nostrum.
                                            </p>
                                            <button className="rounded-md px-3 py-2 mt-6 border-2 border-navy text-base font-bold duration-150
                                            hover:bg-navy hover:text-white"
                                            onClick={() => {window.scrollTo(0, 0);navigate("/teams")}}>
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                    <div className="[transform-style:preserve-3d] [transform:perspective(500px)translateZ(50px)scale(0.85)]">
                                        <img className="object-cover object-center w-[12rem] h-[9rem] lg:w-[16rem] lg:h-[12rem]" src={employeeData[2].image} alt={`${employeeData[2].name}`} />

                                        <div className="px-6 pt-3 pb-6 [transform:scale(1.15)]">
                                            <h4 className="text-base font-semibold font-dm-sans text-navy">
                                                {employeeData[2].name}
                                            </h4>
                                            <p className="text-xs font-normal font-dm-sans text-navy">
                                                {employeeData[2].position}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Transition>
                        
                        {/* Slide 2 */}
                        <Transition show={slide2}>
                            <div className={`flex flex-col md:flex-row gap-6 transition duration-[600ms] ease-out
                                data-[closed]:opacity-0 data-[closed]:scale-75 data-[closed]:translate-y-[8rem]`}>

                                <div className="w-[12rem] lg:w-[16rem] h-fit bg-white duration-1000
                                [transform-style:preserve-3d] hover:[transform:perspective(500px)rotateY(180deg)]">

                                    <div className="absolute [transform:perspective(500px)rotateY(180deg)translateZ(50px)scale(0.9)]">
                                        <div className="flex flex-col justify-center items-center p-3">
                                            <p className="text-xs lg:text-sm font-semibold text-center text-navy">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab quidem debitis odio eligendi neque. Tempore cum, maiores cumque accusamus itaque totam neque unde explicabo, eius voluptatem velit sapiente autem.
                                            </p>
                                            <button className="rounded-md px-3 py-2 mt-6 border-2 border-navy text-base font-bold duration-150
                                            hover:bg-navy hover:text-white"
                                            onClick={() => {window.scrollTo(0, 0);navigate("/teams")}}>
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                    <div className="[transform-style:preserve-3d] [transform:perspective(500px)translateZ(50px)scale(0.85)]">
                                        <img className="object-cover object-center w-[12rem] h-[9rem] lg:w-[16rem] lg:h-[12rem]" src={employeeData[3].image} alt={`${employeeData[3].name}`} />

                                        <div className="px-6 pt-3 pb-6 [transform:scale(1.15)]">
                                            <h4 className="text-base font-semibold font-dm-sans text-navy">
                                                {employeeData[3].name}
                                            </h4>
                                            <p className="text-xs font-normal font-dm-sans text-navy">
                                                {employeeData[3].position}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="w-[12rem] lg:w-[16rem] h-fit bg-white duration-1000
                                [transform-style:preserve-3d] hover:[transform:perspective(500px)rotateY(180deg)]">

                                    <div className="absolute [transform:perspective(500px)rotateY(180deg)translateZ(50px)scale(0.9)]">
                                        <div className="flex flex-col justify-center items-center p-3">
                                            <p className="text-xs lg:text-sm font-semibold text-center text-navy">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, delectus blanditiis at soluta, corrupti et ad ratione a veniam optio alias vitae minima cupiditate cumque, repellendus libero perspiciatis ipsum. Reiciendis.
                                            </p>
                                            <button className="rounded-md px-3 py-2 mt-6 border-2 border-navy text-base font-bold duration-150
                                            hover:bg-navy hover:text-white"
                                            onClick={() => {window.scrollTo(0, 0);navigate("/teams")}}>
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                    <div className="[transform-style:preserve-3d] [transform:perspective(500px)translateZ(50px)scale(0.85)]">
                                        <img className="object-cover object-center w-[12rem] h-[9rem] lg:w-[16rem] lg:h-[12rem]" src={employeeData[4].image} alt={`${employeeData[4].name}`} />

                                        <div className="px-6 pt-3 pb-6 [transform:scale(1.15)]">
                                            <h4 className="text-base font-semibold font-dm-sans text-navy">
                                                {employeeData[4].name}
                                            </h4>
                                            <p className="text-xs font-normal font-dm-sans text-navy">
                                                {employeeData[4].position}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="w-[12rem] lg:w-[16rem] h-fit bg-white duration-1000
                                [transform-style:preserve-3d] hover:[transform:perspective(500px)rotateY(180deg)]">

                                    <div className="absolute [transform:perspective(500px)rotateY(180deg)translateZ(50px)scale(0.9)]">
                                        <div className="flex flex-col justify-center items-center p-3">
                                            <p className="text-xs lg:text-sm font-semibold text-center text-navy">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum quae soluta dolorem libero odio tempore, adipisci amet dicta officiis distinctio accusantium qui vero. Blanditiis accusantium aperiam asperiores omnis cum.
                                            </p>
                                            <button className="rounded-md px-3 py-2 mt-6 border-2 border-navy text-base font-bold duration-150
                                            hover:bg-navy hover:text-white"
                                            onClick={() => {window.scrollTo(0, 0);navigate("/teams")}}>
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                    <div className="[transform-style:preserve-3d] [transform:perspective(500px)translateZ(50px)scale(0.85)]">
                                        <img className="object-cover object-center w-[12rem] h-[9rem] lg:w-[16rem] lg:h-[12rem]" src={employeeData[5].image} alt={`${employeeData[5].name}`} />

                                        <div className="px-6 pt-3 pb-6 [transform:scale(1.15)]">
                                            <h4 className="text-base font-semibold font-dm-sans text-navy">
                                                {employeeData[5].name}
                                            </h4>
                                            <p className="text-xs font-normal font-dm-sans text-navy">
                                                {employeeData[5].position}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Transition>
                        
                        {/* Slide 3 */}
                        <Transition show={slide3}>
                            <div className={`flex flex-col md:flex-row gap-6 transition duration-[600ms] ease-out
                                data-[closed]:opacity-0 data-[closed]:scale-75 data-[closed]:translate-y-[8rem]`}>

                                <div className="w-[12rem] lg:w-[16rem] h-fit bg-white duration-1000
                                [transform-style:preserve-3d] hover:[transform:perspective(500px)rotateY(180deg)]">

                                    <div className="absolute [transform:perspective(500px)rotateY(180deg)translateZ(50px)scale(0.9)]">
                                        <div className="flex flex-col justify-center items-center p-3">
                                            <p className="text-xs lg:text-sm font-semibold text-center text-navy">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum possimus vitae fugiat quisquam! Deleniti corrupti beatae explicabo non unde ipsum voluptas accusamus soluta. Repellat, doloremque! Sequi eveniet voluptatum non corporis.
                                            </p>
                                            <button className="rounded-md px-3 py-2 mt-6 border-2 border-navy text-base font-bold duration-150
                                            hover:bg-navy hover:text-white"
                                            onClick={() => {window.scrollTo(0, 0);navigate("/teams")}}>
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                    <div className="[transform-style:preserve-3d] [transform:perspective(500px)translateZ(50px)scale(0.85)]">
                                        <img className="object-cover object-center w-[12rem] h-[9rem] lg:w-[16rem] lg:h-[12rem]" src={employeeData[6].image} alt={`${employeeData[6].name}`} />

                                        <div className="px-6 pt-3 pb-6 [transform:scale(1.15)]">
                                            <h4 className="text-base font-semibold font-dm-sans text-navy">
                                                {employeeData[6].name}
                                            </h4>
                                            <p className="text-xs font-normal font-dm-sans text-navy">
                                                {employeeData[6].position}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="w-[12rem] lg:w-[16rem] h-fit bg-white duration-1000
                                [transform-style:preserve-3d] hover:[transform:perspective(500px)rotateY(180deg)]">

                                    <div className="absolute [transform:perspective(500px)rotateY(180deg)translateZ(50px)scale(0.9)]">
                                        <div className="flex flex-col justify-center items-center p-3">
                                            <p className="text-xs lg:text-sm font-semibold text-center text-navy">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis magni cumque doloremque tempore delectus voluptatem molestias expedita dolore, aperiam deserunt laudantium esse tempora blanditiis repellendus cum, consequatur odio ab earum.
                                            </p>
                                            <button className="rounded-md px-3 py-2 mt-6 border-2 border-navy text-base font-bold duration-150
                                            hover:bg-navy hover:text-white"
                                            onClick={() => {window.scrollTo(0, 0);navigate("/teams")}}>
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                    <div className="[transform-style:preserve-3d] [transform:perspective(500px)translateZ(50px)scale(0.85)]">
                                        <img className="object-cover object-center w-[12rem] h-[9rem] lg:w-[16rem] lg:h-[12rem]" src={employeeData[7].image} alt={`${employeeData[7].name}`} />

                                        <div className="px-6 pt-3 pb-6 [transform:scale(1.15)]">
                                            <h4 className="text-base font-semibold font-dm-sans text-navy">
                                                {employeeData[7].name}
                                            </h4>
                                            <p className="text-xs font-normal font-dm-sans text-navy">
                                                {employeeData[7].position}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="w-[12rem] lg:w-[16rem] h-fit bg-white duration-1000
                                [transform-style:preserve-3d] hover:[transform:perspective(500px)rotateY(180deg)]">

                                    <div className="absolute [transform:perspective(500px)rotateY(180deg)translateZ(50px)scale(0.9)]">
                                        <div className="flex flex-col justify-center items-center p-3">
                                            <p className="text-xs lg:text-sm font-semibold text-center text-navy">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perferendis nesciunt, vero maxime iusto ullam asperiores nobis, consequuntur modi dolor dolorum dolorem voluptate odit nostrum corporis quas at officiis tempore.
                                            </p>
                                            <button className="rounded-md px-3 py-2 mt-6 border-2 border-navy text-base font-bold duration-150
                                            hover:bg-navy hover:text-white"
                                            onClick={() => {window.scrollTo(0, 0);navigate("/teams")}}>
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                    <div className="[transform-style:preserve-3d] [transform:perspective(500px)translateZ(50px)scale(0.85)]">
                                        <img className="object-cover object-center w-[12rem] h-[9rem] lg:w-[16rem] lg:h-[12rem]" src={employeeData[8].image} alt={`${employeeData[8].name}`} />

                                        <div className="px-6 pt-3 pb-6 [transform:scale(1.15)]">
                                            <h4 className="text-base font-semibold font-dm-sans text-navy">
                                                {employeeData[8].name}
                                            </h4>
                                            <p className="text-xs font-normal font-dm-sans text-navy">
                                                {employeeData[8].position}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Transition>

                    </div>

                    
                    <div>
                        <button disabled={slide1} onClick={() => toSlide1()}>
                            <svg className={`${slide1 ? 'text-olive-silver' : 'text-white'} h-12 w-16 mx-2`}
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>

                        <button disabled={slide2} onClick={() => toSlide2()}>
                            <svg className={`${slide2 ? 'text-olive-silver' : 'text-white'} h-12 w-16 mx-2`}
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>

                        <button disabled={slide3} onClick={() => toSlide3()}>
                            <svg className={`${slide3 ? 'text-olive-silver' : 'text-white'} h-12 w-16 mx-2`}
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>
                    </div>
                    

                    <Link to={"/teams"}
                    onClick={() => {window.scrollTo(0, 0)}}>
                        <h4 className="mt-5 text-xl font-semibold font-dm-sans text-white duration-75 hover:text-olive-silver">
                            MORE INFORMATION
                        </h4>
                    </Link>
                </div>
            </section>


            <section id="products">
                <div className={`${scrollPosition > 1650 ? 'opacity-100 [transform:translateY(0rem)]' : 'opacity-0 [transform:translateY(4rem)]'} flex flex-col justify-center items-center
                px-[2rem] md:px-[4rem] py-[5rem] duration-500`}>
                    <h2 className="mb-12 text-3xl font-bold font-dm-sans text-navy">PRODUCTS</h2>

                    <div className="flex flex-row justify-center items-center flex-wrap gap-x-10 gap-y-6 w-full">

                        <div className="flex flex-row w-[34rem] h-fit sm:h-[20rem] p-8 text-navy font-dm-sans bg-gray-100 duration-100 hover:bg-navy hover:text-white hover:scale-105">
                            <div className="pr-2 py-1">
                                <svg className="h-10 w-10 text-olive"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <rect x="4" y="13" rx="2" width="4" height="6" />
                                    <rect x="16" y="13" rx="2" width="4" height="6" />
                                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                                    <path d="M18 19a6 3 0 0 1 -6 3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="pb-2 text-lg font-bold">
                                Aliquam rhoncus feugiat eleifend. Mauris
                                </h3>
                                <p className="text-[0.8rem]">
                                Aliquam venenatis et ex rhoncus bibendum. Donec ultrices quis metus ac auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac turpis quis velit viverra iaculis. Fusce porttitor nisi a magna tristique malesuada. Donec ante odio, laoreet id auctor a, vestibulum sed est. Cras bibendum ligula ante, in placerat mauris malesuada ac. Etiam ligula ante, vehicula id lacinia at, interdum non nisi. Morbi sed sapien viverra, pulvinar dolor vel, mollis ex. Sed tincidunt ante eget nunc sagittis placerat. Aenean tempor dui sit amet pharetra consequat. Proin interdum nulla ut varius euismod. Morbi laoreet velit et ornare volutpat.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row w-[34rem] h-fit md:h-[20rem] p-8 text-navy font-dm-sans bg-gray-100 duration-100 hover:bg-navy hover:text-white hover:scale-105">
                            <div className="pr-2 py-1">
                                <svg className="h-10 w-10 text-olive"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <rect x="4" y="13" rx="2" width="4" height="6" />
                                    <rect x="16" y="13" rx="2" width="4" height="6" />
                                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                                    <path d="M18 19a6 3 0 0 1 -6 3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="pb-2 text-lg font-bold">
                                Etiam viverra lorem mauris, eu
                                </h3>
                                <p className="text-[0.8rem]">
                                Quisque sollicitudin, dolor volutpat tempus venenatis, sapien lacus auctor augue, quis elementum eros enim at ex. Maecenas lobortis turpis erat, venenatis dignissim lectus semper interdum. Cras eleifend viverra ultrices. Proin vulputate enim risus, vel lobortis justo gravida et. Sed at metus ante. Aliquam a feugiat metus. In blandit augue id neque sollicitudin, ac vehicula mauris convallis. Ut id nunc diam. In at rhoncus lacus, at blandit nisl.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row w-[34rem] h-fit md:h-[20rem] p-8 text-navy font-dm-sans bg-gray-100 duration-100 hover:bg-navy hover:text-white hover:scale-105">
                            <div className="pr-2 py-1">
                                <svg className="h-10 w-10 text-olive"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <rect x="4" y="13" rx="2" width="4" height="6" />
                                    <rect x="16" y="13" rx="2" width="4" height="6" />
                                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                                    <path d="M18 19a6 3 0 0 1 -6 3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="pb-2 text-lg font-bold">
                                Maecenas malesuada fringilla dolor, vitae
                                </h3>
                                <p className="text-[0.8rem]">
                                Aliquam erat volutpat. Mauris hendrerit elit facilisis sem tristique, a molestie ante pharetra. Curabitur in tempus justo. Integer pretium velit dui, quis bibendum nisi posuere nec. Duis dictum nulla sagittis, ultricies augue ac, faucibus dui. Nullam et erat laoreet, sodales purus vel, molestie justo. Nullam auctor ipsum et finibus sollicitudin. Donec nec vulputate nisi. Duis quis nisl volutpat, egestas enim at, vestibulum diam. Cras consequat vel ligula vel molestie.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row w-[34rem] h-fit md:h-[20rem] p-8 text-navy font-dm-sans bg-gray-100 duration-100 hover:bg-navy hover:text-white hover:scale-105">
                            <div className="pr-2 py-1">
                                <svg className="h-10 w-10 text-olive"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <rect x="4" y="13" rx="2" width="4" height="6" />
                                    <rect x="16" y="13" rx="2" width="4" height="6" />
                                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                                    <path d="M18 19a6 3 0 0 1 -6 3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="pb-2 text-lg font-bold">
                                Integer iaculis, eros vitae volutpat
                                </h3>
                                <p className="text-[0.8rem]">
                                Sed sed ante tincidunt nisl scelerisque feugiat vitae dictum tortor. Mauris quis justo id sem ultrices consequat eu in urna. Nullam aliquam accumsan augue, sit amet imperdiet risus lobortis at. In rutrum nisi nec est egestas congue at a velit. Nulla sed sapien ipsum. Donec sed lacus a nunc auctor tincidunt vitae at libero. Proin vel interdum enim. Vestibulum consequat sapien nisi. Integer bibendum euismod ex, quis eleifend sem hendrerit nec. Aliquam in tortor condimentum, elementum erat ut, ullamcorper erat. Praesent ullamcorper tellus at nibh ultrices euismod. Quisque vulputate ligula vel elit tempor, non auctor dolor pharetra.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row w-[34rem] h-fit md:h-[20rem] p-8 text-navy font-dm-sans bg-gray-100 duration-100 hover:bg-navy hover:text-white hover:scale-105">
                            <div className="pr-2 py-1">
                                <svg className="h-10 w-10 text-olive"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <rect x="4" y="13" rx="2" width="4" height="6" />
                                    <rect x="16" y="13" rx="2" width="4" height="6" />
                                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                                    <path d="M18 19a6 3 0 0 1 -6 3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="pb-2 text-lg font-bold">
                                Cras vestibulum arcu eget lectus
                                </h3>
                                <p className="text-[0.8rem]">
                                Nunc a rhoncus nulla, a luctus massa. Praesent mollis euismod quam eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae magna faucibus, luctus leo in, congue lacus. Etiam efficitur urna vel sollicitudin venenatis. Nullam auctor aliquet lectus, vitae hendrerit dui pellentesque et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ut sollicitudin eros, nec sodales tellus. Sed dictum sed nulla ac ultricies.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row w-[34rem] h-fit md:h-[20rem] p-8 text-navy font-dm-sans bg-gray-100 duration-100 hover:bg-navy hover:text-white hover:scale-105">
                            <div className="pr-2 py-1">
                                <svg className="h-10 w-10 text-olive"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <rect x="4" y="13" rx="2" width="4" height="6" />
                                    <rect x="16" y="13" rx="2" width="4" height="6" />
                                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                                    <path d="M18 19a6 3 0 0 1 -6 3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="pb-2 text-lg font-bold">
                                Etiam bibendum nunc at mi
                                </h3>
                                <p className="text-[0.8rem]">
                                Duis vulputate augue a mattis scelerisque. Donec vitae imperdiet sem, vel tristique nisi. Cras sit amet urna lacinia, blandit enim sit amet, condimentum mi. Vivamus feugiat, nunc eget dapibus malesuada, enim risus ultrices sem, sit amet hendrerit sapien ex sit amet turpis. Nullam sodales tincidunt fringilla. Mauris non finibus mauris. Quisque sed leo at odio convallis cursus congue quis mauris. In erat nulla, cursus lacinia sapien ut, rutrum iaculis massa. Quisque non urna nec risus facilisis vulputate. Integer ut rhoncus nisi, a blandit sem. Aliquam magna lorem, pretium eget dictum ut, egestas in metus. Vestibulum aliquam fringilla purus vitae posuere. Duis et ex enim. Pellentesque at volutpat turpis, eget hendrerit tellus. Maecenas quis est vitae metus facilisis maximus ut a mi. Nulla sollicitudin molestie felis, a elementum ligula dictum nec.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="clients">
                <div className="flex flex-col justify-center items-center
                w-full h-fit">
                    <img className="object-cover object-center w-full h-[36rem] sm:h-[32rem] md:h-[28rem]" src="/homeClients.jpg" alt="home-clients" />
                    <div className="absolute w-full h-[36rem] sm:h-[32rem] md:h-[28rem] opacity-85 bg-olive" />
                    <div className="absolute">
                        <div className="flex flex-col justify-center items-center p-12 md:p-20">
                                <h2 className="mb-12 text-3xl font-bold font-dm-sans text-white">OUR CLIENTS</h2>

                                <ul className="w-full md:w-[80%] text-base md:text-lg font-extralight font-dm-sans text-white">
                                    <li><span className="font-bold text-navy">•</span> Suspendisse in felis tincidunt, luctus purus id, condimentum urna. Aenean et imperdiet risus. Curabitur lobortis.</li>
                                    <li><span className="font-bold text-navy">•</span> Nam cursus, leo a dignissim dapibus, augue tortor mollis libero, in ornare arcu lacus vitae.</li>
                                    <li><span className="font-bold text-navy">•</span> Ut dictum pellentesque metus, sit amet scelerisque libero. Suspendisse volutpat dignissim bibendum. Nulla id mauris.</li>
                                    <li><span className="font-bold text-navy">•</span> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fermentum.</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="market">
                
            </section>

            <section id="contact">
                <div className="flex flex-col justify-center items-center
                w-full h-fit">
                    <img className="object-contain object-center w-full h-[24rem]" src="/worldMap.jpg" alt="world-map" />
                    <div className="absolute w-full h-[24rem] opacity-75 bg-gray-200" />
                    <div className="absolute">
                        <div className="flex flex-col justify-center items-center p-12 md:p-20">
                            <h2 className="mb-12 text-3xl text-center font-bold font-dm-sans text-navy">Leave us your contact information below</h2>
                            <button className="rounded-md px-8 py-2 text-base sm:text-lg lg:text-xl font-semibold text-white bg-olive duration-100 hover:bg-olive-silver"
                            onClick={() => {window.scrollTo(0, 0);navigate("/contact")}}>
                                CONTACT NOW
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home