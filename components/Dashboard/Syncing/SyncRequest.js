import React, {useState } from 'react'
import BoxContainer from '../../BoxContainer'
import { IosArrowDown, IosArrowUp } from '@meronex/icons/ios';
import SqillButton from '../../SqillButton';
import GrSend from '@meronex/icons/gr/GrSend';




const SyncRequest = ({requestType, setRequestType, sendAll, setSendAll, setSendRequest}) => {

    const components = [
        <TypeChanger key="sync-type-changer" choices={['Theme', 'Specific']} current={requestType} change={setRequestType} double={true} />,
        <ChooseCreators key="choose-creators" sendAll={sendAll} setSendAll={setSendAll} />,
        <SyncSecondContainer key="sync-second-container" />,
        <SqillButton key="submit-button" text="Send Request" onClick={() => {setSendRequest(true)}} color="white" size="xs" background="gradient" paddingX="6" paddingY="4">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M0.473719 7.82837L3.19881 9.02118L11.052 4.73698L6.31545 10.2629L13.1045 13.3543C13.2055 13.3993 13.3137 13.4206 13.4203 13.4206C13.5632 13.4206 13.7045 13.382 13.8308 13.3054C14.0502 13.172 14.1915 12.9399 14.2089 12.6833L14.9983 0.841968C15.0165 0.562513 14.8862 0.294898 14.6549 0.137013C14.4244 -0.0200819 14.1284 -0.0437646 13.8742 0.0746489L0.453983 6.39004C0.172949 6.52266 -0.00388238 6.80606 6.47362e-05 7.11552C0.00480128 7.42497 0.189526 7.70364 0.473719 7.82837ZM4.73661 14.9995L8.50689 13.1712L4.73661 11.4123V14.9995Z" fill="white"/>
            </svg>
        </SqillButton>
        
    ]

    return (
        <>
        <BoxContainer size="h-full" title="" componentList={components} />
        </>
    )
}

const ChooseCreators = ({sendAll, setSendAll}) => {
    return (
        <div className="w-full bg-white rounded-2xl px-8 py-4 flex flex-col gap-6">
            <h5 className="font-normal text-xl text-gray-400">Choose Creators</h5>
            <div className="w-full h-28 flex justify-center items-center">
                <div className="relative w-60 h-20 flex justify-center">
                    <span className="absolute left-0 w-20 h-20 bg-gray-100 rounded-full border-2 border-white"></span>
                    <span className="absolute left-12 w-20 h-20 bg-gray-100 rounded-full border-2 border-white"></span>
                    <span className="absolute left-24 w-20 h-20 bg-gray-100 rounded-full border-2 border-white"></span>
                    <span className="absolute left-36 w-20 h-20 bg-gray-100 rounded-full border-2 border-white"></span>
                    <span className="absolute left-48 w-20 h-20 bg-gray-100 rounded-full border-2 border-white flex justify-center items-center font-extrabold text-2xl">+</span>
                </div>
            </div>
            <div className="w-full justify-center flex">
                <TypeChanger choices={['Send to all', '']} current={sendAll} change={setSendAll}/>
            </div>
        </div>
    );
};

const TypeChanger = ({choices, current, change, double}) => {

    return (
        <div className='flex gap-6 items-center'>
            <span className={` ${double ? 'text-black font-semibold text-xl' : 'font-normal text-gray-400 text-xl'}`}onClick={() => change(choices[0])}>{choices[0]}</span>
            <div className={`${current=== '' ? 'bg-gray-300' : 'gradient'}  rounded-3xl w-16 h-8 flex justify-between items-center px-1`}>
            {choices.map((choice, index) => {
                return (
                    <div className={`w-6 h-6 rounded-full cursor-pointer ${current === choice ? 'bg-white' : 'transparent'}`} key={index} onClick={() => change(choice)}></div>
                )
            })}
            </div>
            {double ? (
            <span className="text-black font-semibold text-xl"  onClick={() => change(choices[1])}>{choices[1]}</span>
            ) : null}
        </div>
    )
}

const SyncSecondContainer = () => {
    return (
        <div className="flex w-full items-center gap-1/12 bg-white rounded-2xl px-8 py-4 justify-between">
            <TextInput width="6/12" background="gray-100" inputBackground="white" current="" change={() => {}} placeholder="Enter Title" title="Title" inputWidth="7/11"/>
            <div className="w-5/12 flex flex-col justify-center items-start bg-gray gap-4">
                <h5 className="font-normal text-xl text-gray-400">Deadline</h5>
                <div className="flex justify-around items-center bg-gray-100 p-4 rounded-2xl gap-8 w-full h-56">
                    <Calendar />
                </div>
            </div>  
        </div>
    )
}

