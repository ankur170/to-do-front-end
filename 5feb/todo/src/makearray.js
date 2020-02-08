
import React from 'react';
const Makearray=(props)=>{

    const styl={
        color:'red'
    }
    return(<>
    <ul>
        {
            props.arr.map(
            (i)=><li key={i._id} id={i._id} style={i.important?styl:null} onClick={props.clickhandler}>{ i.data}</li>
                
            )
        }
    </ul>

    </>)
}
export default Makearray 