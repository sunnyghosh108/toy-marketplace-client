import React from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            navigate(from,{replace:true})
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
             <div className="divider">OR</div>
             <div className='text-center'>
             <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
             <span className='text-blue-500 text-3xl'> <FaGoogle></FaGoogle></span>
             </button>
             </div>
        </div>
    );
};

export default SocialLogin;