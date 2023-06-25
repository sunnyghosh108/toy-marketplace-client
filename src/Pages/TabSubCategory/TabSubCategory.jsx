import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Oceans from './Oceans/Oceans';
import PetTabs from './PetTabs/PetTabs';
import WildKingDom from './WildKingDom/WildKingDom';

const TabSubCategory = () => {
    return (
        <div data-aos="fade-up">
        <h2 className="text-center text-3xl text-sky-500 font-bold">All Toys Collection</h2>
            <Tabs className='rounded-3xl md:p-10  mx-auto'>
                    <TabList className="text-center mt-3">
                        <Tab><span className="text-2xl font-semibold text-slate-950">Ocean </span> </Tab>
                        <Tab><span className="text-2xl font-semibold text-slate-950">Pet Pals </span></Tab>
                        <Tab><span className="text-2xl font-semibold text-slate-950">Wild Kingdom </span></Tab>
                    </TabList>
              

                    <TabPanel>
                        <div className="md:p-20 mx-auto rounded-3xl">
                            <Oceans></Oceans>
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className="md:p-20 rounded-3xl">
                            <PetTabs></PetTabs>
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className="md:p-20 rounded-3xl">
                            <WildKingDom></WildKingDom>
                      
                        </div>
                    </TabPanel>
       

            </Tabs>

        </div>
    );
};

export default TabSubCategory;