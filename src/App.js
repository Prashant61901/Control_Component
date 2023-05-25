
import './App.css';
import { useState } from 'react';

function App() {

  let [val, SetVal] =useState("")
  let [item, SetItem] = useState("")
  return (
    <div className="App">
      <h2> Controle Component </h2>
     <input type='text' placeholder='Enter Your First Name' value={val} onChange={(e)=>SetVal(e.target.value)}></input> <br></br>
     <br></br>
       <input type='text' placeholder='Enter Your Last Name' value={item} onChange={(e)=>SetItem(e.target.value)}></input> <br></br>

       <h3>First Name: {val}</h3>
       <h3>Last Name: {item}</h3>

    </div>
  );
}

export default App;
