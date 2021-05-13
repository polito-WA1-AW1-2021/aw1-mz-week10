import './App.css';
import {useEffect, useState} from "react";

function Count(props) {
  
  useEffect( ()=>{
    console.log(`My static number is ${props.num}`)
  },  [] );
  // run only once

  useEffect( ()=>{
    console.log(`My dynamic number is ${props.num}`)
  },  [props.num] ) ;
  // run at every change
  
  return <div>{props.num}</div> ;
}

function QuickGate() {
  const [open, setOpen] = useState(false);
  
  useEffect(()=>{
    setTimeout(()=>setOpen(false), 1000)    
  }, [open]);
  
  const openMe = () => {
    setOpen(true);    
  };    
  
  return <div onClick={openMe}>   
    {open ? <span>GO</span> : <span>STOP</span>}
  </div>;
}



function App() {
const [num, setNum] = useState(5);

  return (
    <div className="App">
      <Count num={num} /><button onClick={()=>setNum(i=>i+1)}>+</button>
      <QuickGate/>
    </div>
  );
}

export default App;
