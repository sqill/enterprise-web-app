import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const CreateAdvertiserPopup = (props) => {

    const [chosenHandleImage, setChosenHandleImage] = useState(null);


    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center 	
        bg-white bg-opacity-60 z-20">
            <div className="w-2/6 h-2/4 flex items-center justify-center bg-white border-2  z-30 shadow-2x1 rounded-3xl" >
                <div className="flex flex-col w-full p-4 h-full justify-between">  
                    <div><span onClick={() => props.createAdvertiser()} className="text-gray-500  w-full flex justify-end w-3.5 h-3.5 cursor-pointer"><RxCross2 /></span></div>
                    <div className="flex flex-col items-center justify-between h-full">
                        <h1>Add a New Handle</h1>

                        <div className="flex">
                            <label>Handle Name</label>
                            <input type="text" className="border border-gray-200 rounded-lg w-80 h-10 px-5" />
                        </div>
                            <div className="flex flex-col items-start gap-4">
                                <label>Engagement Potential</label>
                                <div className="flex gap-2">
                                <div>
                                    <label for="minValue">Min</label>
                                    <select id="minValue">             
                                        <option value="0">0</option>
                                        <option value="5000">5000</option>
                                        <option value="10000">10000</option>
                                        <option value="15000">15000</option>     
                                    </select>
                                    </div>

                                    <div>
                                    <label for="maxValue">Max</label>
                                    <select id="maxValue">     
                                        <option value="0">0</option>
                                        <option value="10000">10000</option>
                                        <option value="20000">20000</option>
                                        <option value="30000">30000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Handle Avatar</h1>
                            <div className="flex gap-2">
                                <img></img>
                                <div> </div>
                            </div>
                        </div>
                        <button className="flex items-center w-40 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-3xl   text-white text-center font-poppins text-xs font-normal cursor-pointer ">Add Handle</button>
                    </div>
                
                </div>

            </div>
        </div>
    );
};
const CreateHandlePopup = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center 	
        bg-white bg-opacity-60 z-20">
            <div className="w-2/6 h-3/5 flex items-center justify-center bg-white border-2   z-30 shadow-2xl  rounded-3xl" >


            </div>
        </div>
    );
};
export { CreateAdvertiserPopup, CreateHandlePopup };