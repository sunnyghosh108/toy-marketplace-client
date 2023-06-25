import React from 'react';
import { useEffect, useState } from "react";
import PetTabsCard from './PetTabsCard';
//TODO:
const PetTabs = () => {
    const [pets, setPets] = useState([])
    useEffect(() => {
        fetch('https://toys-marketplace-server-one.vercel.app/allToysTabs')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const filter = data.filter(df => df.subcategory === 'Pet Pals')
                    setPets(filter)
                    // console.log(filter)
                }
            }
            )

    }, [])

    console.log(pets)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">

            {
                pets && pets.map(pet => <PetTabsCard key={pet._id} pet={pet}></PetTabsCard>)
            }

        </div>
    );
};
export default PetTabs;