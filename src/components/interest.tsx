import React from 'react';

export function Interest({ children }: { children: React.ReactNode }) {
    return (
        <li className='py-3'>
            {children}
        </li>
    )
}