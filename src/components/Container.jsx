import * as React from 'react';
import '../styles/globals.css';

const Container = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    )
}

export default Container;