
import { useNavigate } from "react-router-dom";


function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full h-fit p-12 bg-gray-100">
                <div className="flex flex-col justify-center items-center rounded-lg w-full h-full p-8 font-dm-sans text-navy bg-white">
                    <svg className="size-28 mb-16 text-navy"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="1" y1="1" x2="23" y2="23" />
                        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                        <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
                        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                        <line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                    
                    <h2 className="mb-4 text-2xl md:text-4xl text-center font-semibold">We couldn't found this page...</h2>

                    <p className="mb-4 text-lg md:text-xl text-center font-normal">
                    Check the url and try again in a few moments
                    </p>

                    
                    <button className="rounded-xl px-6 py-2 text-base md:text-lg text-white bg-navy duration-75 hover:bg-san-marino"
                    onClick={() => navigate("/")}>
                            Return
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotFound