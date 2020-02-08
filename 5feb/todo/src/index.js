import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Input from './input'
import Makearray from './makearray'
import Summit from './summit'
import netwrkcall from './networkcall/netwrkcall'

const Myname=()=>{

    const [input,setinput]=useState('')
    const [arr,setarr]=useState([])

    useEffect(()=>{
        netwrkcall.getdata().then(
            (res)=>{
                setarr(res)
            }
        )
        },[])


    const inputset=(event)=>{
        setinput(event.target.value)
    }
    

    const handler=(event)=>{
        setarr(arr.concat(input))
        netwrkcall.insertdata(input)
    }
    const clickhandler=(event)=>{
        netwrkcall.add_imp(event.target.id) 
        
    }

return(<>
       <Input oninput={inputset}/>
       <Summit arrHandler={handler}/>
       <Makearray arr={arr} clickhandler={clickhandler}/>
        
       </>)}

ReactDOM.render(<Myname />, document.getElementById('root'));


