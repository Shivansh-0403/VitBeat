import Footer from "../Structural/Footer"
import Navbar from "../Structural/Navbar"

function ViewPodcasts() {
    return (
        <div>
            <Navbar />
            {/* <div> */}
                <main className="bg-black">
                    <h2 className="text-gray-700 dark:text-gray-200">Hi Olivia,</h2>

                    <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                        Welcome to Meraki UI! You’re already on your way to creating beautiful visual products.
                        We’ve created a quick intro video to get you up and running as soon as possible.
                        If you have any questions, <a href="#" className="underline transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">please get in touch</a>.
                    </p>

                    <iframe className="w-full h-64 my-10 rounded-lg md:h-80" src="https://www.youtube.com/embed/L6Jwa7al8os" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Thanks, <br />
                        Meraki UI team
                    </p>
                </main>
            {/* </div> */}
            <Footer />
        </div>
    )
}

export default ViewPodcasts