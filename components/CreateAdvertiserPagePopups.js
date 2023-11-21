import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const CreateHandlePopup = (props) => {

    const [chosenHandleImage, setChosenHandleImage] = useState(null);


    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center 	
        bg-white bg-opacity-60 z-20">
            <div className="w-1/3 min-w-min h-3/5 flex items-center justify-center bg-white border-2 p-4 shadow-2xl rounded-3xl" >
                <div className="flex flex-col w-full p-4 h-full justify-between">  
                    <div><span onClick={() => props.createHandle()} className="text-gray-500  w-full flex justify-end w-3.5 h-3.5 cursor-pointer"><RxCross2 /></span></div>
                    <div className="flex flex-col items-center justify-between h-full">
                        <span className="rounded-3xl h-20 w-20 flex flex-col justify-center items-center border border-gray-300 p-1 ">
                            {chosenHandleImage !== null ? (
                                <img src={chosenHandleImage} alt="Your Alt Text" className="rounded-full" />
                            ) : (
                                <span className="text-gray-500 font-poppins text-xs">Add Image</span>
                            )}
                        </span>
                        <h1 className="text-xs font-poppins text-gray-500 font-bold">Add a New Handle</h1>
                        <div className="flex flex-col items-start w-9/12">
                            <label className="text-gray-500 font-poppins text-base font-normal  tracking-wide">Handle Name</label>
                            <input type="text" className="border border-gray-200 rounded-3xl w-full h-10 px-5 hover:gradient" />
                        </div>
                            <div className="flex flex-col items-start gap-4 w-9/12">
                                <label className="text-gray-500 font-poppins text-base font-normal  tracking-wide">Engagement Potential</label>
                                <div className="flex gap-2 w-full flex justify-between">
                                <div className="flex gap-2 items-center" >
                                    <label className="text-gray-500 font-poppins text-base font-normal  tracking-tighter"for="minValue">Min</label>
                                    <select className=" border border-gray-200 rounded-3xl" id="minValue">             
                                        <option className="font-poppins text-base font-normal"  value="0">0</option>
                                        <option className="font-poppins text-base font-normal"  value="5000">5000</option>
                                        <option className="font-poppins text-base font-normal"  value="10000">10000</option>
                                        <option className="font-poppins text-base font-normal"  value="15000">15000</option>     
                                    </select>
                                    </div>

                                    <div className="flex items-center gap-2">
                                    <label className="text-gray-500 font-poppins text-base font-normal  tracking-tighter" for="maxValue">Max</label>
                                    <select className="border border-gray-200 rounded-3xl text-base font-poppins" id="maxValue">     
                                        <option className="font-poppins text-base font-normal" value="0">0</option>
                                        <option className="font-poppins text-base font-normal"  value="10000">10000</option>
                                        <option className="font-poppins text-base font-normal"  value="20000">20000</option>
                                        <option className="font-poppins text-base font-normal"  value="30000">30000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-9/12">
                            <h1 className="font-poppins text-base font-normal text-gray-500 ">Handle Avatar</h1>
                            <div className="flex gap-2 w-full h-16 items-center">
                                <img className="w-16" src="/images/add_image.png"></img>
                                <div className=" flex flex-col items-center border border-gray-200 rounded-3xl p-4 justify-center text-center">
                                    <p className="text-xs font-poppins text-gray-500 font-normal"><span className="text-black">Click to Upload</span> or drag and drop</p>
                                    <p className=" text-xs font-poppins text-gray-500 font-normal ">PNG files with transparent background (max. 1080X1080px)</p>
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
                        <h1>Create Advertiser</h1>
                        
                        <div className='flex flex-col w-9/12'>
                            <label className="text-gray-500 font-poppins text-base font-normal  tracking-wide">Advertiser Name</label>
                            <input type="text" className="border border-gray-200 rounded-3xl w-full h-10 px-5 hover:gradient" />
                        </div>
                        <div className="flex flex-col w-9/12">
                            <label className="text-gray-500 font-poppins text-base font-normal  tracking-wide">Advertiser Email</label>
                            <input type="text" className="border border-gray-200 rounded-3xl w-full h-10 px-5 hover:gradient" />
                        </div>
                        <button className="w-2/5 min-w-min font-poppins text-xs font-normal  flex items-center w-40 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-3xl   text-white text-center font-poppins text-xs font-normal cursor-pointer ">Add Advertiser</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export { CreateAdvertiserPopup, CreateHandlePopup };