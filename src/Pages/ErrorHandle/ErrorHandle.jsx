import React from 'react';

const ErrorHandle = () => {
    return (
        <div className=' text-center py-10 '>
            <img src="/error-404.png" className='mx-auto py-10'></img>
            <h2 className='text-3xl font-bold'>Oops, page not found!</h2>
            <p className='py-2 text-xs'>The page you are looking for is not available</p>
            <button className='btn px-6 bg-purple-600 text-white'>Go Back</button>
        </div>
    );
};

export default ErrorHandle;