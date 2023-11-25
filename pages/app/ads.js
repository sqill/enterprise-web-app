import react from 'react'
import DashboardLayout from '../../components/Dashboard/Layout';
import { GoKebabHorizontal } from "react-icons/go";
import { AssetsRow } from '../../components/CreateAdvertiserPagePopups';
import TablesHeader  from '../../components/TablesHeader';
import CpmCard from '../../components/CpmCard';


const ads = () => {

    const adsList = [{
        "id": 1,
        "sponsor": "pantene",
        "email": "pantene.com",
        "handle": "Morangos",
    }]


    return (
        <div>
        <DashboardLayout hideFooter selectedPage={"ads"}>
            <div className="flex flex-col gap-8 pr-10 pb-4">
                <h2 className="text-gray-400 font-bold text-xs font-poppins">User Ads</h2>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-gray-500 font-bold text-base font-poppins">Overview</h1>
                        <button className=" min-w-min font-poppins text-xs font-normal  flex items-center w-40 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-3xl   text-white text-center font-poppins text-xs font-normal cursor-pointer ">Send Report</button>
                    </div>
                    <div className="flex flex-col bg-gray-100 border-gray-200 rounded-3xl w-full px-5 pt-5 pb-8 gap-8" style={{height: "50vh"}}  >
                        <div>
                            <TablesHeader title="Ads"/>
                        </div>
                
                        <div className="flex flex-col gap-4 w-full">
                            {adsList.map((item) => (
                                <div key={item.id} className=" ">
                                    <AssetsRow rowType="ads"  />
                                </div>
                            ))}
                        </div>
            
                    </div>
                    <div className="flex flex-col bg-gray-100 border-gray-200 rounded-3xl w-full px-5 pt-5 pb-8 gap-8" style={{height: "40vh"}}  >
                        <div>
                            <TablesHeader title="Cpm"/>
                        </div>
                        <div className="flex flex gap-4 w-full h-full">
                            <CpmCard />
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
        
         </div>
    )
}

export default ads