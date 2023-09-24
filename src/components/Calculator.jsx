import React, { useState } from 'react'
import Button from './Button'
import Output from './Output'
import{AiOutlineCloseSquare} from 'react-icons/ai'
import { evaluate } from 'mathjs'

const Calculator = () => {
    const[expression,setExpression]=useState([])
    const[result,setResult]=useState('')
    const addExpression=(symbol)=>{
        if(expression=='' && (symbol=='*'||symbol=='%' || symbol=='+' || symbol=='/')){
        }
        else if ((expression[expression.length-1]=='%'||expression[expression.length-1]=='/'||expression[expression.length-1]=='*'||expression[expression.length-1]=='-'||expression[expression.length-1]=='+'||expression[expression.length-1]=='.') && (symbol=='*'||symbol=='%' || symbol=='+' || symbol=='/' || symbol=='-' || symbol=='.')){

        }
        else{
            setExpression([...expression,symbol])
        }
    }
    const clear=()=>{
        setExpression('')
        setResult('')
    }
    const addResult=()=>{
        const input=expression.join('')
        setResult(evaluate(input))
    }
    const back=()=>{
        expression.pop()
        let input=expression.splice('')
        setExpression(input)
        setResult('')
    }
    return (
        <>
            <div className='flex flex-col'>
                <Output expression={expression} result={result} />
                <div className='bg-gray-900 w-72 grid grid-cols-4 gap-3 rounded-b-lg p-2'>
                    <Button btnClick={clear} symbol='C' color />
                    <Button btnClick={addExpression} symbol='%' color />
                    <Button  btnClick={back} symbol={<AiOutlineCloseSquare className='mx-auto'/>} color />
                    <Button btnClick={addExpression} symbol='/' color />
                    <Button btnClick={addExpression} symbol='9' />
                    <Button btnClick={addExpression} symbol='8' />
                    <Button btnClick={addExpression} symbol='7' />
                    <Button btnClick={addExpression} symbol='*' color />
                    <Button btnClick={addExpression} symbol='6' />
                    <Button btnClick={addExpression} symbol='5' />
                    <Button btnClick={addExpression} symbol='4' />
                    <Button btnClick={addExpression} symbol='-' color />
                    <Button btnClick={addExpression} symbol='3' />
                    <Button btnClick={addExpression} symbol='2' />
                    <Button btnClick={addExpression} symbol='1' />
                    <Button btnClick={addExpression} symbol='+' color />
                    <Button btnClick={addExpression} symbol='00' />
                    <Button btnClick={addExpression} symbol='0' />
                    <Button btnClick={addExpression} symbol='.' />
                    <Button btnClick={addResult} symbol='=' color />
                </div>
            </div>
        </>
    )
}

export default Calculator
