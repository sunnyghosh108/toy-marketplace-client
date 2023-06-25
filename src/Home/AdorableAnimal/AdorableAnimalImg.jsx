import React from 'react';

const AdorableAnimalImg = ({toy}) => {
    return (
        <>
            <img title={toy.toy_name} className="w-80 h-60 rounded" src={toy.img} alt="" />

        </>
    );
};


export default AdorableAnimalImg;