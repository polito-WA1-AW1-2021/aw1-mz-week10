import './App.css';
import {useEffect, useState} from "react";

function TextFlipper() {
  const [text, setText] = useState('') ;    
  const [flipped, setFlipped] = useState('') ;    
  
  useEffect( ()=>{        
    const fetchFlipped = async (t) => {            
      const response = await fetch('/api/flip?text='+text) ;            
      const responseBody = await response.json() ;            
      setFlipped( responseBody.text ) ;     
    };        
    fetchFlipped(text) ;    
  }, [text] ) ;    
  
  const handleChange = (ev) => {       
    setText(ev.target.value) ;    
  } ;    
  
  return <div>        
    Text: <input type='text' value={text} onChange={handleChange}/><br/>        
    Flipped: {flipped}    
  </div> ;
}


function App() {
  return (
    <div className="App">
      <TextFlipper/>
    </div>
  );
}

export default App;
