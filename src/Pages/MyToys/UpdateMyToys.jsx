import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseTitle from '../../Components/Hooks/UseTitle';

//TODO:fetch
const UpdateMyToys = () => {
    const toy = useLoaderData()
    console.log(toy)
    const { price, _id, description, available_quantity } = toy
    // console.log(quantity)
    const handleUpdate = (event) => {
        event.preventDefault()
        console.log(_id)
        const form = event.target
        const price = parseFloat(form.price.value)
        const description = form.description.value
        const available_quantity = form.quantity.value
        const updateDetails = {

            price,
            description,
            available_quantity
        }
        fetch(`https://toys-marketplace-server-one.vercel.app/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDetails)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    Swal.fire(

                        'Updated!',
                        'Successfully Updated Your Details!',
                        'success'
                      )
                }
                console.log(data)
            })

    }

    UseTitle('Update Details')

    return (
        <div className='m-32'>
            <h1 className='font-semibold text-center my-5 text-3xl'>Update Your Details</h1>
            <form className="border rounded py-8 mt-10 px-0"  onSubmit={handleUpdate}>
                <div className=" grid grid-cols-1 w-[80%] mx-auto md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={price} name='price' placeholder="Price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" defaultValue={available_quantity} name='quantity' placeholder="Available Quantity" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text mt-0">Description</span>
                        </label>
                        <textarea defaultValue={description} className="textarea textarea-bordered" type="text" name='description' placeholder="Description" required />
                    </div>



                </div>
                <div className="w-[80%] mx-auto mt-10">
                    <input className='btn-success btn' type="submit" value="Update" />

                </div>
            </form>
        </div>
    );
};

export default UpdateMyToys;