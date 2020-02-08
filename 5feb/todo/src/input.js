import React from 'react';

const Input=(props)=>{
  
   return(<>
        <input onChange={props.oninput}/>
        {/* <h1>{counter}</h1> */}
        </>
    )
}

export default Input