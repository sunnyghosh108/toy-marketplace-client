import React from 'react';
import './Banner.css'



const Banner = () => {
    return (
      
        <div>
        <div className="carousel w-full h-[600px]">
           <div id="slide1" className="carousel-item relative w-full">
               <img src='https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?size=626&ext=jpg&ga=GA1.1.919864537.1687618236&semt=ais' className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
               <div className="text-white space-y-7 md:w-2/3 pl-12 ">
                    <h2 className="text-4xl  font-bold"> <span className='text-cyan-600'>Jungle Jamboree</span> <br /> Unleash the Fun <br /> with Animal Toys Galore</h2>
                  
                  
                    <p className='font-medium text-sm text-gray-300'>Welcome to Jungle Jamboree: Unleash the Fun with Animal Toys Galore! Discover a vibrant collection of animal toys that ignite imagination and bring joy to playtime. From cuddly companions to interactive wonders, our virtual jungle is filled with roaring lions, soaring eagles, and playful monkeys. Let the adventure begin as your child creates wild tales and embarks on unforgettable playtime journeys. Join us at Jungle Jamboree, where fun knows no bounds</p>
                  
                  
                  
                


                </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                   <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
           </div>
           <div id="slide2" className="carousel-item relative w-full">
               <img src='https://img.freepik.com/premium-photo/children-s-toys-beige-background-with-copy-space-multicolored-wooden-plush-toys-toddler-baby-eco-friendly-toy-plastic-free-empty-space-your-text-advertising-3d-rendering_429124-3143.jpg?size=626&ext=jpg&ga=GA1.1.919864537.1687618236&semt=ais' className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
               <div className='text-white text-center mx-16 '>
                       <h2 className='text-6xl font-bold'>Get a bonus with your first order!!!</h2>
                       <p className="text-4xl text-white"> Here you can choice different types of toys</p>
                       
                   </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                   <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide3" className="btn btn-circle">❯</a>
               </div>
           </div>
           <div id="slide3" className="carousel-item relative w-full">
               <img src='https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686919.jpg?w=740&t=st=1687631575~exp=1687632175~hmac=d7bb04f97775477e3a85aa4b3fff2940cd30bb33a0818671ffbd088949cebff9' className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
               <div className='text-white text-center mx-16 '>
                       <h2 className='text-6xl font-bold'>Get a bonus with your first order!!!!</h2>
                       <p className="text-4xl text-white"> Here you can choice different types of toys</p>
                       
                   </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                   <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide4" className="btn btn-circle">❯</a>
               </div>
           </div>
           <div id="slide4" className="carousel-item relative w-full">
               <img src='https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686920.jpg?w=740&t=st=1687631852~exp=1687632452~hmac=34477d2f4df000ea6d2ed4ce691308e6d99ff2fd0ffd105d271e5d054be6327e' className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
               <div className='text-white text-center mx-16 '>
                       <h2 className='text-6xl font-bold'>Get a bonus with your first order!!</h2>
                       <p className="text-4xl text-white"> Here you can choice different types of toys</p>
                      
                   </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                   <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide1" className="btn btn-circle">❯</a>
               </div>
           </div>
       </div>

       </div>
       
    );
};


export default Banner;