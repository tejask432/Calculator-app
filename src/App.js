import React,{ useState } from "react";
import './App.css'
import Keypad from "./Components/Keypad";

const App = () => {
    const [result, setResult]= useState("0");
    const [subResult, setSubResult]= useState('');

  
    return(
        <>
            <div className="container">
                <div className="header">
                    <button><i className="fa-solid fa-bars"></i></button>
                    <h2>Calculator</h2>
                    <button><i className="fa-solid fa-clock-rotate-left"></i></button>
                </div>
                <div>
                    <input id="sub-text" type="text" value={subResult} disabled/>
                    <input id="main-text" type="text" value={result} disabled/>
                </div> 
                
                <Keypad
                result={result}
                setResult={setResult}
                subResult={subResult}
                setSubResult={setSubResult}/>
            </div>
        </>
    );
};

export default App;