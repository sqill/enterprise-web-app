import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';


const LoadingFilesCounter = ({ uploads, setShowLoadingPopup }) => {

    const percentage = (uploads.successfulUploads / uploads.totalFiles) * 100;

    return (
    <div className="fixed w-screen bg-gray-500 bg-opacity-10 z-50 inset-x-0 top-0 bottom-0 transition-opacity flex items-center justify-center">
        <div className="h-2/5 px-6 pt-5 pb-4 sm:p-6 sm:pb-4 shadow-md rounded-xl mx-0 bg-white w-3/5 flex flex-col items-center gap-6 justify-center" >
            <div className="relative inline-flex ">
                <CircularProgress variant="determinate" value={percentage} style={{color: "#9BDFC1"}} size={160} />
                <div className="absolute flex flex-col items-center justify-center w-full h-full top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
                    <p className="font-semibold text-lg">{uploads.successfulUploads} / {uploads.totalFiles}</p>
                    <p className="font-semibold text-sm">Files Uploaded</p>
                </div>
            </div>
            <div className="flex justify-center">
                <h3 className="font-bold text-lg">Loading Logos</h3>
                {uploads.failedUploads > 0 && (
                <p className="text-sm text-textGray font-bold mb-6">{uploads.failedUploads} files failed to upload</p>
                )}
            </div>
        </div>
    </div>
    );
};


const LoadingFilesList = ({ loadedFiles }) => {
    return (
        <div>
            

        </div>
        
    )
}

export default LoadingFilesCounter