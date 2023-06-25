import React from 'react';
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
const PetTabsCard = ({ pet }) => {
    const { toy_name, ratings, img, price, _id } = pet
    return (

        <div className="card w-full h-full bg-base-100 shadow-xl">

            <div className="card-body">
                {
                    img && <figure><img className='w-full rounded-xl h-56' src={img} alt="Shoes" /></figure>
                }
                {
                    toy_name && <h2 className="card-title text-2xl">{toy_name}</h2>
                }


                {
                    price && <p><span className='font-semibold text-xl'>Price :</span><span className='text-2xl font-lg'> ${price}</span></p>
                }

                {
                    ratings && <p className='flex items-center'><Rating
                        style={{ maxWidth: 100 }}
                        value={ratings}
                        readOnly
                    /> <span className='font-semibold'>{ratings}</span></p>
                }
                <div className="card-actions justify-end">
                    <Link to={`/allToysDetails/${_id}`}> <button className="btn-success btn"><small>View Details</small></button></Link>

                </div>
            </div>
        </div>
    );
};

export default PetTabsCard;