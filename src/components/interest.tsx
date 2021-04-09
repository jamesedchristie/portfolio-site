import React from 'react';

export function Interest({ children }: { children: React.ReactNode }) {
    return (
        <li className='mb-3'>
            {children}
        </li>
    )
}