import react, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/Dashboard/Layout';
import { AdvertiserTables } from '../../components/AdvertiserTables';
import { CreateAdvertiserPopup,CreateHandlePopup, CreateAssetsPopup, ListAssetsPopup } from '../../components/AdvertisersAdsPagesPopups';


const Advertisers = () => {
    
    const advertiserList = [{
        "id": 1,
        "name": "pantene",
        "image": "https://i.imgur.com/Hq0R0gs.png",
        "email": "pantene@gmail.com",
        "handles": [
            {
                "id": 1,
                "name": "morangos com acucar",
                "image": "https://i.imgur.com/ozR5nEb.png",
                "email": "morangos@gmail.com"
            },
            {
                "id": 2,
                "name": "somos portugal",
                "image": "https://i.imgur.com/YcqRuEn.png",
                "email": "somosportugal@gmail.com"
            }

        ],
        "assets": [
            {
                "id": 1,
                "name": "morangos com acucar",
                "image": "https://i.imgur.com/ozR5nEb.png",
                "email": "asset@gmail.com",
                "type":"Logo",
            }
        
        ]
    }, {
        "id": 2,
        "name": "loreal",
        "image": "",
        "email": "loreal@gmail.com",
        "handles": [
            {
                "id": 1,
                "name": "morangos com acucar",
                "image": "https://i.imgur.com/ozR5nEb.png",
                "email": ""
            }
        ],
        "assets": [
            {
                "id": 1,
                "name": "morangos com acucar",
                "image": "https://i.imgur.com/ozR5nEb.png",
                "email": "",
            }
        
        ]

    }, {
        "id": 3,
        "name": "pantene2",
        "image": "https://i.imgur.com/Hq0R0gs.png",
        "email": "pantene2@gmail.com",
        "handles":[],
        "assets":[]
    }]

    const [createHandlePopup, setCreateHandlePopup] =useState(false)
    const [createAdvertiserPopup, setCreateAdvertiserPopup] = useState(false)
    const [createAssetsPopup, setCreateAssetsPopup] = useState(false)
    const [listAssetsPopup, setListAssetsPopup] = useState(false)
    const [currentAdvertiserId, setCurrentAdvertiserId] = useState(null)

    const createHandle = () => {
        setCreateHandlePopup(!createHandlePopup)
    }
    const createAdvertiser = () => {
        setCreateAdvertiserPopup(!createAdvertiserPopup)
    }
    const listAssetsFunction = (advertiserId) => {
        setCurrentAdvertiserId(advertiserId)
        setListAssetsPopup(!listAssetsPopup)	
        console.log("list assets")
        console.log(advertiserId)
    }

    const createAssets = () => {
        (listAssetsPopup ? setListAssetsPopup(!listAssetsPopup) : null)
        setCreateAssetsPopup(!createAssetsPopup)
    }


    useEffect(() => {
    
    }, [])
    return (
        <div>
        <DashboardLayout hideFooter selectedPage={"advertisers"}>
            <div className="flex flex-col gap-8 pr-10 pb-4">
                <h2 className="text-gray-400 font-bold text-xs font-poppins">User Sponsors</h2>
                <div className="flex flex-col gap-8">
                    <h1 className="text-gray-500 font-bold text-base font-poppins">Overview</h1>
                    <div className="flex flex-row gap-6">
                        <AdvertiserTables tableSize = {"small"} tableName={"Handles"} tableHeader={"Handles"} list ={advertiserList} createHandle={createHandle} createAdvertiser={createAdvertiser} />
                        <AdvertiserTables tableSize = {"big"} tableName={"Advertisers"} tableHeader={"Advertisers"} list ={advertiserList}  createHandle={createHandle} createAdvertiser={createAdvertiser}/>
                    </div>
                    
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {advertiserList.map((item) => (
                        <div key={item.id} className=" ">
                        <AdvertiserTables tableSize = {"medium"} tableName={"Assets"} tableHeader={item.name} list ={advertiserList} currentId={item.id} createAssets={createAssets} listAssets={listAssetsFunction} />
                        </div>
                    ))}
                </div>
            </div>
           
        </DashboardLayout>
         {createHandlePopup ? <CreateHandlePopup createHandle={createHandle} /> : null}
         {createAdvertiserPopup ? <CreateAdvertiserPopup  createAdvertiser= {createAdvertiser}/> : null}
         {createAssetsPopup ? <CreateAssetsPopup createAssets= {createAssets}/> : null}
         {listAssetsPopup ? <ListAssetsPopup listAssets={listAssetsFunction} createAssets={createAssets} type="assetsList" advertiserList={advertiserList} currentAdvertiserId={currentAdvertiserId} /> : null}
         </div>
    )
}
export default Advertisers;