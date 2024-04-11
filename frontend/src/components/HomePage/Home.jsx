import { Link } from "react-router-dom";
import Footer from "../Structural/Footer";
import Navbar from "../Structural/Navbar";
import About from "./About";
import TopCreators from "./TopCreators";
import robotHome from "/hack1.jpeg";

function Home() {
    return (
        <div>
            <Navbar />
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex flex-col items-center px-4 py-8 mx-auto xl:flex-row">
                    <div className="flex justify-center xl:w-1/2">
                        <img
                            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
                            src={robotHome}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                            For VIT. By VIT
                        </h2>

                        <p className="block max-w-lg mt-4 text-gray-500 dark:text-gray-300">
                            At VITBEAT, we envision a campus where every student is empowered to express, connect, and celebrate their unique journey and themselves through a seamless and vibrant platform.
                        </p>

                        <div className="mt-6 sm:-mx-2">
                            <Link
                                to="/podcasts"
                                className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                            >
                                

                                <span className="mx-2">Go to Podcasts</span>
                            </Link>

                            <Link
                                to="/events"
                                className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                            >
                                <span className="mx-2">Go to Events</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <About />
            <TopCreators />
            <Footer />
        </div>
    );
}

export default Home;
