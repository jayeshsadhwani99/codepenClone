import React from 'react';
import './Editor.css';

function Editor({language}) {
    const text = document.getElementById(language);
    console.log(text);
    return (
        <div className='editor'>
            <div className='editor__header'>
                <h2 className="editor__title">{language}</h2>
            </div>
            <textarea id={language} className='editor__code'></textarea>
        </div>
    )
}

export default Editor
