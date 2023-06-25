import React from 'react';
import { Link } from 'react-router-dom';
//import errorBanner from '../../assets/error.jpg'
// TODO:import
const ErrorBase = () => {
    return (
        <div>

        <div className='lg:w-[40%] text-center  mx-auto '>

            <img src={`https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1687676597~exp=1687677197~hmac=9557c3cd916062c688d0b9eae3a60ef991ed5445276ed5367f6ec827b775c892`} alt="" />
            <Link to='/'> <button className=' btn btn-success'>Go Back</button></Link>
        </div>

    </div>
    );
};

export default ErrorBase;