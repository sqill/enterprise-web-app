import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { GoKebabHorizontal } from "react-icons/go";

const CreateHandlePopup = (props) => {

    const [chosenHandleImage, setChosenHandleImage] = useState(null);


    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center 	
        bg-white bg-opacity-60 z-20">
            <div className="w-1/3 min-w-min h-4/6 flex items-center justify-center bg-white border-2 p-4 shadow-2xl rounded-3xl" >
                <div className="flex flex-col w-full p-4 h-full justify-between">  
                    
                    <div>
                        {props.type !=="assets" ? ( <span onClick={() => props.createHandle()} className="text-gray-500  w-full flex justify-end w-3.5 h-3.5 cursor-pointer"><RxCross2 /></span> )
                        : (<span onClick={() => props.createAssets()} className="text-gray-500  w-full flex justify-end w-3.5 h-3.5 cursor-pointer"><RxCross2 /></span> ) }</div>
                    <div className="flex flex-col items-center justify-between h-full">
                        
                        <span className="rounded-3xl h-20 w-20 flex  justify-center items-center border border-gray-300 p-1 ">
                            {chosenHandleImage !== null ? (
                                <img src={chosenHandleImage} alt="Your Alt Text" className="rounded-full" />
                            ) : (
                               
                                    <span className="text-gray-500 font-poppins text-xs text-center"> {props.type === "assets" ? "Add New Asset"   : "Add New Handle" }</span>
                              
                            )}
                        </span>
                        <h1 className="text-sm font-poppins text-gray-400 font-bold">{props.type === "assets" ? "Add a New Asset"   : "Add a New Handle" }</h1>
                        <div className="flex flex-col items-start w-9/12">
                            <label className="text-gray-400 font-poppins text-base font-normal  tracking-wide">{props.type === "assets" ? "Asset name"   : "Handle name" }</label>
                            <input type="text" className="border border-gray-200 rounded-3xl w-full h-10 px-5 border-1 text-gray-900 sm:text-sm  focus:ring-greenSqill-500 focus:border-greenSqill-500 block" />
                        </div>
                            {props.type ==="assets" ? (
                                <div className="flex flex-col items-start  w-9/12">
                                    <label className="text-gray-400 font-poppins text-base font-normal  tracking-wide">Asset Type</label>
                                    <input type="text" className="border border-gray-200 rounded-3xl w-full h-10 px-5 border-1 text-gray-900 sm:text-sm  focus:ring-greenSqill-500 focus:border-greenSqill-500 block" />

                                </div>
                            ) : (<div className="flex flex-col items-start gap-4 w-9/12">
                                    <label className="text-gray-400 font-poppins text-base font-normal  tracking-wide">Engagement Potential</label>
                                    <div className="flex gap-2 w-full flex justify-between">
                                    <div className="flex gap-2 items-center" >
                                        <label className="text-gray-400 font-poppins text-base font-normal  tracking-tighter"for="minValue">Min</label>
                                        <select className=" border border-gray-200 rounded-3xl border-1 text-gray-900 sm:text-sm  focus:ring-greenSqill-500 focus:border-greenSqill-500 block" id="minValue">             
                                            <option className="font-poppins text-base font-normal"  value="0">0</option>
                                            <option className="font-poppins text-base font-normal"  value="5000">5000</option>
                                            <option className="font-poppins text-base font-normal"  value="10000">10000</option>
                                            <option className="font-poppins text-base font-normal"  value="15000">15000</option>     
                                        </select>
                                        </div>

                                        <div className="flex items-center gap-2">
                                        <label className="text-gray-400 font-poppins text-base font-normal  tracking-tighter" for="maxValue">Max</label>
                                        <select className="border border-gray-200 rounded-3xl text-base font-poppins border-1 text-gray-900 sm:text-sm  focus:ring-greenSqill-500 focus:border-greenSqill-500 block" id="maxValue">     
                                            <option className="font-poppins text-base font-normal" value="0">0</option>
                                            <option className="font-poppins text-base font-normal"  value="10000">10000</option>
                                            <option className="font-poppins text-base font-normal"  value="20000">20000</option>
                                            <option className="font-poppins text-base font-normal"  value="30000">30000</option>
                                        </select>
                                    </div>
                                </div>
                            </div> )}
                        <div className="flex flex-col gap-2 w-9/12">
                            
                            <h1 className="font-poppins text-base font-normal text-gray-400 ">{props.type === "assets" ? "Asset File"   : "Handle Avatar" }</h1>
                            
                            <div className="flex gap-2 w-full h-16 items-center">
                                <img className="w-16" src="/images/add_image.png"></img>
                                <div className=" flex flex-col items-center border border-gray-200 rounded-3xl p-4 justify-center text-center">
                                    <p className="text-xs font-poppins text-gray-400 font-normal"><span className="text-black">Click to Upload</span> or drag and drop</p>
                                    <p className=" text-xs font-poppins text-gray-400 font-normal ">PNG files with transparent background (max. 1080X1080px)</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-2/5 min-w-min font-poppins text-xs font-normal  flex items-center w-40 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-3xl   text-white text-center font-poppins text-xs font-normal cursor-pointer ">Add Handle</button>
                    </div>
                
                </div>

            </div>
        </div>
    );
};
const CreateAdvertiserPopup = (props) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center 	
        bg-white bg-opacity-60 z-20">
            <div className="w-1/3 min-w-min h-2/5 flex items-center justify-center bg-white border-2   z-30 shadow-2xl  rounded-3xl" >
                <div className="flex flex-col w-full p-4 h-full justify-between">
                    <div><span onClick={() => props.createAdvertiser()} className="text-gray-500  w-full flex justify-end w-3.5 h-3.5 cursor-pointer"><RxCross2 /></span></div>
                    <div className="flex flex-col items-center justify-between h-full">
                        <h1 className="text-gray-400 font-bold text-sm  font-poppins">Create Advertiser</h1>
                        
                        <div className='flex flex-col w-9/12'>
                            <label className="text-gray-400 font-poppins text-base font-normal  tracking-wide">Advertiser Name</label>
                            <input type="text" className="border border-gray-200 rounded-3xl w-full h-10 px-5 border-1 text-gray-900 sm:text-sm  focus:ring-greenSqill-500 focus:border-greenSqill-500 block " />
                        </div>
                        <div className="flex flex-col w-9/12">
                            <label className="text-gray-400 font-poppins text-base font-normal  tracking-wide">Advertiser Email</label>
                            <input type="text" className="border border-gray-200 rounded-3xl w-full h-10 px-5border-1 text-gray-900 sm:text-sm  focus:ring-greenSqill-500 focus:border-greenSqill-500 block" />
                        </div>
                        <button className="w-2/5 min-w-min font-poppins text-xs font-normal  flex items-center w-40 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-3xl   text-white text-center font-poppins text-xs font-normal cursor-pointer ">Add Advertiser</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CreateAssetsPopup = (props) => {
    return (
        <CreateHandlePopup type="assets" createAssets={props.createAssets}/>
    )
    }


