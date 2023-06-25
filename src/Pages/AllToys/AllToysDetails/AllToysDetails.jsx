import React from 'react';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import {  useParams } from "react-router-dom";
const AllToysDetails = () => {
    const [toyDetail, setToyDetail] = useState({})

    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`https://toys-marketplace-server-one.vercel.app/singleToys/${id}`)
            .then(res => res.json())
            .then(data => setToyDetail(data))
    }, [id])
    const { img, price, available_quantity, subcategory, description, seller_name, seller_email, toy_name, ratings } = toyDetail

    console.log(toyDetail)

    //useTitle('Toys Details')

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-10  items-center pb-20">

            <div className="mx-auto">
                <h1 className="text-4xl font-semibold my-5"> {toy_name}</h1>
                <img src={img} alt="" />
            </div>
            <div className="space-y-4 mx-auto md:mt-0 mt-10">

                <h2 className="text-2xl font-semibold"> Seller Name : {seller_name}</h2>
                <h4 className="font-bold text-sm"> Seller Email : {seller_email}</h4>

                <p className="font-bold text-3xl">Price : ${price}</p>
                <div className="space-y-2">
                    <p className="text-2xl font-lg">Available Quantity : {available_quantity}</p>
                    {/* <p className="font-semibold text-xl flex">Rating: {ratings}</p> */}

                      
                    <p className='flex items-center'><Rating
                            style={{ maxWidth: 100 }}
                            value={ratings}
                            readOnly
                        /> <span className='font-semibold'>{ratings}</span></p>

                    <p className="font-semibold text-sm"><span className="font-bold">Category :    </span> {subcategory}</p>
                    <p className="font-semibold"><span className="font-bold">Description : </span>{description}</p>
                </div>



            </div>



        </div>
    );
};

export default AllToysDetails;