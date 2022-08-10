
import React, { useState } from "react"
import { Slider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './App.css';

function App() {
  const [display,setDisplay] = useState("")
  return (
    <div class="flex center">
      <div class="machine">
        <div><Noises display={display} setDisplay={setDisplay}/></div>
        <div><Controls display={display}/></div>
      </div>
    </div>
  );
}

function Noises(props){
  function noisePlayed(note){
    props.setDisplay(String(note))
  }
  return(

    <div class="drum-wrapper">
      <button onClick={()=>noisePlayed("Q")} class="drum">Q</button>
      <button onClick={()=>noisePlayed("W")} class="drum">W</button>
      <button onClick={()=>noisePlayed("E")} class="drum">E</button>
      <button onClick={()=>noisePlayed("A")} class="drum">A</button>
      <button onClick={()=>noisePlayed("S")} class="drum">S</button>
      <button onClick={()=>noisePlayed("D")} class="drum">D</button>
      <button onClick={()=>noisePlayed("Z")} class="drum">Z</button>
      <button onClick={()=>noisePlayed("X")} class="drum">X</button>
      <button onClick={()=>noisePlayed("C")} class="drum">C</button>
    </div>

  )
}

function Controls(props){
  const [volume, setVolume] = React.useState(30);
  console.log(volume)
  return(
    <div class="flex column">
      <div>
      <p className="vol">Power</p>
      <ToggleSwitch label="Volume" />  
      </div>
      <div class="screen">{props.display}</div>
      <div class="slider">
        <Slider progress defaultValue={30} onChange={(value)=>setVolume(value)} />
      </div>
      
      
    </div>
    
  )
}

const ToggleSwitch = ({ label }) => {
  return (

      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>

  );
};

export default App;
