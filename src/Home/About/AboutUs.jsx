import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/gallery/gallery1.jpg'
//import img2 from '../../../assets/38076.jpg'
import img3 from '../../assets/gallery/gallery2..jpg'
import { FaArrowRight } from 'react-icons/fa';

const AboutUs = () => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-10 md:p-1   gap-10 py-10 items-center mx-auto bg-base-200'>
            <div data-aos="fade-up"  className='mx-auto py-10'>
                <div className='relative '>
                    <img className='h-full try2 w-96 rounded' src={img}alt="" />
                    <img className='absolute try1 md:top-40 top-28 left-20  md:left-40 bottom-0  w-20 rounded border-4 border-gray-200' src={img3} alt="" />
                </div>
            </div>
            <div className='space-y-6 mx-auto py-10'>
                <h1 data-aos="fade-up" className='text-3xl border-l-indigo-400 border-l-8 p-5 rounded-full font-light'>Learn About Us</h1>
                <div data-aos="fade-up"  className='space-y-3'>
                    <h1 className='font-semibold  text-3xl'>Join Our Animal Toys Adventure</h1>
                    <p className='font-medium text-sm'>Step into a world of imagination, exploration, and endless fun with Jungle Jamboree. Browse our extensive collection of animal toys and discover a world where creativity knows no bounds. We invite you to join our community of animal lovers and embark on an exciting adventure that will inspire joy, learning, and unforgettable memories.</p>
                </div>
                <div data-aos="fade-up"  className='space-y-3'>
                    <h1 className='font-semibold  text-3xl'>Making a Positive Impact Together</h1>
                    <p className='font-medium text-sm'>Jungle Jamboree we believe in the power of giving back. We are committed to making a positive impact on both our local and global communities. Through partnerships with reputable animal welfare organizations and conservation initiatives, we actively support efforts to protect and preserve the diverse wildlife that inspires our toys. Additionally, we strive to adopt eco-friendly practices in our operations, using sustainable packaging materials and reducing our environmental footprint. When you choose [Website Name], you not only bring joy to your loved</p>
                </div>
                <div>
                    <Link to='/about'> <button className='flex items-center border-2 p-2 hover:bg-cyan-400 text-cyan-400 hover:text-gray-700 border-cyan-300 rounded-full'>Read more <FaArrowRight className='ml-2'></FaArrowRight></button></Link>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;