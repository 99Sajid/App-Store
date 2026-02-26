import React from 'react';
import { LuDownload } from "react-icons/lu";
import { MdStarRate } from "react-icons/md";

const appp = ({app}) => {
    
    return (
        <div className=' p-4 rounded-lg shadow-xl'>
            <img src={app.image} className='my-1'></img>
            <h3 className='text-lg font-semibold line-clamp-2'>{app.title}:{app.companyName}</h3>
            <div className='flex justify-between my-1 gap-2 w-full'>
            <button className='btn flex-1 text-green-500 mx-0'><LuDownload/>{app.downloads/100000}M</button>
            <button className='btn flex-1 text-amber-500'><MdStarRate/>{app.ratingAvg}</button>
            </div>

        </div>
    );
};

export default appp;