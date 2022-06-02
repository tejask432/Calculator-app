import React,{ useState } from "react";
import './App.css'

const App = () => {
    const [result, setResult]= useState(0);
    const [subResult, setSubResult]= useState('');

    const clickHandler = (event) =>{
        event.preventDefault(); 
        if(event.target.value ==='c') return setResult(0);
        if(event.target.value ==='clear') { setResult(0);setSubResult(''); return;}
        setResult(result + event.target.value);
    };
    return(
        <>
            <div className="container">
                <div className="header">
                    <button><i className="fa-solid fa-bars"></i></button>
                    <h2>Calculator</h2>
                    <button><i className="fa-solid fa-clock-rotate-left"></i></button>
                </div>
                <form>
                    <input id="sub-text" type="text" value={subResult} disabled/>
                    <input id="main-text" type="text" value={result} disabled/>
                </form> 
                <div className="keypad">
                    <div className="special-keys">
                        <button>MC</button>
                        <button>MR</button>
                        <button>M+</button>
                        <button>M-</button>
                        <button>MS</button>
                        <button>M&#9660;</button>
                    </div>
                    <div className="keys">
                    <button value={'%'} onClick={clickHandler}>%</button>
                    <button><span>&#8730;</span></button>
                    <button>x<sup>2</sup></button>
                    <button><sup>1</sup>/<sub></sub>x</button>

                    <button value={'clear'} onClick={clickHandler}>CE</button>
                    <button value={'c'} onClick={clickHandler}>C</button>
                    <button><i className="fa-solid fa-delete-left"></i></button>
                    <button><i className="fa-solid fa-divide"></i></button>
                    
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button><i className="fa-solid fa-x"></i></button>
                    
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button><i className="fa-solid fa-minus"></i></button>
                    
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button><i className="fa-solid fa-plus"></i></button>
                    
                    <button><i className="fa-solid fa-plus-minus"></i></button>
                    <button>0</button>
                    <button><b>.</b></button>
                    <button><i className="fa-solid fa-equals"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;