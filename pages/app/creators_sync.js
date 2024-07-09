import React, {useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/Layout";

import {SyncRequest, ChooseCreators, TypeChanger, SyncSecondContainer, Calendar, TextInput} from "../../components/Dashboard/Syncing/SyncRequest";
import {SyncTheme, SyncSpecific } from "../../components/Dashboard/Syncing/SyncingTypes";

export default function CreatorsSync() {

    const [requestType, setRequestType] = useState('Theme')
    const [sendAll, setSendAll] = useState('Send to all')
    const [sendRequest, setSendRequest] = useState(false)
    

    


    return (
        <div className="relative">
            <DashboardLayout hideFooter >
                <div className='py-5 font-bold text-textGray flex flex-col gap-4 pr-5 '>
                    <h5 className="text-xs">Creator Sync</h5>
                    <h4 className="text-base">Requests</h4>
                    <SyncRequest 
                        setRequestType={setRequestType} 
                        requestType={requestType} 
                        sendAll={sendAll} 
                        setSendAll={setSendAll}
                        setSendRequest={setSendRequest}
                    />
                </div>
            </DashboardLayout>
            {sendRequest && (
                requestType === 'Theme' ? <SyncTheme /> : <SyncSpecific />
            )}
        </div>
    );
    }