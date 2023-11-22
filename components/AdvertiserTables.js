import react, {useState} from "react"
import { GoKebabHorizontal } from "react-icons/go";


export const AdvertiserTables = (props) => {


    
    const list = props.list
    
    return (
        <div className={`z-10 rounded-lg border border-solid border-gray-200 bg-gray-100  h-96 p-5 flex flex-col justify-between ${props.tableName=="Assets" ? 'cursor-pointer' : ''} ${props.tableSize=="small" ? 'w-1/3' : props.tableSize=="big" ? "w-2/3" : props.tableSize=="medium" ? "w-2/2" : null}`}
            onClick={() => {
                if (props.tableName== "Assets") {
                    props.listAssets()
                }
            }}>
           <div className="flex flex-col gap-4 ">
           <div className="flex justify-between items-center ">
                <div className="flex gap-4 items-center">
                    <h1 className="text-gray-500 font-bold .text-sm  font-poppins">{props.tableHeader}</h1>
                    <span className="rounded-full bg-gray-400 w-4 h-4 flex items-center justify-center text-white text-center font-roboto text-xs font-bold leading-normal tracking-tight">i</span>
                </div>
                <GoKebabHorizontal className="text-gray-500 " />
            </div>
            { props.tableName=="Handles" ? (
            <div className="flex flex-wrap">
                {list.map((item) => (
                 
                        <div key={item.id} className="flex items-center gap-4 w-1/2">
                            <img src={item.image} className=" rounded-3xl" />
     
                        </div>
                   
                ))}
            </div>
            )   : props.tableName=="Advertisers" ? (
                <div className="flex flex-col items-center gap-4">
                {list.map((item) => (
                 
                        <div key={item.id} className="flex px-10 gap-12 rounded-full border border-gray-200 bg-white p-4 w-11/12 h-16">
                            <p className="w-4/12 ">{item.name}</p>
                            <p>{item.email}</p>
                           
     
                        </div>
                   
                ))}
                </div>
            ) : null}
            </div>
            <div className="flex justify-end">
                {props.tableName=="Handles" ? <button onClick={() => props.createHandle()} className="flex items-center w-11 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-full text-4xl  text-center cursor-pointer"><span>+</span></button>
                : props.tableName=="Advertisers" ? <button  onClick={() => props.createAdvertiser()}className="flex items-center w-11 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-full text-4xl  text-center cursor-pointer "><span>+</span></button> 
                : props.tableName=="Assets" ? <button  onClick={() => props.createAssets()}className="z-20 flex items-center w-11 h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-full text-4xl  text-center cursor-pointer "><span>+</span></button>
                : null}
                
            </div>
       
        </div>
       
    )
}