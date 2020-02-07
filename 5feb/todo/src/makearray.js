
import React from 'react';
const Makearray=(props)=>{
    return(<>
    <ul>{props.arr.map((i)=>(<li>{i}</li>))}</ul>
    </>)
}
export default Makearray 