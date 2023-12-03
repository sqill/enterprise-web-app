import react, { useState } from 'react'
import DashboardLayout from '../../components/Dashboard/Layout';
import { GoKebabHorizontal } from "react-icons/go";
import { AssetsRow } from '../../components/AdvertisersAdsPagesPopups';
import TablesHeader  from '../../components/TablesHeader';
import CpmCard from '../../components/CpmCard';
import { sendPaperPlane } from '../../public/images/send_paper_plane.svg'
import { ListAssetsPopup } from '../../components/AdvertisersAdsPagesPopups';
import { AdsPageMiniPopups } from '../../components/AdvertisersAdsPagesPopups';
import { EmailConfirmationPopup,  BiddingConfirmation } from '../../components/BidPopups';

import { GrSend } from "react-icons/gr";

const ads = () => {

    const adsList = [{
        "id": 1,
        "sponsor": "pantene",
        "email": "pantene@gmail.com",
        "day": "27/10/2023",
        "status": "active",
        "handle" : [
            {
            "id":1,
            "name": "morangos com acucar",
            "image": "https://i.imgur.com/ozR5nEb.png",
            "post_roll": 0.2,
            "pre_roll": 0.2,
            "logo": 0.2,
            "layer":  0.2,
            }
        ]
    },
    {
        "id": 2,
        "sponsor": "loreal",
        "email": "loreal@gmail.com",
        "day": "24/11/2023",
        "status": "active",
        "handle" : [
            {
            "id":1,
            "name": "big brother",
            "image": "https://i.imgur.com/2mg1wfs.png",
            "post_roll": 0.2,
            "pre_roll": 0.2,
            "logo": 0.2,
            "layer":  0.2,
            }
        ]
    },
    {
        "id": 3,
        "sponsor": "sony",
        "email": "sony@gmail.com",
        
        "day": "10/11/2023",
        "status":"over",
        "handle" : [
            {
            "id":1,
            "name": "somos portugal",
            "image": "https://i.imgur.com/YcqRuEn.png",
            "post_roll": 0.2,
            
            }
        ]
    }
    ]
    const [listAdsPopup, setListAdsPopup] = useState(false)
    const [sendReportPopup, setSendReportPopup] = useState(false)
    const [confirmCPMPopup, setConfirmCPMPopup] = useState(false)
    const [testPopups, setTestPopups] = useState(false)

    const listAdsFunction = () => {
        setListAdsPopup(!listAdsPopup)	
    }
    const handleReportPopup = () => {
        setSendReportPopup(!sendReportPopup)
        console.log("send report")
    }
    const handleconfirmCpmPopup = () => {
        setConfirmCPMPopup(!confirmCPMPopup)
        console.log("confirm cpm")
    }

    const handleTestPopups = () => {
        setTestPopups(!testPopups)
    }


    return (
        <div>
        <DashboardLayout hideFooter selectedPage={"ads"}>
            <div className="flex flex-col gap-8 pr-10 pb-4">
                <h2 className="text-gray-400 font-bold text-xs font-poppins" onClick={handleTestPopups}>User Ads</h2>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-gray-500 font-bold text-base font-poppins">Overview</h1>
                        <button className=" min-w-min font-poppins text-xs font-normal  flex items-center gap-2 w-40 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-3xl   text-white text-center font-poppins text-xs font-normal cursor-pointer " onClick= {handleReportPopup}> <GrSend className="w-4 h-4" /> Send Report</button>
                    </div>
                    <div className="flex flex-col bg-gray-100 border-gray-200 rounded-3xl w-full px-5 pt-5 pb-8 gap-8 cursor-pointer" style={{height: "50vh"}}  onClick={listAdsFunction}>
                        <div>
                            <TablesHeader title="Ads"/>
                        </div>
                
                        <div className="flex flex-col gap-4 w-full ">
                            {adsList.map((item) => (
                                <div key={item.id} className=" ">
                                    <div className="flex items-center bg-white w-full rounded-full px-8 h-16">
                                        <div className="flex w-full items-center">
                                            <div className="w-1/4 flex items-start">
                                                <span className={`  h-8 w-8 rounded-full  ${item.status ==="active" ? 'gradient ' : 'red-gradient'}`}></span>
                                            </div>
                                            <div className="w-3/4 flex">
                                                <span className="w-1/3 flex items-start text-gray-400 text-center font-poppins text-sm font-bold">{item.sponsor}</span>
                                                <span className="w-1/3 flex items-start text-gray-400 text-center font-poppins text-sm font-base">{item.email}</span>
                                                <span className="w-1/3 flex items-start text- text-gray-400 text-center font-poppins text-sm font-base">{item.handle.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
            
                    </div>
                    <div className="flex flex-col bg-gray-100 border-gray-200 rounded-3xl w-full px-5 pt-5 pb-8 gap-8" style={{height: "40vh"}} onClick={handleconfirmCpmPopup} >
                        <div>
                            <TablesHeader title="Cpm"/>
                        </div>
                        <div className="flex flex gap-4 w-full h-full">
                        {adsList.map((item) => (
                                <div key={item.id} style={{width: "22%"}}>
                                     <CpmCard item={item}/>
                                </div>
                            ))}
  
                        </div>
                    </div>
                    <div className="flex flex-col bg-gray-100 border-gray-200 rounded-3xl w-full px-5 pt-5 pb-8 gap-8" style={{height: "50vh"}}>
                        <div>
                            <TablesHeader title="Ad Proposition"/>
                        </div>
                        
                        <div className="w-full h-full flex justify-center">
                            <div className="w-3/5 flex flex-col justify-between">
                                <div className="flex flex-col items-startg gap-2">
                                    <label className="text-gray-400 font-poppins text-base font-normal  tracking-wide">Subject</label>
                                    <input placeholder="Write your subject" type="text" className="border border-gray-200 rounded-3xl w-full h-10 px-5 border-1 text-gray-900 sm:text-sm  focus:ring-greenSqill-500 focus:border-greenSqill-500 block" />
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <label className="text-gray-400 font-poppins text-base font-normal  tracking-wide">Message</label>
                                    <textarea placeholder="Text" className="border border-gray-200 rounded-3xl w-full h-40 px-5 border-1 text-gray-900 sm:text-sm  focus:ring-greenSqill-500 focus:border-greenSqill-500 block" />

                                </div>
                                <div className="flex justify-center">
                                    <button className="w-2/6 min-w-min font-poppins text-xs font-normal  flex items-center w-40 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-3xl   text-white text-center font-poppins text-xs font-normal cursor-pointer">
                                        Send to All
                                    </button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                
            </div>
           
        </DashboardLayout>

        {listAdsPopup ? <ListAssetsPopup type="adsList" listAdsFunction={listAdsFunction} adsList={adsList}/> : null}
        {sendReportPopup ? <AdsPageMiniPopups handleReportPopup={handleReportPopup} adsList={adsList} type="sendReport"/> : null}
        {confirmCPMPopup ? <AdsPageMiniPopups handleConfirmCpmPopup={handleconfirmCpmPopup} type="confirmCpms"/> : null}
        {testPopups ? <BiddingConfirmation /> : null}

         </div>
    )
}

export default ads