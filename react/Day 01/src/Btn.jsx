import React from 'react';

export default function Button({
    bgColor = 'blue',
    textColor = 'white',
    text = "Call Now",
    myclass
}) {
    return (
        <button
        className={`m-2 container ${myclass}`}
            style={{
                backgroundColor: bgColor,
                color: textColor,
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                cursor: 'pointer',
                margin:"20px"
            }}
        >
            {text}
        </button>
    );
}