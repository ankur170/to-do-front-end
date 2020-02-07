import React from 'react';

const Input=(props)=>{
  
   return(<>
        <input onChange={props.handler}/>
        {/* <h1>{counter}</h1> */}
        </>
    )
}

export default Input