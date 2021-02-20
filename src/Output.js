import React, { useEffect } from 'react';
import './Output.css';

function Output({ srcDoc }) {

    return (
        <div className='output'>
            <div className='output__header'>
                <h1>Output</h1>
            </div>
            <iframe srcDoc={srcDoc} className='output__frame'></iframe>
        </div>
    )
}

export default Output