const Calendar = () => {
    const [day, setDay] = useState(3);
    const [month, setMonth] = useState('Jun');
    const [year, setYear] = useState(2024);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const incrementDay = () => {
        setDay(prevDay => (prevDay < 31 ? prevDay + 1 : 1));
    };

    const decrementDay = () => {
        setDay(prevDay => (prevDay > 1 ? prevDay - 1 : 31));
    };

    const incrementMonth = () => {
        const currentIndex = months.indexOf(month);
        setMonth(months[(currentIndex + 1) % 12]);
    };

    const decrementMonth = () => {
        const currentIndex = months.indexOf(month);
        setMonth(months[(currentIndex - 1 + 12) % 12]);
    };

    const incrementYear = () => {
        setYear(prevYear => prevYear + 1);
    };

    const decrementYear = () => {
        setYear(prevYear => prevYear - 1);
    };

    return (
        <>
            <div className="flex flex-col items-center gap-2 w-3/12">
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white" onClick={incrementDay}><IosArrowUp/></button>
                <span className="text-xl font-bold">{String(day).padStart(2, '0')}</span>
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white" onClick={decrementDay}><IosArrowDown/></button>
            </div>
            <div className="flex flex-col items-center gap-2 w-3/12">
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white" onClick={incrementMonth}><IosArrowUp/></button>
                <span className="text-xl font-bold">{month}</span>
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white" onClick={decrementMonth}><IosArrowDown/></button>
            </div>
            <div className="flex flex-col items-center gap-2 w-3/12">
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white" onClick={incrementYear}><IosArrowUp/></button>
                <span className="text-xl font-bold">{year}</span>
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white" onClick={decrementYear}><IosArrowDown/></button>
            </div>
        </>
    );
};

const TextInput = ({background, inputBackground,width, current, change, placeholder, title ,inputWidth}) => {

    return (
        <div className={`w-${width} flex flex-col justify-center items-start rounded-2xl gap-4`} >
            <h5 className="font-normal text-xl text-gray-400">{title}</h5>
            <div className={`bg-${background} w-full rounded-2xl flex justify-center items-center h-56`}>
                <input 
                    className={`w-${inputWidth} h-10 rounded-2xl bg-${inputBackground} text-start px-4 py-2 placeholder-gray-400 placeholder-light text-xl focus:outline-none focus:ring-2 focus:ring-greenSqill-500`} 
                    value={current} 
                    onChange={(e) => change(e.target.value)} 
                    placeholder={placeholder} 
                />
            </div>
        </div>
    )
}

const TextArea = ({background, inputBackground,width, current, change, placeholder, title}) => {

    return (
        <div className={`w-${width} flex flex-col justify-center items-start rounded-2xl gap-4`} >
            <h5 className="font-normal text-xl text-gray-400">{title}</h5>
                <textarea   
                    className={`w-full h-56 rounded-2xl bg-${background} text-start px-8 py-4  text-xl border-0 focus:outline-none focus:ring-2 focus:ring-greenSqill-500 placeholder-gray-400 placeholder-light`} 
                    value={current} 
                    onChange={(e) => change(e.target.value)} 
                    placeholder={placeholder}
                />
        </div>
    )
}

const BoxSelector = ({width, title, boxWidth, boxes }) => {
    
    console.log(boxes)


    return (
        <div className={`w-${width} flex flex-col justify-center items-start rounded-2xl gap-4`} >
            <h5 className="font-normal text-xl text-gray-400">{title}</h5>
            <div className={`flex justify-between w-full`}>
                {boxes.map((box, index) => {
                    return (
                        <div key={index} className={`
                            w-${boxWidth} 
                            bg-${box?.boxBackground} 
                            rounded-${box?.borderRadius}
                            flex flex-col items-start px-4 py-2 h-40 items-between`}>
                            <span className="h-1/3"></span>
                            <div className={`w-full h-1/3 items-center flex justify-center`} >
                                {box?.icon ? (
                                    <span  className="text-3xl">{box?.icon} </span> 
                                ) : null}
                            </div>
                            <div className={`justify-${box?.textPosition} text-${box?.textColor} items-center flex w-full h-1/3 font-${box?.weight}`}>
                                {box.text ? (<span className={`font-regular text-${box?.textSize}`}>{box?.text}</span>) : null}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export { SyncRequest, ChooseCreators, TypeChanger, SyncSecondContainer, Calendar, TextInput, TextArea, BoxSelector }
