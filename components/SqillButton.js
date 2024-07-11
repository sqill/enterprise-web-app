import React from 'react'

const SqillButton = ({text, onClick, color, size, disabled, background, children, iconPosition, paddingX, paddingY}) => {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled} 
            className={`text-${size} text-${color} ${background} cursor-pointer px-${paddingX} py-${paddingY} flex gap-2 items-center rounded-3xl`}
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