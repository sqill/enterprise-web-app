import react , { useState, useEffect } from 'react'
import DashboardLayout from '../../components/Dashboard/Layout'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { MdOutlineArrowBackIos } from "react-icons/md"
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Email2Sponsor = (props) => {

    const adsList = [{
        "id": 1,
        "sponsor": "pantene",
        "email": "pantene@gmail.com",
        "day": "27/10/2023",
        "status": "active",
        "handle" : [
            {
            "id":1,
            "name": "morangos com acucar",
            "image": "https://i.imgur.com/ozR5nEb.png",
                        
            "category": [
                {
                    "id": 1,
                    "type": "post-roll",
                    "cpm": 0.2,
                    "day": "27/10/2023",
                },
                {
                    "id": 2,
                    "type": "pre-roll",
                    "cpm": 0.2,
                    "day": "27/10/2023",
                },
                {
                    "id": 3,
                    "type": "logo",
                    "cpm": 0.2,
                    "day": "27/10/2023",
                },
                {
                    "id": 4,
                    "type": "layer",
                    "cpm": 0.2,
                    "day": "27/10/2023",
                }
            ]
            
            }
        ]
    },
    {
        "id": 2,
        "sponsor": "loreal",
        "email": "loreal@gmail.com",
        "day": "24/11/2023",
        "status": "active",
        "handle" : [
            {
            "id":1,
            "name": "big brother",
            "image": "https://i.imgur.com/2mg1wfs.png",
            "category" : [
                {
                    "id": 1,
                    "type": "post-roll",
                    "cpm": 0.2,
                    "day": "27/10/2023",
                },
                {
                    "id": 2,
                    "type": "pre-roll",
                    "cpm": 0.2,
                    "day": "27/10/2023",
                },
               
            ]
            }
        ]
    },
    {
        "id": 3,
        "sponsor": "sony",
        "email": "sony@gmail.com",
        
        "day": "10/11/2023",
        "status":"over",
        "handle" : [
            {
            "id":1,
            "name": "somos portugal",
            "image": "https://i.imgur.com/YcqRuEn.png",
            "category" : [
                {
                    "id": 1,
                    "type": "post-roll",
                    "cpm": 0.2,
                    "day": "27/10/2023",
                },
                
            ]	
            
            }
        ]
    }
    ]



    return (
        
        <div className="w-full h-screen bg-white">
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center 	
            bg-white bg-opacity-60 z-20 min-w-min min-h-min">
            <div className=" w-3/4 h-3/5 bg-white border-2 z-30 shadow-xl rounded-3xl py-8 px-12 flex flex-col items-center min-w-min min-h-min">
                <div className="flex w-full justify-center mb-12  ">
                    <h1 className="font-poppins text-base font-bold text-gray-500 ">You’re about to bid for a partnership Social Media Ad</h1>
                </div>
                <div className="flex items-center w-4/5 px-4 py-2 min-w-min min-h-min " >
                    <div className="flex justify-between items-center w-full">
                        <span className="w-1/12 ">
                        </span>
                        <h1 className="text-sm font-base text-gray-400 w-1/6 text-center">BRAND/HANDLE</h1>
                        <h1 className="text-sm font-base text-gray-400 w-1/6 text-center">TYPE</h1>
                        <h1 className="text-sm font-base text-gray-400 w-1/6 text-center">DAY</h1>
                        <h1 className="text-sm font-base text-gray-400 w-1/6 text-center">QUANTITY</h1>
                        <h1 className="text-sm font-base text-gray-400 w-1/6 text-center">CPM</h1>

                    </div>
                </div>
                <div className="w-4/5 flex-col gap-4 flex mb-4">

                    {adsList.map((item) => (
                        <div key={item.id}>
                            <Email2SponsorRow item={item}/>
                        </div>
                    ))}



                 
                    
                </div>    
                <button className="flex items-center mb-12 px-4 py-2 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-full text-center cursor-pointer text-2xl ">+</button>    

                <span className="font-poppins text-base font-bold text-gray-500 mb-3">Global estimation of reach of cost</span>
                <span className="font-poppins text-base font-medium text-black mb-1">100.00 Reach</span>
                <span className="font-poppins text-xl font-bold text-black mb-2 ">350.00 €</span>
                <button className="flex items-center  gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-full text-center cursor-pointer text-sm font-base px-12 py-1 ">BID</button>
            </div>

            </div>
        </div>
    )
}


