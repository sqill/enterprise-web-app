import react from 'react';
import { GoKebabHorizontal } from "react-icons/go";
 
const TablesHeader = (props) => {

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <h1 className="text-gray-400 font-bold text-base  font-poppins">{props.title}</h1>
                <span className="rounded-full bg-gray-400 w-4 h-4 flex items-center justify-center text-white text-center font-roboto text-xs font-bold leading-normal tracking-tight">i</span>
            </div>
            <GoKebabHorizontal className="text-gray-500"/>
        </div>
    )

}

export default TablesHeader;