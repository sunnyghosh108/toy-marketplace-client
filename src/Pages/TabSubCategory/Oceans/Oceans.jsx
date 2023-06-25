import React from 'react';
import OceansCard from './OceansCard';
import { useState } from 'react';
import { useEffect } from 'react';
//TODO:fetch
const Oceans = () => {
    const [oceans, setOceans] = useState([])
    useEffect(() => {
        fetch('https://toys-marketplace-server-one.vercel.app/allToysTabs')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const filter = data.filter(df => df.subcategory === 'Ocean Explorers')
                    setOceans(filter)
                  
                }
            }
            )

    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {
                oceans && oceans.map(oceanAnimal => <OceansCard key={oceanAnimal._id} oceanAnimal={oceanAnimal}></OceansCard>)
            }

        </div>
    );
};
export default Oceans;