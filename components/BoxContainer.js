import React from 'react'
import AiOutlineEllipsis from '@meronex/icons/ai/AiOutlineEllipsis';



const BoxContainer = ({componentList, buttonClick, buttonText, title, showEllipsis, positioning,size }) => {



    return (
        <div className={`${title ? 'py-6' : 'py-16'} w-full bg-gray-100 px-10 
                        rounded-xl overflow-hidden min-h-full gap-20 flex flex-col`}>
            <div className="w-full flex items-center justify-between text-xl font-semibold">
                {title ? ( 
                    <h1 >{title}</h1>
                ) : '' }
                {showEllipsis ?(
                    <AiOutlineEllipsis style={{width:"2rem", height:"2rem", fill:"gray"}} /> 
                ) : '' }
            </div>
            <div className="flex flex-col gap-10 items-center w-full">
                {componentList?.map((component, index) => {
                    return (
                        <React.Fragment key={index}>
                            {component}
                        </React.Fragment>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default BoxContainer