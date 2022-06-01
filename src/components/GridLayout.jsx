import * as React from 'react';
import '../styles/globals.css';

const GridLayout = ({children}) => {
    
    return (
        <>
            <div className='grid'>
                {children}
            </div>
        </>
    )
}

export default GridLayout;