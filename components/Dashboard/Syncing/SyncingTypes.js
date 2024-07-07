import React from 'react'


const SyncTheme = () => {

    return (
        <div className='py-5 font-bold text-textGray flex flex-col gap-4'>
            <h5 className="text-xs">Sync Theme</h5>
            <h4 className="text-base">Requests</h4>
        </div>
    );
}


const SyncSpecific = () => {
    
        return (
            <div className='py-5 font-bold text-textGray flex flex-col gap-4'>
                <h5 className="text-xs">Sync Specific</h5>
                <h4 className="text-base">Requests</h4>
            </div>
        );
    }   


export  { SyncTheme , SyncSpecific}