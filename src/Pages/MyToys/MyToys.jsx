import React from 'react';
import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import MyToysTable from './MyToysTable';
import UseTitle from '../../Components/Hooks/UseTitle';
//Todo:fetch
const MyToys = () => {
    const { user } = useContext(AuthContext)
  const [myToys, setMyToys] = useState([])

  const [sorting, setSorting] = useState('')

  const handleAscending = () => {
    setSorting(1)


  }

  const hanldeDescending = () => {
    setSorting(-1)

  }

  useEffect(() => {
    fetch(`https://toys-marketplace-server-one.vercel.app/myToys?email=${user?.email}&srt=${sorting }`)
      .then(res => res.json())
      .then(data => {
        setMyToys(data)
      })
  }, [sorting])



  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-marketplace-server-one.vercel.app/remove/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {

            if (data.deletedCount > 0) {
              const withOutDeleted = myToys.filter(mf => mf._id !== id)
              setMyToys(withOutDeleted)

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

            }

          })

      }
    })






  }

  UseTitle('My Toys')
  return (
    <div className="my-10">
     <div className="flex gap-8 px-10 py-10">
        <button onClick={handleAscending} className="btn btn-success">Ascending</button>
        <button onClick={hanldeDescending} className="btn btn-success">Descending</button>
      </div>
    
    <div className="overflow-x-auto w-full mx-auto">
     
      <table className="table w-full text-center mx-auto">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Toy Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Edite</th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            myToys.map(toy => <MyToysTable key={toy._id} toy={toy} handleDelete={handleDelete}></MyToysTable>)
          }

        </tbody>

      </table>
    </div>
    </div>
  );
};

export default MyToys;