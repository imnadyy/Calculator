import React from "react";
import './input.css';

const input = (props) => {
    return(

        <div className='inputCard'>
            <input type='number' placeholder='Enter first  number' onChange={props.changing1} value={props.val1}/><br/>
            <input type='number' placeholder='Enter second number' onChange={props.changing2} value={props.val2}/><br/>
            <button onClick={props.add}>+</button> 
            <button onClick={props.subtract}>-</button> 
            <button onClick={props.multiply}>*</button> 
            <button onClick={props.divide}>/</button> 
        </div>
    );
}

export default input;