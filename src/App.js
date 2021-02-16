import './App.css';
import Editor from './Editor';
import Output from './Output';

function App() {
  return (
    <div className="app">
      <div className="app__editors">
        <Editor 
        language='HTML'
        />
        <Editor 
        language='CSS'
        />
        <Editor 
        language='JS'
        />
      </div>
      <Output />
    </div>
  );
}

export default App;
