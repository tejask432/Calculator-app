import React,{useState} from "react";

const Keypad = ({result,setResult,subResult,setSubResult}) => {
    const [operator, setOperator]= useState("");
    const [a, setA] = useState("");
    const [memory, setMemory] = useState([]);
    const[opcheck,setOpcheck]=useState(false);

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
            if(operator) setA(temp);
            setResult(temp);
            return;
        }

        let nameVal = e.target.name;
        let resValue = parseFloat(result);
        // console.log(resValue);
        switch (nameVal) 
        {   
            case ".":
                {
                    if(!(result.includes('.'))){
                        setResult(result+ nameVal);
                    }
                    break;
                }
            case "%":
            {
                if(!(result.includes('%'))){
                    setResult(result+ nameVal);
                }
                break;
            }
            case "+": 
                {//plus
                    let clickedOp = "+";
                    if(result==="0") {
                        handlerOperatorchange(clickedOp);
                        break;
                    }

                    let tempVal = result;
                    if (a) {
                        tempVal = handleResult();
                    }
                    setSubResult(tempVal + clickedOp);
                    setOperator(clickedOp);
                    setResult('0')
                    break;
                }
            case "-":
                {// minus
                    let clickedOp = "-";
                    if(result==="0") {
                        handlerOperatorchange(clickedOp);
                        break;
                    }
                    let tempVal = result;
                    if (a) {
                        tempVal = handleResult()
                    }
                    setSubResult(tempVal + clickedOp);
                    setOperator(clickedOp);
                    setResult('0')
                    break;
                }
            case "*": 
                {// multiply
                    let clickedOp = "*";
                    if(result==="0") {
                        handlerOperatorchange(clickedOp);
                        break;
                    }
                    let tempVal = result;
                    if (a) {
                        tempVal = handleResult()
                    }
                    setSubResult(tempVal + clickedOp);
                    setOperator(clickedOp);
                    setResult('0')
                    break;
                }
            case "/": 
                {// devide
                    let clickedOp = "/";
                    if(result==="0") {
                        handlerOperatorchange(clickedOp);
                        break;
                    }
                    let tempVal = result;
                    if (a) {
                        tempVal = handleResult()
                    }
                    setSubResult(tempVal + clickedOp);
                    setOperator(clickedOp);
                    setResult('0')
                    break;
                }
                    
            case "sqrt":
                setOpcheck(true);
                setSubResult("sqrt(" + resValue + ")");
                setResult((Math.sqrt(resValue)).toString());
                break;

            case "inverse":
                {
                    setOpcheck(true);
                    if (result === "0" || result === "") {
                        setResult("Cannot devide by zero");
                        setSubResult('')
                    } else {
                        setSubResult(`1/(${resValue})`);
                        setResult((1 / resValue).toString());
                    }
                    break;
                }
            case "power":
                setOpcheck(true);
                setSubResult(`pow(${resValue})`);
                setResult((Math.pow(resValue, 2)).toString());
                break;

            case "c":
                setResult("0");
                setSubResult("");
                setOperator('');
                setOpcheck(false);
                break;

            case "clear":
                setResult("0");
                break;

            case "negate":
                {
                    if(result==="0") break;

                    if (result.charAt(0) === "-") {
                        setResult(result.substring(1));
                        setA(a.substring(1));
                    } else {
                        setResult("-" + result);
                        setA("-"+ a)
                    }
                    break;
                }
            case "eval":
                {
                    let temp = subResult;
                    if (temp[temp.length - 1] === '='){
                        break;
                    }
                    let tempA = a;
                    if (!tempA) tempA = result;
                    // console.log(temp,A ) 
                    setResult((eval(temp+tempA )).toString());
                    setSubResult(temp +tempA + '=');
                    setA('')
                    break;
                }
            default:
                break;
        }
        // console.log(operator);
    };
       
   const deleteHandler = () => {
     setResult(result.slice(0, -1));
     setA(a.slice(0, -1));
     if (result === "" || result.length === 1 || result === "error") {
       setResult("0");
     }
   };

    const handleResult = () => {
        let res= opcheck ? result : (subResult + result);
        try{
            res = (eval(res)).toString();
            setResult(res);
        } catch {
            setResult("error");
        }
        
        setA("");
        setOpcheck(false);
        return res;
    }

    const handlerOperatorchange = (clickedOp) =>{
        let lastOp = subResult[subResult.length -1];
        console.log(lastOp);
        if(lastOp !== clickedOp)
        {
            setSubResult(subResult.slice(0, -1) + clickedOp)
        }
    }

    const Mkeyhandler = (e) => {
        let MkeyValue = e.target.value;
        
        switch(MkeyValue){
            case "MC":
                console.log("mc")
                if(memory.length>0) setMemory([]);
                break;

            case "MR":
                console.log("mr")
                if(memory.length>0){
                    setResult((memory[memory.length-1]).toString());
                }
                break;

            case "M+":
                console.log("m+")
                if(memory.length>0){
                    let items= [...memory];
                    let res = parseFloat(items.pop());
                    res += parseFloat(result);
                    items.push(res)
                    // console.log(items)
                    setMemory([...items]);
                }
                break;

            case "M-":
                console.log("m-")
                if(memory.length>0){
                    let items= [...memory];
                    let res = parseFloat(items.pop());
                    res -= parseFloat(result);
                    items.push(res)
                    // console.log(items)
                    setMemory([...items]);
                }
                break;

            case "MS":
                console.log("ms")
                setMemory(memory => [...memory,result]);
                break;

            case "M":
                break;

            default:break;
        }
    };
    
    return (
        <div className="keypad">
            <div className="special-keys">
                <button value="MC" onClick={Mkeyhandler} disabled={memory.length?false:true}>MC</button>
                <button value="MR" onClick={Mkeyhandler} disabled={memory.length?false:true}>MR</button>
                <button value="M+" onClick={Mkeyhandler}>M+</button>
                <button value="M-" onClick={Mkeyhandler}>M-</button>
                <button value="MS" onClick={Mkeyhandler}>MS</button>
                <button disabled={memory.length?false:true}>M<sup>&#9660;</sup></button> {/*  value="M" onClick={Mkeyhandler} */}
            </div>
            <div className="keys">
                <button name="%" onClick={clickHandler}>%</button>
                <button name="sqrt" onClick={clickHandler} ><span>&#8730;</span></button>
                <button name="power" onClick={clickHandler}>x<sup>2</sup></button>
                <button name="inverse" onClick={clickHandler}><sup>1</sup>/<sub></sub>x</button>
                
                <button name="clear" onClick={clickHandler}>CE</button>
                <button name="c" onClick={clickHandler}>C</button>
                <button name="delete" onClick={deleteHandler}><i className="fa-solid fa-delete-left"></i></button>
                <button name="/" onClick={clickHandler} className="opbtn">&divide;</button>
                
                <button value="7" onClick={clickHandler} className="keybtn">7</button>
                <button value="8" onClick={clickHandler} className="keybtn">8</button>
                <button value="9" onClick={clickHandler} className="keybtn">9</button>
                <button name="*" onClick={clickHandler} className="opbtn">x</button>
                
                <button value="4" onClick={clickHandler} className="keybtn">4</button>
                <button value="5" onClick={clickHandler} className="keybtn">5</button>
                <button value="6" onClick={clickHandler} className="keybtn">6</button>
                <button name="-" onClick={clickHandler} className="opbtn">&ndash;</button>
                
                <button value="1" onClick={clickHandler} className="keybtn">1</button>
                <button value="2" onClick={clickHandler} className="keybtn">2</button>
                <button value="3" onClick={clickHandler} className="keybtn">3</button>
                <button name="+" onClick={clickHandler} className="opbtn">+</button>
                
                <button name="negate" onClick={clickHandler}>+/-</button>
                <button value="0" onClick={clickHandler} className="keybtn">0</button>
                <button name="." onClick={clickHandler}><b>.</b></button>

                <button name="eval" onClick={clickHandler} className="opbtn">=</button>
            </div>
        </div>
    );
}

export default Keypad;