import React,{useState} from "react";

const Keypad = ({result,setResult,subResult,setSubResult}) => {
    const [operator, setOperator]= useState("");
    const [a, setA] = useState("");

   const clickHandler = (e) => 
   {
       let temp;
        if (e.target.value) {
             if (result === "0" || result === "error") {
                temp = e.target.value
            } 
            else {
                temp = result + e.target.value;
            }
            if(operator) setA(temp)
            setResult(temp);
            return;
        }

        let nameVal = e.target.name;
        let resValue = parseFloat(result);
        // console.log(resValue);
        
        switch (nameVal) 
        {   
            case "+": 
                {//plus
                    let tempVal = result;
                    if (a) {
                        tempVal = handleResult()
                    }
                    setSubResult(tempVal + "+");
                    setOperator("+");
                    setResult('0')
                    break;
                }
            case "-":
                {// minus
                    let tempVal = result;
                    if (a) {
                        tempVal = handleResult()
                    }
                    setSubResult(tempVal + "-");
                    setOperator("-");
                    setResult('0')
                    break;
                }
            case "*": 
                {// multiply
                let tempVal = result;
                    if (a) {
                        tempVal = handleResult()
                    }
                    setSubResult(tempVal + "*");
                    setOperator("*");
                    setResult('0')
                    break;
                }
            case "/": 
                {// devide
                    let tempVal = result;
                    if (a) {
                        tempVal = handleResult()
                    }
                    setSubResult(tempVal + "/");
                    setOperator("/");
                    setResult('0')
                    break;
                }
                    
            case "sqrt":
                setSubResult("sqrt(" + resValue + ")");
                setResult((Math.sqrt(resValue)).toString());
                break;

            case "inverse":
                {
                    if (result === "0" || result === "") {
                    setResult("Cannot devide by zero");
                    setSubResult('')
                    } 
                    else {
                    setSubResult(`1/(${resValue})`);
                    setResult((1 / resValue).toString());
                    }
                    break;
                }
            case "power":
                setSubResult(`pow(${resValue})`);
                setResult((Math.pow(resValue, 2)).toString());
                break;

            case "c":
                setResult("0");
                setSubResult("");
                // setOperator('')
                break;

            case "clear":
                setResult("0");
                break;

            case "negate":
                if (result.charAt(0) === "-") {
                setResult(result.substring(1));
                } 
                else {
                setResult("-" + result);
                }
                break;
            case "eval":
                {
                    let temp = subResult;
                    if (temp[temp.length - 1] === '='){
                        temp = temp.slice(0, temp.length - 1)
                        // temp += r
                        // temp = '' + b +result
                    }
                    let tempA = a;
                    if (!tempA) tempA = result;
                    // console.log(temp,A )
                    setResult(eval(temp+tempA ))
                    setSubResult(temp +tempA + '=')
                    setA('')
                    break;
                }
            default:{
                setResult("error")
                setSubResult("");
            }
        }
    };
       
   const deleteHandler = () => {
     setResult(result.slice(0, -1));
     setA(a.slice(0, -1));
     if (result === "" || result.length === 1 || result === "error") {
       setResult("0");
     }
   };

    const handleResult = () => {
        let res;
        try{
            res = (eval(subResult + result)).toString();
            setResult(res);
        } catch {
            setResult("error");
        }
        
        setA("");
        return res;
    }
    // const calculate = () => {
    //   let resValue;
    //   let expValue =subResult+ result;
    //   try {
    //     resValue = eval(expValue).toString();
    //   } 
    //   catch {
    //     setResult("error");
    //   }
    //   if (resValue && result !== "0") {
    //     setSubResult(expValue);
    //     setResult(resValue);
    //   }
    // };

    return (
        <div className="keypad">
            <div className="special-keys">
                <button>MC</button>
                <button>MR</button>
                <button>M+</button>
                <button>M-</button>
                <button>MS</button>
                <button>M<sup>&#9660;</sup></button>
            </div>
            <div className="keys">
                <button value="%" onClick={clickHandler}>%</button>
                <button name="clear" onClick={clickHandler}>CE</button>
                <button name="c" onClick={clickHandler}>C</button>
                <button name="delete" onClick={deleteHandler}><i className="fa-solid fa-delete-left"></i></button>
                
                <button name="inverse" onClick={clickHandler}><sup>1</sup>/<sub></sub>x</button>
                <button name="power" onClick={clickHandler}>x<sup>2</sup></button>
                <button name="sqrt" onClick={clickHandler} ><span>&#8730;</span></button>
                <button name="/" onClick={clickHandler}>&divide;</button>
                
                <button value="7" onClick={clickHandler}>7</button>
                <button value="8" onClick={clickHandler}>8</button>
                <button value="9" onClick={clickHandler}>9</button>
                <button name="*" onClick={clickHandler}>x</button>
                
                <button value="4" onClick={clickHandler}>4</button>
                <button value="5" onClick={clickHandler}>5</button>
                <button value="6" onClick={clickHandler}>6</button>
                <button name="-" onClick={clickHandler}>&ndash;</button>
                
                <button value="1" onClick={clickHandler}>1</button>
                <button value="2" onClick={clickHandler}>2</button>
                <button value="3" onClick={clickHandler}>3</button>
                <button name="+" onClick={clickHandler}>+</button>
                
                <button name="negate" onClick={clickHandler}>+/-</button>
                <button value="0" onClick={clickHandler}>0</button>
                <button value="." onClick={clickHandler}><b>.</b></button>

                <button name="eval" onClick={clickHandler} id="result">=</button>
            </div>
        </div>
    );
}

export default Keypad;