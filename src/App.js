import React,{ useState } from "react";
const App = () => {
    const [result, setResult]= useState(0);
    return(
        <>
            <div className="container">
                <form>
                    <input type="text" value={result}/>
                </form> 
                <div className="keypad">
                    <button>MC</button>
                    <button>MR</button>
                    <button>M+</button>
                    <button>M-</button>
                    <button>MS</button>
                    <button>M<sup><i class="fa-solid fa-caret-down"></i></sup></button>

                    <button>%</button>
                    <button><span>&#8730;</span></button>
                    <button>x<sup>2</sup></button>
                    <button><sup>1</sup>/<sub></sub>x</button>

                    <button>CE</button>
                    <button>C</button>
                    <button><i class="fa-solid fa-delete-left"></i></button>
                    <button><i class="fa-solid fa-divide"></i></button>
                    
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button><i class="fa-solid fa-x"></i></button>
                    
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button><i class="fa-solid fa-minus"></i></button>
                    
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button><i class="fa-solid fa-plus"></i></button>
                    
                    <button><i class="fa-solid fa-plus-minus"></i></button>
                    <button>0</button>
                    <button><b>.</b></button>
                    <button><i class="fa-solid fa-equals"></i></button>

                </div>
            </div>
        </>
    );
};

export default App;