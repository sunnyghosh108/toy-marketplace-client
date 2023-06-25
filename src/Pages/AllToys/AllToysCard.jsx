import React from 'react';
import { Link } from 'react-router-dom';

const AllToysCard = ({ toy, index }) => {
    const { toy_name, seller_name, subcategory, img, price, available_quantity, _id } = toy
    console.log(index)

    return (


        <>
            <tr>

                {/* <td>
                    <div className="avatar">
                        <div className="rounded-lg w-12 h-12">
                            {
                                img && <img src={img} alt="Avatar Tailwind CSS Component" />
                            }


                        </div>
                    </div>

                </td> */}
                <td>
                    {index + 1}

                </td>
                <td>
                    {
                        seller_name && seller_name
                    }
                </td>
                <td>
                    {
                        toy_name && toy_name
                    }
                </td>

                <td>


                    {
                        subcategory && subcategory
                    }
                </td>
                <td>
                    {
                        price && '$' + price
                    }

                </td>
                <td>  {
                    available_quantity &&
                    available_quantity
                }
                </td>
                <td>
                    <Link to={`/allToysDetails/${_id}`}> <button className="btn-success btn"><small>View Details</small></button></Link>
                </td>
            </tr>


        </>


    );
};


export default AllToysCard;