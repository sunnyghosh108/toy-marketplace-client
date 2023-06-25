import React from 'react';
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import AdorableAnimalImg from "./AdorableAnimalImg";
// TODO:fetch link
const AdorableAnimal = () => {
    const [toysImg, setToysImg] = useState([])
    useEffect(() => {
        fetch('https://toys-marketplace-server-one.vercel.app/allToysImg')
            .then(res => res.json())
            .then(data => setToysImg(data))

    }, [])
    return (
        <div data-aos="fade-up"  className="my-24">
            <h1 className="text-center text-3xl font-semibold">Adorable Animal Toys Collection</h1>
            <p className="text-center font-semibold w-[80%] my-5 text-sm mx-auto"> Welcome to the enchanting world of the Adorable Animal Toys Collection!</p>
            <Marquee pauseOnClick speed={70}>
                <div className="flex gap-5 m-10">
                    {
                      toysImg &&  toysImg.map(toy => <AdorableAnimalImg key={toy._id} toy={toy}></AdorableAnimalImg>)
                    }
                </div>
            </Marquee>

        </div>

    );
};

export default AdorableAnimal;