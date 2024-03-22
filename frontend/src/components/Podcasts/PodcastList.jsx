import Card from "../Card";
import React from 'react'
import Navbar from "../Structural/Navbar";
import Footer from "../Structural/Footer";

function PodcastList() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap px-5 gap-5 bg-black justify-around py-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    )
}

export default PodcastList