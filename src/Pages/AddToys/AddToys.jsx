import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';


const AddToys = () => {
    const { user } = useContext(AuthContext)
    // const [selectedOption, setSelectedOption] = useState(null);

//useTitle('Add Toys')
    const [category, setCategory] = useState('Ocean Explorers')

    const handleSubmit = (event) => {

        event.preventDefault()
        const form = event.target
        const seller_name = form.seller_name.value
        const seller_email = form.seller_email.value

        const toy_name = form.toy_name.value
        const description = form.description.value
        const available_quantity = form.quantity.value
        // const subcategory = form.subcategory.value
        const price = parseFloat(form.price.value)
        const ratings = form.rating.value
        const img = form.img.value

        const addToysDetails = {
            img,
            toy_name,
            seller_name,
            seller_email,
            price,
            ratings,
            available_quantity,
            subcategory: category,
            description,


        }
        // console.log(addToysDetails)
        fetch('https://toys-marketplace-server-one.vercel.app/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToysDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Added Product!',
                        'Successfully Added Your Product!',
                        'success'
                    )

                }
            })

    }

    // const options = [
    //     { value: 'Cow Ride-On Toys', label: 'Cow Ride-On Toys' },
    //     { value: 'Cow Learning Toys', label: 'Cow Learning Toys' },
    //     { value: 'Cow Plushies', label: 'Cow Plushies' },


    //     { value: 'Roaring Kings', label: 'Roaring Kings' },
    //     { value: 'Lion Pride Plush', label: 'Lion Pride Plush' },
    //     { value: 'Cowardly Lion', label: 'Cowardly Lion' },

    //     { value: 'Teddy Bear', label: 'Teddy Bear' },
    //     { value: 'Red Panda', label: 'Red Panda' },
    //     { value: 'Plush Panda', label: 'Plush Panda' },

    //     { value: 'Nutty Elepent', label: 'Nutty Elepent' },
    //     { value: 'Pink Elepent', label: 'Pink Elepent' },
    //     { value: 'Rubber Elepent', label: 'Rubber Elepent' },

    //     { value: 'Perky Penguin', label: 'Plush Panda' },
    //     { value: 'Christmas penguin', label: 'Christmas penguin' },
    //     { value: 'Baby penguin', label: 'Baby penguin' },



    //     { value: 'Majestic Tiger', label: 'Majestic Tiger' },
    //     { value: 'Woolen Tiger', label: 'Woolen Tiger' },
    //     { value: 'Fluffy Tiger', label: 'Fluffy Tiger' },



    // ];



    const handleCategory = (event) => {
        setCategory(event.target.value)
        console.log(event.target.value)
    }




    return (


  

            <div className='md:m-40 m-10 addToy-banner my-16 '>
                <form className="border  rounded py-10 px-10 md:px-20" onSubmit={handleSubmit}>
                    <h1 className="text-center text-4xl mb-5 font-semibold">Add A Toys</h1>
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='seller_name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name='seller_email' placeholder="Your Email" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='toy_name' placeholder="Toy Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Image</span>
                            </label>
                            <input type="url" name='img' placeholder="URL" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />

                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />

                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Subcategory</span>
                            </label>

                            <select value={category}  onChange={handleCategory} className='input input-bordered'>
                                <option value="Ocean Explorers">Ocean Explorers</option>
                                <option value="Pet Pals">Pet Pals</option>
                                <option value="Wild Kingdom">Wild Kingdom</option>
                            </select>


                            {/* <CreatableSelect
                            className="w-full h-full top-[5px]"
                            name="subcategory"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                        /> */}




                            {/* <input type="text" name='subcategory' placeholder="Subcategory" className="input input-bordered" required /> */}

                        </div>



                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-success">Add Toys</button>
                    </div>
                </form>
            </div>



    );
};
export default AddToys;