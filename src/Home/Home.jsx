import React from 'react';
import UseTitle from '../Components/Hooks/UseTitle';
import Banner from './Banner/Banner';
import AdorableAnimal from './AdorableAnimal/AdorableAnimal';
import AboutUs from './About/AboutUs';
import Gallery from './Gallery/Gallery';
import TabSubCategory from '../Pages/TabSubCategory/TabSubCategory';

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Banner></Banner>
           <div className="my-10 p-10">
           <TabSubCategory></TabSubCategory>
           </div>
            <Gallery></Gallery>
            <AdorableAnimal></AdorableAnimal>
            <AboutUs></AboutUs>
            
           

        </div>
    );
};

export default Home;