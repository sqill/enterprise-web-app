import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';


const LoadingFilesCounter = ({ uploads, setShowLoadingPopup }) => {

    const errorCount = uploads.uploadErrorIndex.length;
    const percentage = (uploads.filesUploaded.length / uploads.totalFiles) * 100;


    

    return (
    <div className="fixed w-screen bg-gray-500 bg-opacity-10 z-50 inset-x-0 top-0 bottom-0 transition-opacity flex items-center justify-center ">
        { !(uploads.filesUploaded.length === uploads.totalFiles) ? (
        <div className="h-2/5 px-6 pt-5 pb-4 sm:p-6 sm:pb-4 shadow-md rounded-xl mx-0 bg-white w-3/5 flex flex-col items-center gap-6 justify-center" >
            <div className="relative inline-flex ">
                <CircularProgress variant="determinate" value={percentage} style={{color: "#9BDFC1"}} size={160} />
                <div className="absolute flex flex-col items-center justify-center w-full h-full top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
                    <p className="font-semibold text-lg font-poppins">{uploads.filesUploaded.length} / {uploads.totalFiles}</p>
                    <p className="font-semibold text-sm text-black font-poppins">Files Uploaded</p>
                </div>
            </div>
            <div className="flex justify-center">
                <h3 className="font-bold text-lg text-black font-poppins">Loading Logos</h3>
                {errorCount > 0 && (
                <p className="text-base text-textGray font-bold mb-6 font-poppins">{errorCount} files failed to upload</p>
                )}
            </div>
        </div>
        ) : (
            <>
                <LoadingFilesList loadedFiles={uploads} setShowLoadingPopup={setShowLoadingPopup}/>
            </>
        )}
    </div>
    );
};


const LoadingFilesList = ({ loadedFiles, setShowLoadingPopup }) => {

    
    const filesWithStatus = loadedFiles.filesUploaded.map((file, index) => {
     
        if (loadedFiles.uploadErrorIndex.includes(index)) {
            let indexOfError = loadedFiles.uploadErrorIndex.indexOf(index)
            let error = loadedFiles.uploadErrorType[indexOfError]
            return {
                id: index,
                status: "error",
                error: error,
                name: file.name
                
            }
        } else {
            return {
                id: index,
                status: "active",
                error: null,
                name: file.data.name,
                image: file.data.asset_thumb_url
            }
        }
    })



    return (
        <div className="flex flex-col bg-gray-100 border-gray-200 rounded-3xl w-9/12 px-5 pt-5 pb-8 gap-8 cursor-pointer overflow-scroll" style={{height: "50vh"}}  >        
            <div className="flex justify-between items-center" >
                <span className="w-1/4"></span>
                <h1 className="w-1/4 flex justify-center items-center text-medium text-textGray font-medium ">Files Uploaded</h1>
                <button className="w-1/4 flex justify-end items-center text-xs font-normal text-containerGray " onClick={() => setShowLoadingPopup(false)}>X</button>
            </div>
            <div className="flex flex-col gap-4 w-full ">

                {filesWithStatus.map((item) => (
                    <div key={item.id} className=" ">
                        <div className="flex items-center bg-white w-full rounded-full px-8 h-16">
                            <div className="flex w-full items-center">
                                <div className="w-1/6 flex items-start">
                                    <span className={`  h-8 w-8 rounded-full  ${item.status ==="active" ? 'gradient ' : 'red-gradient'}`}></span>
                                </div>
                                <div className="w-5/6 flex items-center ">
                                    <span className="w-1/4 flex items-center justify-center text-gray-400 text-center font-poppins text-sm font-bold">{item.error || "uploaded"}</span>
                                    <span className="w-1/2 flex items-center justify-center text-gray-400 text-center font-poppins text-sm font-base">{item.name}</span>
                                    <span className="w-1/4 flex items-center justify-center">
                                        <img src={item.image} alt="uploaded-logo" className="h-10" style={{maxWidth: "4rem"}} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        
    )
}





export default LoadingFilesCounter