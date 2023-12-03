import react from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CpmCard = (props) => {

    const handle = props.item.handle[0]

    return (
        <div className="rounded-3xl bg-white  p-3 h-full" >
            <div className="flex flex-col w-full h-full gap-10">
                <div className="w-full justify-center flex">
                    <span className="rounded-3xl h-20 w-20 flex  justify-center items-center border border-gray-300 p-1 ">
                        <img src={handle.image} alt="handle image" className="rounded-full text-center" />             
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-center font-poppins text-sm font-bold">Post-roll</span>
                        <div className="flex items-center gap-2">
                            <span className="text-blac text-center font-poppins text-sm font-bold">{handle.post_roll} €</span>
                            <MdOutlineKeyboardArrowDown className="text-gray-400"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-center font-poppins text-sm font-bold" >Pre-Roll</span>
                        <div className="flex items-center gap-2">
                            <span className="text-blac text-center font-poppins text-sm font-bold">{handle.pre_roll} €</span>
                            <MdOutlineKeyboardArrowDown className="text-gray-400"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between ">
                        <span className="text-gray-400 text-center font-poppins text-sm font-bold">Logo</span>
                        <div className="flex items-center gap-2">
                            <span className="text-black text-center font-poppins text-sm font-bold">{handle.logo} €</span>
                            <MdOutlineKeyboardArrowDown className="text-gray-400"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between" >
                        <span className="text-gray-400 text-center font-poppins text-sm font-bold">Layer</span>
                        <div className="flex items-center gap-2">
                            <span className="text-black text-center font-poppins text-sm font-bold">{handle.layer} €</span>
                            <MdOutlineKeyboardArrowDown className="text-gray-400"/>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )   


}


export default CpmCard;