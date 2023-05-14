
import './App.css';
import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState("Default Title");
  return (
    <>
    <div>
      <h1>{title}</h1>
    </div>
    <div>
      <Child setTitle={setTitle} />
    </div>
</>
  )
}


function Child({setTitle}){
  const [tempText, setTempText] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const onChange = (event) => {
    console.log(event.target.value);
    setTempText(event.target.value);
  }
  const onClick = () =>{
    if(isChecked) {setTitle(tempText);}
    else {alert("sorry, title cannot be edited, check the box")}
  }

  const handleCheckboxChange = (event) =>{
    console.log("checkbox boolean is " +  event.target.checked)
    setIsChecked(event.target.checked);
  }
  
    return (
      <div>
      <div style={{display: "inline-block"}}> 
      <label>
      <input type="checkbox"  onChange={handleCheckboxChange} />
        Make title editable
      </label>
      </div>
     
        <form>
          <input type="text" onChange={onChange}></input>
          <input type="button" value="submit" onClick={onClick}></input>
        </form>
      </div>
    )
}

export default App;
