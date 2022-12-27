
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

import React, {useState} from 'react';


const App=()=>{
  const[preview,setPreview]=useState('Update CV');

  const[buttonValue,setButtonValue]=useState('Preview');

  const changePreviewButton=(e)=>{
    e.preventDefault();
    setPreview(document.getElementById("previewButton").textContent);
    if (buttonValue === 'Preview') {
       setButtonValue('Update CV');
    }else{
      setButtonValue('Preview');
    };
  };
  return     <div className="App">
    <header className="App-header">
      <h1>CV Generator App</h1>
    </header>
    <div className="App-content">
      <div className="button"> 
              <button type="submit" onClick={changePreviewButton} id="previewButton">
               {buttonValue}
              </button>
      </div>
      <GeneralInfo preview={preview}/>
      <Education preview={preview}/>
      <Experience preview={preview}/>
    </div>
    <footer className="App-footer">
      @arnelsr
    </footer>
  </div>
};

export default App;
