import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Input from './input'
import Makearray from './makearray'
import Summit from './summit'
import netwrkcall from './networkcall/netwrkcall'

const Myname=()=>{
    const [counter,setCounter]=useState('')
    const handler=(event)=>{
    netwrkcall.insertdata(event.target.value)
    setCounter(event.target.value)
    }

    useEffect(()=>{
        netwrkcall.getdata().then(
            (res)=>{
                setarr(res)
            }
        )
        })
      

    const [arr,setarr]=useState([]) 
    
    const arrHandler=()=>{
            setarr(arr.concat(counter))
    }

return(<>
       <Input handler={handler}/>
       <Summit arrHandler= {arrHandler}/>
       <Makearray arr={arr}/>
        
       </>)}

ReactDOM.render(<Myname />, document.getElementById('root'));


