function About() {
    return (
        <div>
            {/* <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                                    explore our <br /> awesome Components
                                </h1>

                                <div className="mt-2">
                                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Copy & paste components</h1>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configuration</h1>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt="" />
                        </div>
                    </div>

                    <hr className="my-12 border-gray-200 dark:border-gray-700" />
                </div>
            </section> */}
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">At VITBeat <br /> we look <span className="underline decoration-blue-500">forward</span> to</h1>

                    <div className="grid gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 sm:xl:grid-cols-1">
                        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Foster Creativity</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Providing a space for students to unleash their creative potential through podcasts, music, blogs and event update.
                            </p>

                            <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>
                        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Enhance Communication</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Keeping the VIT Bhopal community informed and connected with real-time event updates and personalized feeds.
                            </p>

                            <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>
                        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Build Community</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Cultivating a sense of belonging by encouraging interaction, collaboration, and celebration among students.
                            </p>

                            <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>
                        {/* Repeat similar structure for other components */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
