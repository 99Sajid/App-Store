const getStoreApp=()=>{
    const storeAppSTR=localStorage.getItem("Installed");
    
    if(storeAppSTR){
        const storeAppData=JSON.parse(storeAppSTR);
        return storeAppData;
    }else{
        return [];
    }
}

const AddToStoredDB=(id)=>{

    const storedAppData=getStoreApp();
    if(storedAppData.includes(id)){
        alert("already exist");
    }else{
        storedAppData.push(id);
        const data=JSON.stringify(storedAppData);
        localStorage.setItem("Installed",data)

    }

}
export {AddToStoredDB,getStoreApp};