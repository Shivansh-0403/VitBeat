import { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from "../../assets/vitbeatlogo.png"

function Navbar() { 
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-3 mx-auto md:flex">
                <div className="flex items-center justify-between gap-5">
                    <Link to="/" className='text-white text-lg'>VITBeat
                        {/* <img className="w-auto h-6 sm:h-7" src={logo} alt="Brand Logo" /> */}
                    </Link>

                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
                        }`}
                >
                    

                    <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                        <Link to="/podcasts" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
                            Podcasts
                        </Link>
                        <Link to="/videos" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
                            Videos
                        </Link>
                        <Link to="/events" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
                            Events
                        </Link>
                        <Link to="/blogs" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
                            Blogs
                        </Link>
                    </div>
                    <div className="relative mt-4 md:mt-0">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                        <input
                            type="text"
                            className="py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                            placeholder="Search"
                        />
                    </div>
                    <div>
                        <Link to="/dashboard">
                            {/* big source image for login */}
                            <img className="object-cover w-8 h-8 rounded-full ring ring-gray-300 dark:ring-gray-600" 
                            src="data:image/jpeg;base64,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" 
                            alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
