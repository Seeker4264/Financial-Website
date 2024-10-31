
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Transition } from '@headlessui/react';


function Teams() {
    const [page1, setPage1] = useState(true);
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);

    const navigate = useNavigate();

    const toPage1 = () => {
        const element = document.getElementById("bios");
        element?.scrollIntoView({ behavior: "smooth" });

        setPage2(false);
        setPage3(false);
        
        const timer = setTimeout(() => {
            setPage1(true);
        }, 600);
        return () => clearTimeout(timer);
    };

    const toPage2 = () => {
        const element = document.getElementById("bios");
        element?.scrollIntoView({ behavior: "smooth" });

        setPage1(false);
        setPage3(false);
        
        const timer = setTimeout(() => {
            setPage2(true);
        }, 600);
        return () => clearTimeout(timer);
    };

    const toPage3 = () => {
        const element = document.getElementById("bios");
        element?.scrollIntoView({ behavior: "smooth" });

        setPage1(false);
        setPage2(false);
        
        const timer = setTimeout(() => {
            setPage3(true);
        }, 600);
        return () => clearTimeout(timer);
    };


    return (
        <>
            <section id="banner">
                <div className="flex flex-row justify-center items-center
                w-full h-fit">
                    <img className="object-cover object-center w-full h-[24rem]" src="/teamsBanner.jpg" alt="teams-banner" />
                    <div className="absolute w-full h-[24rem] opacity-50 bg-gray-600" />
                    <div className="absolute w-[80%] md:w-[60%] ml-auto md:[transform:translateX(-4rem)translateY(-3rem)] lg:[transform:translateX(-8rem)translateY(-3rem)]">
                        <h2 className="text-4xl font-bold font-dm-sans text-white">
                        MEET OUR TEAMS
                        </h2>
                    </div>
                </div>
            </section>

            <section id="bios">
                <div className="flex flex-col justify-center items-center
                w-full h-fit px-10 md:px-20 py-16">
                    <h2 className="w-[full] md:w-[80%] mb-24 md:mb-16 text-2xl leading-[1.40rem] text-center font-normal font-dm-sans text-olive">
                    Nam sapien turpis, mollis vitae dui sit amet, ornare mattis neque. Nullam vitae justo viverra, scelerisque risus vitae, mattis.
                    </h2>

                    <Transition show={page1}>
                    <div className="flex flex-col justify-center items-center duration-[600ms] ease-out
                    data-[closed]:opacity-0 data-[closed]:scale-75 data-[closed]:translate-y-[8rem]">

                        <div className="flex flex-col sm:flex-row gap-10 w-[90%] lg:w-3/4 mb-16 lg:mb-32">
                            <img className="object-cover object-center rounded-[1rem] sm:rounded-full w-[12rem] sm:w-[8rem] lg:w-[12rem] h-[12rem] sm:h-[8rem] lg:h-[12rem] ml-0 lg:ml-20" src="/Marco.jpg" alt="marco-sandoval" />

                            <div className="flex flex-col">
                                <div className="px-6 pt-3 pb-6">
                                    <h4 className="text-xl leading-4 font-bold font-dm-sans text-olive">
                                        Marco Sandoval
                                    </h4>
                                    <p className="mb-5 text-base font-semibold font-dm-sans text-olive">
                                        Managing
                                    </p>
                                    <p className="pb-2 text-sm font-normal font-dm-sans text-navy">
                                    In interdum iaculis metus, quis mattis risus maximus ut. Integer facilisis iaculis orci at interdum. Nunc vulputate in diam ac elementum. Donec facilisis augue a sagittis ullamcorper. Fusce lobortis ut eros dapibus dapibus. Suspendisse potenti. Mauris eu nisi fringilla, gravida dolor vel, commodo nunc. Vivamus elementum laoreet lacus.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-10 w-[90%] lg:w-3/4 mb-16 lg:mb-32">
                            <img className="object-cover object-center rounded-[1rem] sm:rounded-full w-[12rem] sm:w-[8rem] lg:w-[12rem] h-[12rem] sm:h-[8rem] lg:h-[12rem] ml-0 lg:ml-20" src="/Herald.jpg" alt="herald-smith" />

                            <div className="flex flex-col">
                                <div className="px-6 pt-3 pb-6">
                                    <h4 className="text-xl leading-4 font-bold font-dm-sans text-olive">
                                        Herald Smith
                                    </h4>
                                    <p className="mb-5 text-base font-semibold font-dm-sans text-olive">
                                        Managing
                                    </p>
                                    <p className="pb-2 text-sm font-normal font-dm-sans text-navy">
                                    Nulla ac fermentum orci. Suspendisse non euismod ligula. Proin ac pharetra nisi, quis sodales mauris. In ut urna justo. Maecenas leo enim, molestie non sodales id, dignissim gravida dui. Etiam tincidunt consectetur leo. Etiam id pharetra lacus, at scelerisque risus. Proin volutpat nunc in nisl lacinia, vitae mattis.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-10 w-[90%] lg:w-3/4 mb-16 lg:mb-32">
                            <img className="object-cover object-center rounded-[1rem] sm:rounded-full w-[12rem] sm:w-[8rem] lg:w-[12rem] h-[12rem] sm:h-[8rem] lg:h-[12rem] ml-0 lg:ml-20" src="/Gerard.jpg" alt="gerardo-marquez" />

                            <div className="flex flex-col">
                                <div className="px-6 pt-3 pb-6">
                                    <h4 className="text-xl leading-4 font-bold font-dm-sans text-olive">
                                        Gerardo Marquéz
                                    </h4>
                                    <p className="mb-5 text-base font-semibold font-dm-sans text-olive">
                                        Managing
                                    </p>
                                    <p className="pb-2 text-sm font-normal font-dm-sans text-navy">
                                    Nulla ac fermentum orci. Suspendisse non euismod ligula. Proin ac pharetra nisi, quis sodales mauris. In ut urna justo. Maecenas leo enim, molestie non sodales id, dignissim gravida dui. Etiam tincidunt consectetur leo. Etiam id pharetra lacus, at scelerisque risus. Proin volutpat nunc in nisl lacinia, vitae mattis.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    </Transition>


                    <Transition show={page2}>
                    <div className="flex flex-col justify-center items-center duration-[600ms] ease-out
                    data-[closed]:opacity-0 data-[closed]:scale-75 data-[closed]:translate-y-[8rem]">

                        <div className="flex flex-col sm:flex-row gap-10 w-[90%] lg:w-3/4 mb-16 lg:mb-32">
                            <img className="object-cover object-center rounded-[1rem] sm:rounded-full w-[12rem] sm:w-[8rem] lg:w-[12rem] h-[12rem] sm:h-[8rem] lg:h-[12rem] ml-0 lg:ml-20" src="/Martin-Cordero.jpg" alt="martin-cordero" />

                            <div className="flex flex-col">
                                <div className="px-6 pt-3 pb-6">
                                    <h4 className="text-xl leading-4 font-bold font-dm-sans text-olive">
                                        Martin Cordero
                                    </h4>
                                    <p className="mb-5 text-base font-semibold font-dm-sans text-olive">
                                        Managing
                                    </p>
                                    <p className="pb-2 text-sm font-normal font-dm-sans text-navy">
                                    Sed nec semper urna. Vestibulum pulvinar id est ut efficitur. Mauris vitae nunc magna. Sed convallis, eros lobortis euismod commodo, ante sem blandit enim, nec placerat elit lorem eget justo. Aliquam aliquet, magna sed molestie posuere, metus ipsum convallis libero, sit amet viverra metus ante in dolor. Morbi.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-10 w-[90%] lg:w-3/4 mb-16 lg:mb-32">
                            <img className="object-cover object-center rounded-[1rem] sm:rounded-full w-[12rem] sm:w-[8rem] lg:w-[12rem] h-[12rem] sm:h-[8rem] lg:h-[12rem] ml-0 lg:ml-20" src="/Luis.jpg" alt="luis" />

                            <div className="flex flex-col">
                                <div className="px-6 pt-3 pb-6">
                                    <h4 className="text-xl leading-4 font-bold font-dm-sans text-olive">
                                        Luis González
                                    </h4>
                                    <p className="mb-5 text-base font-semibold font-dm-sans text-olive">
                                        Public Relations
                                    </p>
                                    <p className="pb-2 text-sm font-normal font-dm-sans text-navy">
                                    Nulla convallis sollicitudin lectus, non efficitur nunc finibus ut. Nulla dictum porta diam, sed ultricies nunc semper sit amet. Cras lacinia, tortor sit amet viverra lacinia, mi massa porttitor ante, at posuere purus libero ac sem. Duis eget nunc augue. Etiam id commodo ex. Aliquam consequat turpis quam.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-10 w-[90%] lg:w-3/4 mb-16 lg:mb-32">
                            <img className="object-cover object-center rounded-[1rem] sm:rounded-full w-[12rem] sm:w-[8rem] lg:w-[12rem] h-[12rem] sm:h-[8rem] lg:h-[12rem] ml-0 lg:ml-20" src="/Jose-Martino.jpg" alt="jose-martino" />

                            <div className="flex flex-col">
                                <div className="px-6 pt-3 pb-6">
                                    <h4 className="text-xl leading-4 font-bold font-dm-sans text-olive">
                                        José Martino
                                    </h4>
                                    <p className="mb-5 text-base font-semibold font-dm-sans text-olive">
                                        Project Manager
                                    </p>
                                    <p className="pb-2 text-sm font-normal font-dm-sans text-navy">
                                    Ut vehicula bibendum tortor ac tempus. Mauris lacinia dolor eget lorem efficitur, ut consectetur dui convallis. Fusce sit amet pellentesque ipsum. Aliquam quis tortor tellus. Quisque luctus pretium magna, vitae tristique augue mollis quis. Suspendisse lacinia turpis id urna maximus vestibulum. Vestibulum vel quam vel magna fermentum bibendum.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    </Transition>


                    <Transition show={page3}>
                    <div className="flex flex-col justify-center items-center duration-[600ms] ease-out
                    data-[closed]:opacity-0 data-[closed]:scale-75 data-[closed]:translate-y-[8rem]">

                        <div className="flex flex-col sm:flex-row gap-10 w-[90%] lg:w-3/4 mb-16 lg:mb-32">
                            <img className="object-cover object-center rounded-[1rem] sm:rounded-full w-[12rem] sm:w-[8rem] lg:w-[12rem] h-[12rem] sm:h-[8rem] lg:h-[12rem] ml-0 lg:ml-20" src="/Martin-Gutierrez.jpg" alt="martin-cordero" />

                            <div className="flex flex-col">
                                <div className="px-6 pt-3 pb-6">
                                    <h4 className="text-xl leading-4 font-bold font-dm-sans text-olive">
                                        Martin Gutiérrez
                                    </h4>
                                    <p className="mb-5 text-base font-semibold font-dm-sans text-olive">
                                        Public Relations
                                    </p>
                                    <p className="pb-2 text-sm font-normal font-dm-sans text-navy">
                                    Curabitur vel sem porta, feugiat dolor nec, consequat est. Maecenas imperdiet ligula ipsum, quis scelerisque diam varius non. In at congue tortor. Vestibulum vitae bibendum libero. Vivamus et aliquet massa. Curabitur non posuere nibh. Mauris non mattis ligula. Phasellus vel lacus at lacus aliquam vestibulum. Curabitur feugiat congue.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-10 w-[90%] lg:w-3/4 mb-16 lg:mb-32">
                            <img className="object-cover object-center rounded-[1rem] sm:rounded-full w-[12rem] sm:w-[8rem] lg:w-[12rem] h-[12rem] sm:h-[8rem] lg:h-[12rem] ml-0 lg:ml-20" src="/Andres.jpg" alt="luis" />

                            <div className="flex flex-col">
                                <div className="px-6 pt-3 pb-6">
                                    <h4 className="text-xl leading-4 font-bold font-dm-sans text-olive">
                                        Andrés Salomón
                                    </h4>
                                    <p className="mb-5 text-base font-semibold font-dm-sans text-olive">
                                        Assistant Manager
                                    </p>
                                    <p className="pb-2 text-sm font-normal font-dm-sans text-navy">
                                    Phasellus odio dolor, interdum at dapibus eu, tempor ut sem. Maecenas pretium, lacus nec dignissim ornare, velit magna venenatis velit, et molestie eros nibh luctus ante. Praesent at sodales erat, non hendrerit libero. Curabitur nisi neque, accumsan sit amet elit sit amet, aliquam scelerisque enim. Maecenas elementum est.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-10 w-[90%] lg:w-3/4 mb-16 lg:mb-32">
                            <img className="object-cover object-center rounded-[1rem] sm:rounded-full w-[12rem] sm:w-[8rem] lg:w-[12rem] h-[12rem] sm:h-[8rem] lg:h-[12rem] ml-0 lg:ml-20" src="/Pedro-Marquez.jpg" alt="jose-martino" />

                            <div className="flex flex-col">
                                <div className="px-6 pt-3 pb-6">
                                    <h4 className="text-xl leading-4 font-bold font-dm-sans text-olive">
                                        Pedro Marquéz
                                    </h4>
                                    <p className="mb-5 text-base font-semibold font-dm-sans text-olive">
                                        Public Relations
                                    </p>
                                    <p className="pb-2 text-sm font-normal font-dm-sans text-navy">
                                    Donec ac nunc tincidunt, accumsan urna eget, vestibulum diam. Duis lacinia in magna quis bibendum. Nullam semper sem vel enim tempus, non finibus elit facilisis. Sed elementum iaculis semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id libero diam. Vestibulum luctus viverra purus vitae porttitor. Nam.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    </Transition>

                    <div className="flex flex-row gap-4">
                        <button disabled={page1} className={`${page1 ? 'bg-olive-silver' : ''}
                        rounded-full py-2 px-4 text-white bg-olive`}
                        onClick={() => toPage1()}>
                            1
                        </button>
                        <button disabled={page2} className={`${page2 ? 'bg-olive-silver' : ''}
                        rounded-full py-2 px-4 text-white bg-olive`}
                        onClick={() => toPage2()}>
                            2
                        </button>
                        <button disabled={page3} className={`${page3 ? 'bg-olive-silver' : ''}
                        rounded-full py-2 px-4 text-white bg-olive`}
                        onClick={() => toPage3()}>
                            3
                        </button>
                    </div>

                </div>
            </section>

            <section id="contact">
                <div className="flex flex-col justify-center items-center
                w-full h-fit">
                    <img className="object-contain object-center w-full h-[24rem]" src="/worldMap.jpg" alt="world-map" />
                    <div className="absolute w-full h-[24rem] opacity-75 bg-gray-200" />
                    <div className="absolute">
                        <div className="flex flex-col justify-center items-center p-20">
                            <h2 className="mb-12 text-3xl font-bold font-dm-sans text-navy">Leave us your contact information below</h2>
                            <button className="rounded-md px-8 py-2 text-xl font-semibold text-white bg-olive duration-100 hover:bg-olive-silver"
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

export default Teams