import React from 'react'

function Podcasts() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                                Easiest way to create your website
                            </h1>

                            <div className="mt-8 space-y-5">
                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Clean and Simple Layout</span>
                                </p>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Just Copy Paste Codeing</span>
                                </p>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Easy to Use</span>
                                </p>
                            </div>
                        </div>

                        {/* <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                            <form className="flex flex-col lg:flex-row">
                                <input type="email" placeholder="Enter your email address" className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                                <button type="button" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                    Join Us
                                </button>
                            </form>
                        </div> */}
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg" alt="glasses photo" />
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                        Bring your Business to the <span className="text-blue-500">next level.</span>
                    </h2>

                    <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus hic
                        explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
                    </p>

                    <div className="inline-flex w-full mt-6 sm:w-auto">
                        <a href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Sign Up
                        </a>
                    </div>
                </div>
            </section>

            <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-white dark:bg-gray-900">
                <div className="text-center pb-12 bg-white dark:bg-gray-900">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-400">
                        Check out our top podcasters
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-white dark:bg-gray-900">
                    <div className="w-full bg-white dark:bg-gray-900 rounded-lg p-10 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-400 font-bold mb-2">Dany Bailey</p>
                            <p className="text-base text-gray-200 font-normal">Software Engineer</p>
                        </div>
                    </div>
                    <div className="w-full bg-white dark:bg-gray-900 rounded-lg p-10 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-400 font-bold mb-2">Lucy Carter</p>
                            <p className="text-base text-gray-200 font-normal">Graphic Designer</p>
                        </div>
                    </div>
                    <div className="w-full bg-white dark:bg-gray-900 rounded-lg p-10 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-400 font-bold mb-2">Jade Bradley</p>
                            <p className="text-base text-gray-200 font-normal">Dev Ops</p>
                        </div>
                    </div>
                    <div className="w-full bg-white dark:bg-gray-900 rounded-lg p-10 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-400 font-bold mb-2">Dany Bailey</p>
                            <p className="text-base text-gray-200 font-normal">Software Engineer</p>
                        </div>
                    </div>
                    {/* <div className="w-full bg-white dark:bg-gray-900 rounded-lg p-10 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                            <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
                        </div>
                    </div>
                    <div className="w-full bg-white dark:bg-gray-900 rounded-lg p-10 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                            <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Podcasts