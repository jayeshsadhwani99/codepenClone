import React from 'react';
import './Output.css';

function Output() {
    return (
        <div className='output'>
            <div className='output__header'>
                <h1>Output</h1>
            </div>
            <iframe className='output__frame'></iframe>
        </div>
    )
}

export default Output
