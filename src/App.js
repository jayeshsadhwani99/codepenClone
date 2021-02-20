import './App.css';
import { useEffect, useState } from 'react';
import Editor from './Editor';
import Output from './Output';

function App() {
  const [html, setHtml] = useState(localStorage.getItem('codepen-clone-HTML'));
  const [css, setCss] = useState(localStorage.getItem('codepen-clone-CSS'));
  const [js, setJs] = useState(localStorage.getItem('codepen-clone-JS'));
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(()=> {
    const timeout = setTimeout(()=> {
      setSrcDoc (`<html><body>${html}</body></html><style>${css}</style><script>${js}</script>`)
    }, 250)

    return() => clearTimeout(timeout);
  }, [html, css, js])
  return (
    <div className="app">
      <div className="app__editors">
        <Editor 
        language='HTML'
        value={html}
        onChange={setHtml}
        />
        <Editor 
        language='CSS'
        value={css}
        onChange={setCss}
        />
        <Editor 
        language='JS'
        value={js}
        onChange={setJs}
        />
      </div>
      <Output 
      srcDoc = {srcDoc}
      />
    </div>
  );
}

export default App;
