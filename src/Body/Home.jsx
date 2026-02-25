import React, { Suspense } from 'react';
import HomeBanner from './HomeBanner/HomeBanner'
import BodyApp from './BodyApp/BodyApp';
import { useLoaderData } from 'react-router';


const Home = () => {
    const loderData=useLoaderData();
    
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Suspense fallback={<div>Loeading........</div>}>
            <BodyApp loderData={loderData}></BodyApp>
             </Suspense>
            
        </div>
    );
};

export default Home;