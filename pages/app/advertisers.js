import react, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/Dashboard/Layout';
import { AdvertiserTables } from '../../components/AdvertiserTables';
import { CreateAdvertiserPopup,CreateHandlePopup, CreateAssetsPopup } from '../../components/CreateAdvertiserPagePopups';


const Advertisers = () => {
    //just for testing
    const handleList= [{
        "id": 1,
        "name": "pantene",
        "image": "https://i.imgur.com/Hq0R0gs.png",
    }, {
        "id": 2,
        "name": "morangos com acucar",
        "image": "https://i.imgur.com/ozR5nEb.png",
    }]
    const advertiserList = [{
        "id": 1,
        "name": "pantene",
        "image": "https://i.imgur.com/Hq0R0gs.png",
        "email": "pantene@gmail.com"
    }, {
        "id": 2,
        "name": "morangos com acucar",
        "image": "https://i.imgur.com/ozR5nEb.png",
        "email": "morangos@gmail.com"
    }, {
        "id": 3,
        "name": "pantene",
        "image": "https://i.imgur.com/Hq0R0gs.png",
        "email": ""
    }]

    const [createHandlePopup, setCreateHandlePopup] =useState(false)
    const [createAdvertiserPopup, setCreateAdvertiserPopup] = useState(false)
    const [createAssetsPopup, setCreateAssetsPopup] = useState(false)


    const createHandle = () => {
        setCreateHandlePopup(!createHandlePopup)
    }
    const createAdvertiser = () => {
        setCreateAdvertiserPopup(!createAdvertiserPopup)
    }
    const createAssets = () => {
        console.log("oasdasda")
        setCreateAssetsPopup(!createAssetsPopup)
        console.log(createAssetsPopup)
    }


    useEffect(() => {
    
    }, [])
    return (
        <div>
        <DashboardLayout hideFooter selectedPage={"advertisers"}>
            <div className="flex flex-col gap-8 pr-10">
                <h2 className="text-gray-600 font-bold text-xs font-poppins">User Sponsors</h2>
                <div className="flex flex-col gap-8">
                    <h1 className="text-gray-600 font-bold text-base font-poppins">Overview</h1>
                    <div className="flex flex-row gap-6">
                        <AdvertiserTables tableSize = {"small"} tableName={"Handles"} list ={handleList} createHandle={createHandle} createAdvertiser={createAdvertiser} />
                        <AdvertiserTables tableSize = {"big"} tableName={"Advertisers"} list ={advertiserList} createHandle={createHandle} createAdvertiser={createAdvertiser}/>
                    </div>
                    
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {advertiserList.map((item) => (
                        <div key={item.id} className=" ">
                        <AdvertiserTables tableSize = {"medium"} tableName={item.name} list ={advertiserList} createAssets={createAssets}/>
                        </div>
                    ))}
                </div>
            </div>
           
        </DashboardLayout>
         {createHandlePopup ? <CreateHandlePopup createHandle={createHandle} /> : null}
         {createAdvertiserPopup ? <CreateAdvertiserPopup  createAdvertiser= {createAdvertiser}/> : null}
         {createAssetsPopup ? <CreateAssetsPopup createAssets= {createAssets}/> : null}
         </div>
    )
}
export default Advertisers;