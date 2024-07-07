import React, { useState } from "react";
import DashboardLayout from "../../components/Dashboard/Layout";

import SyncRequest from "../../components/Dashboard/Syncing/SyncRequest";
import {SyncTheme, SyncSpecific } from "../../components/Dashboard/Syncing/SyncingTypes";

export default function CreatorsSync() {

    const [requestType, setRequestType] = useState('Theme')

    return (
        <>
            <DashboardLayout hideFooter>
                <div className='py-5 font-bold text-textGray flex flex-col gap-4'>
                    <h5 className="text-xs">Creator Sync</h5>
                    <h4 className="text-base">Requests</h4>
                    <SyncRequest />
                </div>
            </DashboardLayout>
            {requestType === 'Theme' ? <SyncTheme /> : <SyncSpecific />}
        </>
    );
    }