const Email2SponsorRow = (props) => {

    const item = props.item
    const [openRow, setOpenRow] = useState(false)
    const [openCalendar, setOpenCalendar] = useState(false)
    const [isMultiple, setIsMultiple] = useState(false)

    const handleOpenRow = () => {
        setOpenRow(!openRow)
    }

    const handleOpenCalendar = () => {  
        console.log("open calendar")
        setOpenCalendar(!openCalendar)
    }

    useEffect(() => {
        if (item.handle[0].category.length > 1) {
            setIsMultiple(true);
        }
    }, []);


    return (
        <div className="flex flex-col justify-between items-center w-full px-4 py-2 min-w-min min-h-min rounded-3xl border border-gray-400" onClick={handleOpenRow}>
            {!openRow ?  (
            <div className="flex justify-between items-center w-full ">
                <span className="w-1/12 ">
                {openRow ? (<IoIosArrowDown className="text-base text-gray-400"/> ) : (<IoIosArrowUp className="text-base text-gray-400"/>)}</span>
                <h1 className="w-1/6 text-sm font-base text-gray-400 text-center">{item.handle[0].name}</h1>
                {isMultiple ? (<h1 className="text-sm font-base text-black w-1/6 text-center">Multiple</h1>) : 
                (<h1 className="text-sm font-base text-gray-400 w-1/6 text-center">{item.handle[0].category[0].type}</h1>)}

                {isMultiple ? (<h1 className="text-sm font-base text-black w-1/6 text-center">Multiple</h1>) : 
                (<h1 className="text-sm font-base text-gray-400 w-1/6 text-center relative" onClick={(e) => {e.stopPropagation(); // Stop the event propagation
                                                                                                    handleOpenCalendar();
                                                                                                    }}>{item.handle[0].category[0].day}</h1>)}
                {isMultiple ? (<h1 className="text-sm font-base text-gray-400 w-1/6 text-center">{item.handle[0].category.length}</h1>) : 
                (<h1 className="text-sm font-base text-gray-400 w-1/6 text-center">1</h1>)}
                 {isMultiple ? (<h1 className="text-sm font-base text-black w-1/6 text-center">Multiple</h1>) : 
                (<h1 className="text-sm font-base text-black w-1/6 text-center">{item.handle[0].category[0].cpm} €</h1>)}
              
            
            </div>
                        
            ) : (
            <div className="min-h-min w-full flex flex-col">
                <div className="w-full flex justify-between items-center">
                    <span className="w-1/12 ">{openRow ? (<IoIosArrowDown className="text-base text-gray-400"/> ) : (<IoIosArrowUp className="text-base text-gray-400"/>)}</span>
                    <h1 className="w-1/6 text-sm font-base text-gray-400 text-center">{item.handle[0].name}</h1>
                    <span className="w-1/6"></span>
                    <span className="w-1/6"></span>
                    <span className="w-1/6"></span>
                    <span className="w-1/6"></span>
                </div>
                {item.handle[0].category.map((category) => (
                    <div className="w-full flex justify-between items-center">
                        <span className="w-1/12"></span>
                        <span className="w-1/6"></span>
                        <h1 className="text-sm font-base text-gray-400 w-1/6 text-center">{category.type}</h1>
                        <h1 className="text-sm font-base text-gray-400 w-1/6 text-center">{category.day}</h1>
                        <h1 className="text-sm font-base text-gray-400 w-1/6 text-center">1</h1>
                        <h1 className="text-sm font-base text-gray-400 w-1/6 text-center">{category.cpm} €</h1>
                    </div>
                ))}


            </div>       )}
            
            {openCalendar ? (<Email2SponsorCalendar handleOpenCalendar={handleOpenCalendar} />) : null}
        </div>
    )
}


const Email2SponsorCalendar = (props) => {

    console.log("adsdsadas")
    return (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-40">
            <div className="flex flex-col w-1/3 h-1/2  gap-4 items-center rounded-3xl border border-gray-300 bg-white shadow-lg p-6">
                <div className="w-full flex justify-end">
                    <button className="text-gray-400 text-sm font-base cursor-pointer" onClick={(e) => {e.stopPropagation(); // Stop the event propagation
                                                                                        props.handleOpenCalendar();
                                                                                        }}><RxCross2 /></button>
                </div>
                <div className="flex flex-col justify-start items-center h-full w-4/5">
                    <div className="flex justify-center gap-4 items-center h-1/12 ">
                        <span><MdOutlineArrowBackIos className="text-gray-400 text-base"/></span>
                        <span className="text-base font-base text-gray-400 ">Current Month</span>
                        <span><MdOutlineArrowForwardIos className="text-gray-400 text-base"/></span>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>

                </div>
            </div>  
        </div>
    ) 
}


export default Email2Sponsor;