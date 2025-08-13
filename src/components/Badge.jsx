import React from 'react';

export default function Badge({ shape = 'square', children, color = 'gray' }) {
    return (
        <span className={`badge ${shape} ${ color }`}>
            {children}
        </span>
    );
}