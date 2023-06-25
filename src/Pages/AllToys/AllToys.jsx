import React from 'react';
import { useEffect, useState } from 'react';
//import AllToysCard from './AllToysCard';
import { useLoaderData } from 'react-router-dom';
//import useTitle from '../../Components/Hooks';
import AllToysCard from './AllToysCard';
//todo:
const AllToys = () => {
    const { toysQuantity } = useLoaderData()


    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState('')
    const [currentPage, setCurrentPage] = useState(0)

    const [itemsPerPage, setItemsPage] = useState(20)

    const totalPages = Math.ceil(toysQuantity / itemsPerPage)
    console.log(toysQuantity)
    const paginationBtn = [...Array(totalPages).keys()]




    useEffect(() => {
        const fetchToys = async () => {
            const response = await fetch(`https://toys-marketplace-server-one.vercel.app/allToys/${searchText || '1'}?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            setToys(data);
            // fetch(`https://toys-marketplace-server-one.vercel.app/allToys/${searchText || '1'}`)
            // .then(res => res.json())
            // .then(data => setToys(data))
        }
            fetchToys()

        }, [searchText,currentPage])
    







    const handleSearch = (event) => {
        event.preventDefault()
        const search = event.target.search.value
        setSearchText(search)

    }

    // pagination 

//useTitle('All Toys')


    return (
        <div className='my-10'>
            {/* <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    
                </div>
            </div> */}
            <form onSubmit={handleSearch} className="form-control">
                <div className="text-center my-5">
                    <input name='search' type="text" placeholder="Search…" className="input input-bordered" />
                    <input className=" bg-gradient-to-r from-cyan-800 to-cyan-600 p-3 rounded-lg font-semibold text-white" type="submit" value="Search" />
                </div>
            </form>




            <div>
                <div className="overflow-x-auto">
                    <table className="table mx-auto text-center table-compact w-full">
                        <thead className='text-center'>
                            <tr className=''>
                                {/* <th>Image</th> */}
                                <th>#</th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Subcategory</th>
                                <th>Price</th>
                                <th>Available</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                        
                             // eslint-disable-next-line no-unused-vars
                             toys &&  toys.map( (toy,index) => <AllToysCard key={toy._id} index={index}  toy={toy}></AllToysCard>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>

            <div className='mx-auto text-center text-7xl'>

                <div className='mx-auto btn-group text-center gap-5'>
                    {
                        paginationBtn.map(number => <button onClick={() => setCurrentPage(number)} className={currentPage == number ? 'btn btn-success' : "btn btn-xs"} key={number} >{number + 1}</button>)
                    }
                </div>
            </div>



        </div>
    );
};
export default AllToys;