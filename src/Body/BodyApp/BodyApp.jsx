import React from 'react';
import Appp from '../../Pages/ap/appp'
import { Link } from 'react-router-dom';

const BodyApp = ({loderData}) => {
   
    return (
        <div className='py-10 w-[95%] mx-auto'>
            <h1 className='text-xl font-bold text-center'>Trending Apps</h1>
            <p className='texl-sm text-center'>Explore All Trending Apps on the Market developed</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-3'>
            {
                loderData.map((app)=><Appp key={app.id} app={app}></Appp>)
            }
            </div>
                        <Link to='/App' className='btn text-xl font-bold text-center'>Show All</Link>

        </div>
    );
};

export default BodyApp;