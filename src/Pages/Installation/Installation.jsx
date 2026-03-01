import React, { useEffect,useState } from 'react';
import { useLoaderData } from 'react-router';
import InstalledApp from './InstalledApp/InstalledApp';
import { RemveFromStoredDB } from '../../LocalStorageData/LocalStorageData';
import { toast } from 'react-toastify';

const Installation = () => {
    const loaderdata=useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);
    const [sort,setSort]=useState('');
    


    useEffect(() => {
        const storedApps = JSON.parse(localStorage.getItem("Installed")) || [];

        const filteredApps = loaderdata.filter(app =>
            storedApps.includes(app.id)
        );

        setInstalledApps(filteredApps);
        
        
    }, [loaderdata]);
    const handleRemove = (id) => {
    RemveFromStoredDB(id);

    
    setInstalledApps(prev =>
        prev.filter(app => app.id !== id)
    );
    toast('Uninstalled Successfully');
};
const sortedApps = [...installedApps];

if (sort === 'Low to high') {
    sortedApps.sort((a, b) => a.downloads - b.downloads);
}

if (sort === 'High to low') {
    sortedApps.sort((a, b) => b.downloads - a.downloads);
}

    return (
        <div className='bg-base-200'>
        <div className='w-[90%] mx-auto '>
            <div className='text-center mx-auto py-10'>
            <h1 className='text-3xl font-bold'>Your Installed Apps</h1>
            <p className='text-xs'>Explore All Trending Apps on the Market Developed by us</p>
            </div>
            <div>
            <div className='flex justify-between'>
            <h1 className='text-xl font-semibold pb-2'>{installedApps.length===0?'No Apps Found':`(${installedApps.length})Apps Found`}</h1>
           <ul className="menu bg-base-200 rounded-box ">
                <li>
                    <details >
                   <summary>Sort by Download {sort && `(${sort})`}</summary>
                    <ul>
                        <li><a onClick={()=>setSort('High to low')}>High to low</a></li>
                        <li><a onClick={()=>setSort('Low to high')}>Low to high</a></li>
                    </ul>
                    </details>
                </li>
                </ul>  
            </div>
            <div className=''>
            {
                sortedApps.map((app)=><InstalledApp key={app.id} app={app}  onRemove={handleRemove}></InstalledApp>)
            }
            </div>
            </div>
            </div>
        </div>
    );
};

export default Installation;