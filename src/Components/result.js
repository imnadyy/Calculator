import React from 'react';
import './result.css';

const result = (props) => {
    return(
        < >
        <h2>The result is {props.gives} </h2>
        <button className='blue-button' onClick={props.reset}>RESET</button>
        </>
    );
}

export default result;