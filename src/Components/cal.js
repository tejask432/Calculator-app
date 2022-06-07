import {
    faDeleteLeft,
    faDivide,
    faMinus,
    faPlus,
    faSquareRootVariable,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const digits = [
    "%",
    "CE",
    "C",
    faDeleteLeft,
    "1/x",
    "x2",
    faSquareRootVariable,
    faDivide,
    7,
    8,
    9,
    faXmark,
    4,
    5,
    6,
    faMinus,
    1,
    2,
    3,
    faPlus,
    "+/-",
    0,
    ".",
    "=",
];
const Calculator = () => {
    const [equation, setEquation] = useState("");
    const [result, setResult] = useState("0");
    const [operand, setOperand] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");

    const handleClick = (i) => {
        console.log(i);
        switch (i) {
            case 0: // %
                setEquation(result + "%");
                break;
            case 1: // CE
                setEquation("");
                setResult("0");
                break;
            case 2: //C
                setEquation("");
                setResult("0");
                break;
            case 3: {
                // Backspace
                if (result.length === 1) setResult("0");
                else {
                    setResult(result.slice(0, result.length - 1));
                }
                setEquation("");

                break;
            }
            case 4: // 1/x
                if (result === 0) {
                    setResult("Cannot devide by zero");
                    break;
                } else {
                    const expression = `1/(${result})`;
                    setEquation(expression);
                    setResult(eval(expression));
                }
                break;
            case 5: // x^2
                setEquation(`sqr(${result})`);
                setResult(result * result);
                break;
            case 6: // √x
                setEquation(`√(${result})`);
                setResult(Math.sqrt(result));
                break;

            case 7: {// devide
            let add = result;
                if (b) {
                    add = handleResult()
                }
                setEquation(add + "/");
                setOperand("/");
                setResult('0')
                break;}

            case 11: {// multiply
            let add = result;
                if (b) {
                    add = handleResult()
                }
                setEquation(add + "*");
                setOperand("*");
                setResult('0')
                break;}
            case 15: {// minus
            let add = result;
                if (b) {
                    add = handleResult()
                }
                setEquation(add + "-");
                setOperand("-");
                setResult('0')
                break;}
            case 19: {// plus
                let add = result;
                if (b) {
                    add = handleResult()
                }
                setEquation(add + "+");
                setOperand("+");
                setResult('0')
                break;}

            case 23: {
                let temp = equation;
                if (temp[temp.length - 1] === '='){
                    temp = temp.slice(0, temp.length - 1)
                    // temp += r
                    // temp = '' + b +result
                }
                let tempB = b;
                if (!tempB) tempB = result;
                console.log(temp,b )
                setResult(eval(temp+tempB ))
                setEquation(temp +tempB + '=')
                setB('')
            }

            default:
                break;
        }
    };

    const handleResult = () => {
        let add = eval(equation + result);
        setResult(add + '');
        setB("");
        return add
    }

    const handleNumeric = (number) => {
        let temp = result;
        // if (equation) temp = "0";
        if (number === ".") temp = result + ".";
        else if (number === "+/-") {
            temp = "-" + result;
        } else {
            temp =
                result === "0" || temp === "0" ? "" + number : result + number;
        }
        if (operand) setB(temp);
        setResult(temp);
    };
    return (
        <div className="calculator">
            <div className="screen">
                <p>{equation}</p>
                <h1>{result}</h1>
            </div>
            <div className="grid-container">
                {digits.map((d, i) => {
                    if (!isNaN(d) || [20, 22].includes(i)) {
                        return (
                            <div
                                onClick={() => handleNumeric(d)}
                                className="grid-item"
                            >
                                {d}
                            </div>
                        );
                    } else if ([0, 1, 2, 4, 5, 23].includes(i)) {
                        return (
                            <div
                                onClick={() => handleClick(i)}
                                className="grid-item"
                            >
                                {d}
                            </div>
                        );
                    } else {
                        return (
                            <div
                                onClick={() => handleClick(i)}
                                className="grid-item"
                            >
                                <FontAwesomeIcon icon={d} />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Calculator;