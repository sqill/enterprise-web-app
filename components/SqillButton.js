import React from 'react'

const SqillButton = ({text, onClick, color, size, disabled, background, children, iconPosition}) => {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled} 
            className={`text-${size} text-${color} ${background} cursor-pointer px-6 py-4 flex gap-2 items-center rounded-3xl`}
        >
            {iconPosition === "right" ? (
                <>
                    
                    {text}
                    {children}
                </>
            ) : (
                <>  
                    {children}
                    {text}  
                </>
            )}
        </button>
    );
}

export default SqillButton;