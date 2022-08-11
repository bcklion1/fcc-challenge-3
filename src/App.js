
import React, { useState } from "react"
import { Slider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './App.css';

let Q={url:"https://house-kit.s3.amazonaws.com/House+Percussion+06.wav",tag:"Percussion 1"};
let W={url:"https://house-kit.s3.amazonaws.com/House+Percussion+26.wav",tag:"Percussion 2"};
let E={url:"https://house-kit.s3.amazonaws.com/House+Percussion+31.wav",tag:"Percussion 3"};
let A={url:"https://house-kit.s3.amazonaws.com/House+Cymbal+17.wav",tag:"Bell"};
let S={url:"https://house-kit.s3.amazonaws.com/House+Clap+16.wav",tag:"Clap"};
let D={url:"https://house-kit.s3.amazonaws.com/House+Snap+01.wav",tag:"Snap"};
let Z={url:"https://house-kit.s3.amazonaws.com/House+SFX+05.wav",tag:"Zing"};
let X={url:"https://house-kit.s3.amazonaws.com/House+Kick+02.wav",tag:"Bass"};
let C={url:"https://house-kit.s3.amazonaws.com/House+HiHat+19.wav",tag:"House HH"};
let QAudio;
let WAudio;
let EAudio;
let AAudio;
let SAudio;
let DAudio;
let ZAudio;
let XAudio;
let CAudio;

function App() {
  const [display,setDisplay] = useState("")
  const [power,setPower]= useState(false) //true means on false means off
  const [volume, setVolume] = useState(30);
  return (
    <div class="flex center">
      <div class="machine">
        <div><Noises volume={volume} power={power} setDisplay={setDisplay}/></div>
        <div><Controls setVolume={setVolume} setDisplay={setDisplay} display={display} power={power} setPower={setPower}/></div>
      </div>
    </div>
  );
}

function Noises(props){
  function noisePlayed(note){
    if (props.power===false){
      return
    }
    switch(note){
      case "Q":
        props.setDisplay(Q.tag);
        QAudio.volume=props.volume*.01
        QAudio.play()
        break;
      case "W":
        props.setDisplay(W.tag);
        WAudio.volume=props.volume*.01
        WAudio.play()
        break;
      case "E":
        props.setDisplay(E.tag);
        EAudio.volume=props.volume*.01
        EAudio.play()
        break;
      case "A":
        props.setDisplay(A.tag);
        AAudio.volume=props.volume*.01
        AAudio.play()
        break;
      case "S":
        props.setDisplay(S.tag);
        SAudio.volume=props.volume*.01
        SAudio.play()
        break;
      case "D":
        props.setDisplay(D.tag);
        DAudio.volume=props.volume*.01
        DAudio.play()
        break;
      case "Z":
        props.setDisplay(Z.tag);
        ZAudio.volume=props.volume*.01
        ZAudio.play()
        break
      ;case "X":
        props.setDisplay(X.tag);
        XAudio.volume=props.volume*.01
        XAudio.play()
        break;
      case "C":
        props.setDisplay(C.tag);
        CAudio.volume=props.volume*.01
        CAudio.play()
        break;
      default:
        break;
    }
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
      <audio id="Q" preload="auto" ref={(audio) => {QAudio = audio;}}src={Q.url}/>
      <audio id="W" preload="auto" ref={(audio) => {WAudio = audio;}}src={W.url}/>
      <audio id="E" preload="auto" ref={(audio) => {EAudio = audio;}}src={E.url}/>
      <audio id="A" preload="auto" ref={(audio) => {AAudio = audio;}}src={A.url}/>
      <audio id="S" preload="auto" ref={(audio) => {SAudio = audio;}}src={S.url}/>
      <audio id="D" preload="auto" ref={(audio) => {DAudio = audio;}}src={D.url}/>
      <audio id="Z" preload="auto" ref={(audio) => {ZAudio = audio;}}src={Z.url}/>
      <audio id="X" preload="auto" ref={(audio) => {XAudio = audio;}}src={X.url}/>
      <audio id="C" preload="auto" ref={(audio) => {CAudio = audio;}}src={C.url}/>
    </div>
    
  )
}

function Controls(props){
  
  console.log(props.power)
  return(
    <div class="flex column">
      <div>
      <p className="vol">Power</p>
      <ToggleSwitch label="Volume" power={props.power} setPower={props.setPower} setDisplay={props.setDisplay}/>  
      </div>
      <div class="screen">{props.display}</div>
      <div class="slider">
        <Slider progress defaultValue={30} onChange={(value)=>props.setVolume(value)} />
      </div>
      
      
    </div>
    
  )
}

const ToggleSwitch = ({ label,power,setPower,setDisplay }) => {
  function powerChange(){
    if(power){
      setPower(false)
      setDisplay("")
    }
    else{
      setPower(true)
    }
    // console.log(power)
  }
  return (

      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} onChange={()=>powerChange()}/>
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>

  );
};

export default App;

