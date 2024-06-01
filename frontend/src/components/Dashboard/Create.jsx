import React from 'react'

function Create() {
    return (
        <div>
            <span className='dark:text-white block m-auto my-5 p-2 rounded-md text-xl px-4 text-center'>Choose Your Option</span>
            <div className='flex justify-around'>
                <button className='dark:text-white block m-auto bg-emerald-700 p-2 rounded-md text-lg px-4 w-36 hover:bg-slate-600'>Podcast</button>
                <button className='dark:text-white block m-auto bg-emerald-700 p-2 rounded-md text-lg px-4 w-36 hover:bg-slate-600'>Video</button>
                <button className='dark:text-white block m-auto bg-emerald-700 p-2 rounded-md text-lg px-4 w-36 hover:bg-slate-600'>Event</button>
                <button className='dark:text-white block m-auto bg-emerald-700 p-2 rounded-md text-lg px-4 w-36 hover:bg-slate-600'>Article</button>
            </div>

            <div className='mt-10'>
                <section className="max-w-lg p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                    <form>
                        <div className="flex flex-col gap-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Title</label>
                                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Description</label>

                                <textarea placeholder="lorem..." className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-16 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                            </div>

                            <div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">Upload Thumbnail</label>
                                    <input type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-blue-300" />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">Upload Podcast</label>
                                    <input type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-blue-300" />
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                        </div>
                    </form>
                </section>x
            </div>
        </div>
    )
}

export default Create