const ListAssetsPopup = (props) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center 	
            bg-white bg-opacity-60 z-20">
                <div className="w-3/5 min-w-min h-3/5 flex items-center justify-center bg-gray-100 border-2   z-30 shadow-2xl  rounded-3xl" >
                    <div className="flex flex-col gap-8 w-full h-full p-4 ">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-4">
                                <h1 className="text-gray-400 font-bold text-base  font-poppins">{props.advertiserName} Assets</h1>
                                <span className="rounded-full bg-gray-400 w-4 h-4 flex items-center justify-center text-white text-center font-roboto text-xs font-bold leading-normal tracking-tight">i</span>
                            </div>
                            <div className="border border-green-600 w-1/4 rounded-3xl bg-white h-10 flex items-center z-40" >
                                <img src=""></img>
                                <input className="w-full border border-green-600 rounded-3xl bg-white h-10 z-50 "/>
                             </div> 
                            <div><span onClick={() => props.listAssets()} className="text-gray-500  w-full flex justify-end w-3.5 h-3.5 cursor-pointer"><RxCross2 /></span></div>
                        </div>

                        <div className="flex h-5/6 gap-6 flex-col items-center px-2 ">
                            <div className="flex px-2 w-4/5 items-center">
                                <h1 className="w-1/6 flex items-center justify-center text-gray-500 text-center font-poppins text-sm font-bold">Element ID</h1>
                                <h1 className="w-1/5 flex items-center justify-center text-gray-500 text-center font-poppins text-sm font-bold">Type</h1>
                                <h1 className="w-1/3 flex items-center justify-center text-gray-500 text-center font-poppins text-sm font-bold"> Name</h1>
                                <h1 className="w-1/5 flex items-center justify-center text-gray-500 text-center font-poppins text-sm font-bold">Thumbnail</h1>
                                <h1 className="w-1/6 flex items-center justify-center text-gray-500 text-center font-poppins text-sm font-bold" >Action</h1>
                            </div>
                            <div className="flex w-full justify-center items-center">
                                <AssetsRow/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                        <button   onClick={(e) => {e.stopPropagation(); // Stop the event propagation
                                                    props.createAssets();
                                                    }}className="z-20 flex items-center w-11 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-full text-center cursor-pointer text-2xl">+</button>

                        </div>

                    </div>
                </div>
ja a

        </div>
    )
}

const AssetsRow = (props) => {

    const [kebabPopupOpen, setKebabPopupOpen] = useState(false);
    
    const handleKebabPopup = () => {
        setKebabPopupOpen(!kebabPopupOpen);
        console.log(kebabPopupOpen)
    }

    return (
        <div className="flex justify-between w-4/5 bg-white rounded-full px-2 h-16 ">
            <span className="w-1/6 flex items-center justify-center text-gray-400 text-center font-poppins text-xs font-bold">1</span>
            <span className="w-1/5 flex items-center justify-center text-gray-400 text-center font-poppins text-xs font-bold">Image</span>
            <span className="w-1/3 flex items-center justify-center text-gray-400 text-center font-poppins text-xs font-bold">Image 1</span>
            <span className="w-1/5 flex items-center justify-center text-gray-400 text-center font-poppins text-xs font-bold">Image 1</span>
            <span className="w-1/6 flex items-center justify-center text-gray-400 text-center font-poppins text-xs font-bold "  >
                <span className="relative text-gray-500 cursor-pointer"  ><GoKebabHorizontal onClick={() => {handleKebabPopup()}}  /> 
                {kebabPopupOpen && (
                    <div className="absolute z-50 top-full left-full transform -translate-x-full bg-white shadow-md pl-2 pr-5 py-2 rounded-md">
                        <div className="w-full h-full flex flex-col text-left gap-2 ">
                            <span className="text-xs text-gray-500 font-poppins font-normal cursor-pointer">View</span>
                            <span className="text-xs text-gray-500 font-poppins font-normal cursor-pointer">Edit</span>
                            <span className="text-xs text-gray-500 font-poppins font-normal cursor-pointer">Delete</span>
                        </div>
                    </div>
            )}</span>
                </span>
        </div>
      
    )

}
export { CreateAdvertiserPopup, CreateHandlePopup, CreateAssetsPopup, AssetsRow, ListAssetsPopup };